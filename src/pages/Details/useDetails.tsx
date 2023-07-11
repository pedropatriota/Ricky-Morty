import { useParams, NavigateFunction } from 'react-router-dom';
import { useGetById } from '../../service/hooks';

const useDetails = (navigate: NavigateFunction) => {
	const { id } = useParams();

	const {
		dataById: dataCharacter,
		isLoading: isLoadingCharacter,
		isError: isErrorCharacter
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

	const characterProps = ['id', 'name', 'image', 'species', 'status', 'gender'];
	const locationProps = ['id', 'dimension', 'type', 'name', 'residents'];
	const episodesProps = ['id', 'air_date', 'characters', 'name', 'episode'];

	const isLoading = isLoadingCharacter || isLoadingLocation || isLoadingEpisode;
	const isError = isErrorCharacter || isErrorLocation || isErrorEpisode;

	const characterArr = [
		{ label: 'Species', value: dataCharacter?.species },
		{ label: 'Status', value: dataCharacter?.status },
		{ label: 'Gender', value: dataCharacter?.gender }
	];

	const locationArr = [
		{ label: 'Dimension', value: dataLocation?.dimension },
		{ label: 'Location', value: `${dataLocation?.type} - ${dataLocation?.name}` },
		{ label: 'Residents', value: dataLocation?.residents?.length }
	];

	const episodesArr = [
		{
			label: 'First Episode',
			value: `${dataEpisode?.name} - ${dataEpisode?.episode}`
		},
		{ label: 'Date', value: dataEpisode?.air_date },
		{ label: 'Characters', value: dataEpisode?.characters?.length }
	];

	const handleGoBack = () => navigate(-1);

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
		handleGoBack
	};
};

export default useDetails;
