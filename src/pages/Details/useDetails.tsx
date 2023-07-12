import { useParams, NavigateFunction } from 'react-router-dom';
import { useGetById } from '../../service/hooks';
import { useCallback, useMemo } from 'react';

const useDetails = (navigate: NavigateFunction) => {
	const { id } = useParams();

	const {
		dataById: dataCharacter,
		isLoading: isLoadingCharacter,
		isError: isErrorCharacter,
		isFetching
	} = useGetById({ resource: 'character', id: Number(id) });

	const {
		dataById: dataLocation,
		isLoading: isLoadingLocation,
		isError: isErrorLocation
	} = useGetById({ resource: 'location', id: Number(id) });

	const {
		dataById: dataEpisode,
		isLoading: isLoadingEpisode,
		isError: isErrorEpisode
	} = useGetById({ resource: 'episode', id: Number(id) });

	const isLoading = isLoadingCharacter || isLoadingLocation || isLoadingEpisode;
	const isError = isErrorCharacter || isErrorLocation || isErrorEpisode;

	const characterProps = useMemo(
		() => ['id', 'name', 'image', 'species', 'status', 'gender'],
		[]
	);
	const locationProps = useMemo(
		() => ['id', 'dimension', 'type', 'name', 'residents'],
		[]
	);
	const episodesProps = useMemo(
		() => ['id', 'air_date', 'characters', 'name', 'episode'],
		[]
	);

	const characterArr = useMemo(
		() => [
			{ label: 'Species', value: dataCharacter?.species },
			{ label: 'Status', value: dataCharacter?.status },
			{ label: 'Gender', value: dataCharacter?.gender }
		],
		[dataCharacter?.gender, dataCharacter?.species, dataCharacter?.status]
	);

	const locationArr = useMemo(
		() => [
			{ label: 'Dimension', value: dataLocation?.dimension },
			{ label: 'Location', value: `${dataLocation?.type} - ${dataLocation?.name}` },
			{ label: 'Residents', value: dataLocation?.residents?.length }
		],
		[
			dataLocation?.dimension,
			dataLocation?.name,
			dataLocation?.residents?.length,
			dataLocation?.type
		]
	);

	const episodesArr = useMemo(
		() => [
			{
				label: 'First Episode',
				value: `${dataEpisode?.name} - ${dataEpisode?.episode}`
			},
			{ label: 'Date', value: dataEpisode?.air_date },
			{ label: 'Characters', value: dataEpisode?.characters?.length }
		],
		[
			dataEpisode?.air_date,
			dataEpisode?.characters?.length,
			dataEpisode?.episode,
			dataEpisode?.name
		]
	);

	const handleGoBack = useCallback(() => navigate(-1), [navigate]);

	return {
		dataCharacter,
		dataLocation,
		dataEpisode,
		isLoading,
		isError,
		characterProps,
		locationProps,
		episodesProps,
		characterArr,
		locationArr,
		episodesArr,
		handleGoBack,
		isFetching
	};
};

export default useDetails;
