import { useCallback } from 'react';
import * as Styled from './styles';

interface CardProps {
	name: string;
	species: string;
	status: string;
	gender: string;
	image: string;
}

const Card = ({ name, image, species, gender, status }: CardProps) => {
	const renderCharacterProps = useCallback((label: string, value: string) => {
		return (
			<p>
				<strong>{label}: </strong> {value}
			</p>
		);
	}, []);

	return (
		<Styled.Container>
			<Styled.ImagContainer image={image} />
			<Styled.InfoContainer>
				<h2>{name}</h2>
				{renderCharacterProps('Status', status)}
				{renderCharacterProps('Species', species)}
				{renderCharacterProps('Gender', gender)}
			</Styled.InfoContainer>
		</Styled.Container>
	);
};

export default Card;
