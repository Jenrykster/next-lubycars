import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  height: 200px;
  user-select: none;
  @media (min-width: 1350px) and (max-width: 3000px) {
    width: 85%;
  }
  @media (max-width: 850px) {
    width: 75%;
  }
  @media (max-width: 850px) {
    width: 100%;
    min-width: 250px;
  }
  @media (max-width: 700px) {
    width: 85%;
    min-width: 100px;
  }
`;

export const CarouselSpinner = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 850px) {
    width: 60%;
  }
`;
export const CarouselDisplay = styled.div`
  display: grid;
  width: 300px;
  align-items: center;
`;

export const CarouselImage = styled.img<{
  position: number;
  isSelected?: boolean;
}>`
  grid-row: 1;
  grid-column: 1;
  transition: 0.2s ease;
  width: 85%;
  transform: ${(props) =>
    `translateX(${props.position * 110}%) ${
      props.isSelected ? 'scale(1.25)' : 'scale(0.85)'
    }`};

  @media (max-width: 850px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1350px) and (max-width: 3000px) {
    width: 125%;
  }
`;
