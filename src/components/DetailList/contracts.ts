export type UnknownObject = Record<string, string>;

export interface IDetailListProps<T extends UnknownObject> {
	dataArr: Array<Partial<T>>;
	params: { label: string; value: string }[];
}