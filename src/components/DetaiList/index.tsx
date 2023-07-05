import { renderData } from '../../utils';
import { Container } from './styles';

type UnknownObject = Record<string, string>;

interface IDetailListProps<T extends UnknownObject> {
	dataArr: Array<Partial<T>>;
	params: { label: string; value: string }[];
}

const DetailList = ({ dataArr, params }: IDetailListProps<UnknownObject>) => {
	return (
		<>
			{dataArr.map(({ ...props }) => (
				<Container key={props.id}>
					{params?.map(({ label, value }) => renderData(label, value))}
				</Container>
			))}
		</>
	);
};

export default DetailList;
