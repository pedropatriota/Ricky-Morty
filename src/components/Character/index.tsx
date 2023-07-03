import { Link } from 'react-router-dom';

// import { Container } from './styles';

interface CharacterProps {
	id: number;
	name: string;
	species: string;
	status: string;
	gender: string;
	image: string;
	resource: string;
}

const Character = ({
	id,
	name,
	species,
	status,
	gender,
	image,
	resource
}: CharacterProps) => {
	return (
		<Link to={`/${id}`}>
			<div>
				<img src={image} alt={name} />
				<div>
					<h2>{name}</h2>
					<span>
						<strong>status:</strong> {status} | <strong>specie:</strong>{' '}
						{species} | <strong>gender:</strong> {gender}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default Character;
