import { ReactNode } from 'react';
import { ArrowBigLeft } from 'lucide-react';
import { Container } from './styles';

interface ITemplateProps {
	children: ReactNode;
	showGoBack?: boolean;
	handleGoBack?: () => void;
}

const Template = ({ children, showGoBack, handleGoBack }: ITemplateProps) => {
	return (
		<Container data-testid="template-container">
			{showGoBack && (
				<div>
					<ArrowBigLeft
						onClick={handleGoBack}
						width="30px"
						role="button"
						aria-label="goback-icon"
					/>
				</div>
			)}
			{children}
		</Container>
	);
};

export default Template;
