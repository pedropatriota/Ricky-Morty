export interface IOrder {
	order?: 'Ascending' | 'Descending';
	handleOrder: () => void;
}
