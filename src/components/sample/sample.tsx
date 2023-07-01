import { StyledCode, StyledContainer, StyledLogo, StyledTitle } from './sample.style';
import logo from './logo.png';

const Sample = () => (
	<StyledContainer>
		<StyledLogo src={logo} alt="Appspace logo" />
		<StyledTitle>Welcome to Appspace React FE Challenge</StyledTitle>
		<section>
			<h3>Visual Studio Code setup</h3>
			<p>We recommend these extensions in VS Code before starting the challenge:</p>
			<p>
				<a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">ESLint</a>
			</p>
			<p>
				<a href="https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components">
					vscode-styled-components
				</a>
			</p>
		</section>
		<section>
			<h3>How to start the project</h3>
			<p>
				Install dependencies: <StyledCode>yarn install --pure-lockfile</StyledCode>
			</p>
			<p>
				Start the project: <StyledCode>yarn start</StyledCode>
			</p>
			<p>
				Run the tests: <StyledCode>yarn test</StyledCode>
			</p>
		</section>
	</StyledContainer>
);

export default Sample;
