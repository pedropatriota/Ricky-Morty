import { renderData } from '../../utils';
import { Fragment, useId } from 'react';
import { Container } from './styles';
import type { IDetailListProps, UnknownObject } from './contracts';

const DetailList = ({ dataArr, params }: IDetailListProps<UnknownObject>) => {
	const id = useId();
	return (
		<div>
			{dataArr.map(() => {
				return (
					<Container key={id}>
						{params?.map(({ label, value }) => {
							return (
								<Fragment key={value}>
									{renderData(label, value)}
								</Fragment>
							);
						})}
					</Container>
				);
			})}
		</div>
	);
};

export default DetailList;
