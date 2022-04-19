import styled from 'styled-components';

export const ArrowButtonContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 1rem;
  border-radius: 25px;
  transition: 0.1s ease-in-out;
  &:hover {
    filter: brightness(70%);
    -webkit-filter: brightness(70%);
    cursor: pointer;
  }
  @media (min-width: 1350px) and (max-width: 3000px) {
    padding: 1rem;
    border-radius: 50%;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const ButtonLabel = styled.p<{ color: string }>`
  color: ${(props) => props.color};
`;
