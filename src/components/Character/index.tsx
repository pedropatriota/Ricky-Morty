import { Link } from 'react-router-dom';
import Card from '../Card';

// import { Container } from './styles';

interface CharacterProps {
	id: number;
	name: string;
	species: string;
	status: string;
	gender: string;
	image: string;
}

const Character = ({ id, name, species, status, gender, image }: CharacterProps) => {
	return (
		<Link
			to={`/${id}`}
			style={{ textDecoration: 'none', width: 'fit-content', display: 'block' }}
		>
			<Card
				name={name}
				image={image}
				species={species}
				status={status}
				gender={gender}
			/>
		</Link>
	);
};

export default Character;
