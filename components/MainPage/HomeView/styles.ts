import { MdKeyboardArrowUp } from 'react-icons/md';
import styled from 'styled-components';

export const MainPageContainer = styled.div`
  display: flex;
  padding: 2rem 5rem;
  padding-bottom: 4rem;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 1rem 3rem;
  }
`;

export const ScrollBackButton = styled(MdKeyboardArrowUp)<{
  visible: string;
}>`
  path {
    color: white;
  }
  position: fixed;
  right: 5%;
  bottom: 10%;
  background-color: #e6d3f1;
  border-radius: 50%;
  transition: 0.2s all ease-in-out;
  transform: ${(props) =>
    props.visible === 'true' ? 'scale(1)' : 'scale(0.0)'};
  opacity: ${(props) => (props.visible === 'true' ? '100%' : '0%')};
  &:hover {
    cursor: pointer;
    background-color: #e1d1e2;
  }
`;
