export type TTheme = {
	title: string;
	colors: {
		bg: string;
		el: string;
		text: string;
		input: string;
		border: string;
	};
};

export interface HeaderProps {
	theme: TTheme;
	toggleTheme: () => void;
}
