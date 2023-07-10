import * as Styled from './styles';
import rickyMortyLogo from './RickAndMortyLogo.png';
import { Moon, MoonStar } from 'lucide-react';
import { HeaderProps } from './contracts';

const Header = ({ theme, toggleTheme }: HeaderProps) => {
	return (
		<Styled.Header>
			<Styled.Container>
				<img src={rickyMortyLogo} alt="Ricky and Morty logo" width="160px" />
				<div onClick={toggleTheme} role="button" tabIndex={0}>
					{theme.title === 'dark' ? (
						<MoonStar data-testid="icon-dark" />
					) : (
						<Moon data-testid="icon-light" />
					)}
				</div>
			</Styled.Container>
		</Styled.Header>
	);
};

export default Header;
