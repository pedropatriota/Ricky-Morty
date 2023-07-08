import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBigLeft } from 'lucide-react';
import { Container } from './styles';

interface ITemplateProps {
	children: ReactNode;
	showGoBack: boolean;
}

const Template = ({ children, showGoBack }: ITemplateProps) => {
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	return (
		<Container>
			{showGoBack && (
				<div>
					<ArrowBigLeft onClick={goBack} width="30px" />
				</div>
			)}
			{children}
		</Container>
	);
};

export default Template;
