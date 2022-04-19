import styled from 'styled-components';

export const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
  @media (min-width: 1350px) {
    font-size: 3.5rem;
  }
`;
export const ErrorSubtitle = styled.p`
  font-size: 2rem;

  @media (min-width: 1350px) {
    font-size: 3.5rem;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;
export const ErrorViewContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1350px) {
    height: 70vh;
    justify-content: center;
  }
`;
