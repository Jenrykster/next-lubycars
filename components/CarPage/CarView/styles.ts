import Image from 'next/image';
import styled from 'styled-components';

export const CarDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 3.6rem;
  @media (max-width: 800px) {
    height: 80vh;
    justify-content: space-between;
  }
  @media (max-width: 1000px) {
    padding: 0rem 3rem;
  }
  @media (max-width: 500px) {
    padding: 0rem 2rem;
  }
`;

export const CarInformationHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  justify-content: space-between;
  @media (min-width: 1350px) {
    padding: 2rem 4rem;
  }
`;

export const CarInfoContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const CarLogo = styled.img`
  width: 25%;
  margin: 1rem;

  @media (min-width: 1350px) and (max-width: 3000px) {
    width: 150px;
  }
`;

export const BoldText = styled.p<{ size: number }>`
  color: #313136;
  font-weight: 700;
  font-size: ${(props) => props.size + 'rem'};
  margin: 0;

  @media (min-width: 1350px) and (max-width: 3000px) {
    font-size: ${(props) => props.size / 0.4 + 'rem'};
  }
  @media (max-width: 1100px) {
    font-size: ${(props) => props.size / 1.4 + 'rem'};
  }
`;

export const LightText = styled.p<{ size?: string }>`
  color: #313136;
  font-weight: 300;
  font-size: ${(props) => (props.size ? props.size : '2rem')};
  margin: 0;
  @media (min-width: 1350px) and (max-width: 3000px) {
    font-size: ${(props) =>
      props.size ? parseInt(props.size) / 0.4 + 'rem' : '3rem'};
  }
`;

export const ColorInfoContainer = styled.div<{ transitioning?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  margin-right: 7.5rem;
  transition: 0.2s ease-in-out;
  transform: ${(props) => (props.transitioning ? 'scaleX(0)' : 'scaleX(1)')};
  width: 10px;
  @media (max-width: 800px) {
    margin-right: 2rem;
  }
  @media (max-width: 500px) {
    margin-right: 20px;
  }
`;

export const CarInformationBody = styled.div`
  display: flex;
  margin-top: -6.2rem;
  padding-right: 12.5rem;
  width: 90%;
  align-items: center;

  @media (max-width: 1100px) {
    margin-top: -5rem;
  }
  @media (max-width: 800px) {
    margin-top: -2rem;
  }
  @media (max-width: 700px) {
    margin-top: -2rem;
    padding-right: 8rem;
    width: 80%;
  }
`;

export const CarPictureContainer = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  height: 260px;
  min-width: 200px;
  min-height: 150px;
  @media (min-width: 2001px) and (max-width: 3000px) {
    width: 55%;
    margin-left: -50px;
    margin-top: -100px;
    margin-bottom: 17%;
  }
  @media (min-width: 1350px) and (max-width: 2000px) {
    width: 65%;
    margin-top: 5%;
    margin-bottom: 15%;
  }
  @media (max-width: 1100px) {
    height: 240px;
    width: 65%;
  }
  @media (max-width: 1000px) {
    margin-top: 40px;
    height: 190px;
  }
  @media (max-width: 800px) {
    height: 50px;
    margin-top: 0;
    width: 100%;
    margin-right: -80px;
  }
  @media (max-width: 600px) {
    width: 120%;
    height: 150px;
    min-width: 250px;
    min-height: 125px;
    margin-right: -90px;
  }
`;
export const CarPicture = styled(Image)<{ transitioning?: string }>`
  transition: 0.5s ease;
  opacity: ${(props) => (props.transitioning === 'true' ? '0%' : '100%')};
`;

const ContainerBase = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0.5rem;
  width: 150px;
  justify-content: space-around;
  border-radius: 25px;
  transition: 0.1s ease-in-out;

  svg {
    transform: scaleX(1.5) scaleY(1.3);
  }
  &:hover {
    cursor: pointer;
    p,
    svg {
      color: white;
    }
  }
`;

export const ButtonText = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  margin: 0;
  transition: 0.1s ease-in-out;
  font-size: 0.9rem;
`;

export const BookButtonContainer = styled(ContainerBase)`
  background-color: #313136;
  margin-right: 5rem;
  width: 13%;
  white-space: nowrap;
  ${ButtonText} {
    font-weight: 50;
  }
  &:hover {
    filter: brightness(0.8);
  }
  @media (max-width: 800px) {
    margin-right: 1.5rem;
  }
  @media (max-width: 1100px) {
    width: 15%;
  }
  @media (max-width: 400px) {
    width: 50%;
  }
  @media (max-width: 600px) and (min-width: 401px) {
    width: 35%;
  }
  @media (max-width: 700px) and (min-width: 601px) {
    width: 30%;
  }
  @media (max-width: 800px) and (min-width: 701px) {
    width: 20%;
  }
  @media (max-width: 1100px) and (min-width: 801px) {
    margin-right: 2.5rem;
    width: 18%;
  }
  @media (min-width: 1350px) {
    margin-bottom: 100px;
    width: 10%;
    padding: 1.25rem;
    margin-left: 5.5rem;
    border-radius: 50px;
    ${ButtonText} {
      font-size: 1.6rem;
    }
  }
  @media (min-width: 1350px) and (max-width: 2000px) {
    width: 15%;
  }
  @media (min-width: 2001px) and (max-width: 3000px) {
    width: 10%;
  }
`;

export const GoBackButtonContainer = styled(ContainerBase)<{}>`
  border: 1px solid #5d5d61;
  border-radius: 35px;
  margin-right: auto;
  width: 20%;
  white-space: nowrap;

  &:hover {
    background-color: #313136;
    border: 1px solid #313136;
    path {
      color: white;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 700px) and (min-width: 601px) {
    width: 50%;
    margin-left: -75px;
  }
  @media (max-width: 800px) and (min-width: 701px) {
    width: 35%;
    margin-left: -15px;
  }
  @media (max-width: 1000px) and (min-width: 801px) {
    width: 30%;
  }
  @media (max-width: 1349px) and (min-width: 1001px) {
    width: 22%;
  }
  @media (min-width: 1350px) {
    svg {
      width: 30px;
      height: 30px;
    }
    padding: 1.25rem 0.5rem;
    ${ButtonText} {
      font-size: 1.6rem;
    }
  }
  @media (min-width: 1501px) and (max-width: 3000px) {
    width: 16%;
  }
  @media (min-width: 1350px) and (max-width: 1500px) {
    width: 28%;
  }
`;
