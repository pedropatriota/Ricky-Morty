import * as Styled from './styles';
import rickyMortyLogo from './RickAndMortyLogo.png';
import { Moon, MoonStar } from 'lucide-react';

export interface HeaderProps {
	theme: {
		title: string;
		colors: {
			bg: string;
			el: string;
			text: string;
			input: string;
			border: string;
		};
	};
	toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
	return (
		<Styled.Header onClick={toggleTheme}>
			<Styled.Container>
				<img src={rickyMortyLogo} alt="Ricky and Morty logo" width="160px" />
				{theme.title === 'dark' ? <MoonStar /> : <Moon />}
			</Styled.Container>
		</Styled.Header>
	);
};

export default Header;
