import useDetails from './useDetails';
import { DetailList } from '../../components';
import { renderData, transformObjectToArray } from '../../utils';

const Details = () => {
	const {
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
		episodesArr
	} = useDetails();

	if (isLoading) return <span>Loading...</span>;
	if (isError) return <span>Error</span>;

	const { name, image } = dataCharacter;

	const characters = transformObjectToArray(dataCharacter, characterProps);

	const location = transformObjectToArray(dataLocation, locationProps);

	const episodes = transformObjectToArray(dataEpisode, episodesProps);

	return (
		<>
			<h1 style={{ marginBottom: '1.5rem' }}>{name}</h1>
			<div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
				<div>
					<img src={image} alt={name} />
				</div>

				<div>
					<DetailList dataArr={characters} params={characterArr} />
					<DetailList dataArr={location} params={locationArr} />
					<DetailList dataArr={episodes} params={episodesArr} />
				</div>
			</div>
		</>
	);
};

export default Details;
