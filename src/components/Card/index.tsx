import { renderData } from '../../utils';
import type { ICardProps } from './contracts';
import * as Styled from './styles';

const Card = ({ name, image, species, gender, status }: ICardProps) => {
	return (
		<Styled.Container data-testid="card">
			<Styled.ImagContainer image={image} data-testid="card-image" />
			<Styled.InfoContainer>
				<h2>{name}</h2>
				{renderData('Status', status)}
				{renderData('Species', species)}
				{renderData('Gender', gender)}
			</Styled.InfoContainer>
		</Styled.Container>
	);
};

export default Card;
