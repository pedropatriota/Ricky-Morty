import { renderData } from '../../utils';
import { Container } from './styles';
import type { IDetailListProps, UnknownObject } from './contracts';

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
