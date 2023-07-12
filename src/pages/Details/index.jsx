import useDetails from './useDetails';
import { useNavigate } from 'react-router-dom';
import { DetailList, Template, Spinner } from '../../components';
import { transformObjectToArray } from '../../utils';
import * as Styled from './styles';

const Details = () => {
	const navigate = useNavigate();
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
		episodesArr,
		handleGoBack,
		isFetching
	} = useDetails(navigate);

	if (isLoading || isFetching) return <Spinner />;
	if (isError) return <span>Error</span>;

	const { name, image } = dataCharacter;

	const characters = transformObjectToArray(dataCharacter, characterProps);

	const location = transformObjectToArray(dataLocation, locationProps);

	const episodes = transformObjectToArray(dataEpisode, episodesProps);

	return (
		<Template showGoBack handleGoBack={handleGoBack}>
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
