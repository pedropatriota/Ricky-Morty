import { screen, render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import Order from '.';

afterEach(() => cleanup);

describe('Order', () => {
	const handleOrder = jest.fn();

	it('should render the initial order correctly', () => {
		render(<Order order={undefined} handleOrder={handleOrder} />);

		const button = screen.getByRole('button', {
			name: /add order/i
		});
		const text = screen.getByText(/add order/i);

		expect(button).toBeInTheDocument();
		expect(text).toBeInTheDocument();
	});

	it('should change the order when clicked', async () => {
		const { rerender } = render(
			<Order order={undefined} handleOrder={handleOrder} />
		);

		const button = screen.getByRole('button', {
			name: /add order/i
		});

		fireEvent.click(button);

		expect(handleOrder).toHaveBeenCalledTimes(1);

		rerender(<Order order="Ascending" handleOrder={handleOrder} />);

		expect(screen.getByText('Ascending')).toBeInTheDocument();

		fireEvent.click(button);

		rerender(<Order order="Descending" handleOrder={handleOrder} />);

		expect(screen.getByText('Descending')).toBeInTheDocument();
	});

	it('should match the snapshot', () => {
		const { container } = render(
			<Order order={undefined} handleOrder={handleOrder} />
		);
		expect(container).toMatchSnapshot();
	});
});
