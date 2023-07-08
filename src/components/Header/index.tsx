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
		<Styled.Header>
			<Styled.Container>
				<img src={rickyMortyLogo} alt="Ricky and Morty logo" width="160px" />
				<div onClick={toggleTheme} role="button" tabIndex={0}>
					{theme.title === 'dark' ? <MoonStar /> : <Moon />}
				</div>
			</Styled.Container>
		</Styled.Header>
	);
};

export default Header;
