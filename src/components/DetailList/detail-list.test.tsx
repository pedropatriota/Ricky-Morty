import { screen } from '@testing-library/react';
import DetailList from '.';
import { renderWithProviders } from '../../utils';
import { UnknownObject } from './contracts';
import { light } from '../../styles/themes';

describe('DetailListComponent', () => {
	const dataArr: Partial<UnknownObject>[] = [
		{
			id: 1,
			name: 'Rick Sanchez',
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			species: 'Human',
			status: 'Alive',
			gender: 'Male'
		}
	];
	const params = [
		{
			label: 'Species',
			value: 'Human'
		},
		{
			label: 'Status',
			value: 'Alive'
		},
		{
			label: 'Gender',
			value: 'Male'
		}
	];
	it('should render correctly', () => {
		renderWithProviders(<DetailList dataArr={dataArr} params={params} />, light);

		const characterProps = screen.getAllByText(/human|alive|male/i);

		expect(characterProps).toHaveLength(3);
	});

	it('should match the snapshot', () => {
		const { container } = renderWithProviders(
			<DetailList dataArr={dataArr} params={params} />,
			light
		);

		expect(container).toMatchSnapshot();
	});
});
