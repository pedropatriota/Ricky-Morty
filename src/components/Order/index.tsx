import type { IOrder } from './contracts';
import { OrderContainer } from './styles';
import { ArrowDownUp } from 'lucide-react';

const Order = ({ order, handleOrder }: IOrder) => {
	return (
		<OrderContainer onClick={handleOrder} role="button" tabIndex={0}>
			<ArrowDownUp />
			<span>{!order ? 'Add Order' : order}</span>
		</OrderContainer>
	);
};

export default Order;
