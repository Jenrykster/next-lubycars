import { IoSearchSharp } from 'react-icons/io5';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 10px 30px #0000001a;
  padding: 0.8rem 1.4rem;
  white-space: nowrap;
  @media (max-width: 700px) {
    justify-content: space-between;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1101px) and (max-width: 3000px) {
    font-size: 2rem;
  }
`;

export const HeaderTitleBold = styled.b`
  font-weight: 600;
  font-size: 1.5rem;
  @media (min-width: 1101px) and (max-width: 3000px) {
    font-size: 3rem;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f1fc;
  width: 45%;
  border-radius: 18px;
  padding: 5px 10px 5px 2rem;

  @media (min-width: 1901px) and (max-width: 3000px) {
    width: 35%;
  }
  @media (min-width: 1101px) and (max-width: 1900px) {
    width: 40%;
  }
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 30%;
  }
  @media (max-width: 700px) {
    justify-content: space-between;
    padding: 0.3rem 1rem;
  }
`;

export const SearchFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg:hover {
    cursor: pointer;
    path {
      transition: 0.1s ease;
      transform: scale(1.05);
      color: #7b89f4;
    }
  }
  @media (min-width: 1101px) and (max-width: 3000px) {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const SearchFieldLabel = styled.p`
  color: #656469;
  padding-bottom: 1px; // Compensate for the svg alignment issues
  margin: 2px;

  @media (min-width: 1901px) and (max-width: 3000px) {
    font-size: 1.35rem;
  }
  @media (min-width: 1101px) and (max-width: 1900px) {
    font-size: 1rem;
  }
  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const SearchButton = styled(IoSearchSharp)`
  background-color: white;
  color: #7b89f4;
  box-shadow: 0px 3px 15px #00000014;
  border-radius: 50%;
  padding: 0.2rem;

  &:hover {
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    transform: rotate(360deg) scale(1.1);
  }
  @media (min-width: 1101px) and (max-width: 3000px) {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    white-space: nowrap;
    justify-content: center;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    margin: 5px;
  }
  @media (min-width: 1101px) and (max-width: 2000px) {
    width: 15%;
    justify-content: space-between;
  }
  @media (min-width: 2001px) and (max-width: 3000px) {
    width: 10%;
    justify-content: space-between;
  }
`;

export const Button = styled.button<{ border?: boolean }>`
  color: #7b89f4;
  padding: 0.5rem 0.8rem;
  border-radius: 15px;
  border: ${(props) => (props.border ? '2px solid #7B89F4' : 'none')};
  font-weight: 600;
  font-size: 0.9rem;
  background-color: transparent;
  transition: 0.1s all ease-in;
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.border ? 'white' : '#7B89F4')};
    background-color: ${(props) => (props.border ? '#7B89F4' : 'transparent')};
  }
  @media (min-width: 1101px) and (max-width: 3000px) {
    font-size: 1.5rem;
    padding: 0.75rem 1.2rem;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 44%;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 60%;
  }
`;
