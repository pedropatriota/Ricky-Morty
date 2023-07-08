import { Link } from 'react-router-dom';
import Card from '../Card';
import type { ICharacterProps } from './contracts';

const Character = ({ id, name, species, status, gender, image }: ICharacterProps) => {
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
