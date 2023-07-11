import { Fragment } from 'react';
import { renderData } from '../../utils';
import { Container } from './styles';
import type { IParams } from './contracts';

const DetailList = ({ params }: IParams) => {
	return (
		<div>
			<Container>
				{params?.map(({ label, value }, idx) => {
					return (
						<Fragment key={`${label}_${value}_${idx}`}>
							{renderData(label, value)}
						</Fragment>
					);
				})}
			</Container>
		</div>
	);
};

export default DetailList;
