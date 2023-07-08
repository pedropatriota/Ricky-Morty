import useDetails from './useDetails';
import { DetailList, Template } from '../../components';
import { transformObjectToArray } from '../../utils';
import * as Styled from './styles';

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
		<Template showGoBack>
			<Styled.Title style={{ marginBottom: '1.5rem' }}>{name}</Styled.Title>
			<Styled.InfoContainer
				style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
			>
				<Styled.GoBackIcon src={image} alt={name} />

				<div>
					<DetailList dataArr={characters} params={characterArr} />
					<hr />
					<DetailList dataArr={location} params={locationArr} />
					<hr />
					<DetailList dataArr={episodes} params={episodesArr} />
				</div>
			</Styled.InfoContainer>
		</Template>
	);
};

export default Details;
