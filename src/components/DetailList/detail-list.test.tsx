import { screen } from '@testing-library/react';
import DetailList from '.';
import { renderWithProviders } from '../../utils';
import { light } from '../../styles/themes';

describe('DetailListComponent', () => {
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
		renderWithProviders(<DetailList params={params} />, light);

		const characterProps = screen.getAllByText(/human|alive|male/i);

		expect(characterProps).toHaveLength(3);
	});

	it('should match the snapshot', () => {
		const { container } = renderWithProviders(<DetailList params={params} />, light);

		expect(container).toMatchSnapshot();
	});
});
