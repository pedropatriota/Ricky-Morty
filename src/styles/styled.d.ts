import 'styled-components';

declare module 'styled-component' {
	export interface DefaultTheme {
		title: string;
		colors: {
			bg: string;
			el: string;
			text: string;
			input: string;
			border: string;
		};
	}
}
