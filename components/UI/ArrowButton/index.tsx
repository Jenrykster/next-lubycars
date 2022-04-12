import { ArrowButtonContainer, ButtonLabel } from './styles';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
export const ArrowButton = (props: {
  label?: string;
  color: string;
  backgroundColor: string;
  arrowDirection: 'left' | 'right';
  onClick: () => void;
}) => {
  return (
    <ArrowButtonContainer
      backgroundColor={props.backgroundColor}
      onClick={props.onClick}
    >
      {props.arrowDirection === 'left' && <BsArrowLeft color={props.color} />}
      {props.label && (
        <ButtonLabel color={props.color}>{props.label}</ButtonLabel>
      )}
      {props.arrowDirection === 'right' && <BsArrowRight color={props.color} />}
    </ArrowButtonContainer>
  );
};
