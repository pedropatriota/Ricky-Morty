import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Template from '.';

describe('Template', () => {
	const handleGoBack = jest.fn();

	it('should render correctly', () => {
		const { rerender } = render(
			<Template showGoBack handleGoBack={handleGoBack}>
				<div>test</div>
			</Template>
		);

		const icon = screen.getByRole('button', { name: 'goback-icon' });
		expect(icon).toBeTruthy();

		const container = screen.getByTestId('template-container');
		expect(container).toHaveStyle('padding: 0.5rem min(5vw, 5rem)');

		rerender(
			<Template showGoBack={false}>
				<div>test</div>
			</Template>
		);

		expect(icon).not.toBeInTheDocument();
	});

	it('should back to Home page when the icon is clicked', async () => {
		render(
			<Template showGoBack handleGoBack={handleGoBack}>
				<div>test</div>
			</Template>
		);

		const icon = screen.getByRole('button', { name: 'goback-icon' });

		fireEvent.click(icon);

		await waitFor(() => {
			expect(global.window.location?.href).toContain(`/`);
		});
	});
	it('should match the snapshot', () => {
		const { container } = render(
			<Template showGoBack handleGoBack={handleGoBack}>
				<div>test</div>
			</Template>
		);
		expect(container).toMatchSnapshot();
	});
});
