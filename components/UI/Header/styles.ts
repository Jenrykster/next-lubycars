import { IoSearchSharp } from 'react-icons/io5';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 10px 30px #0000001a;
  padding: 0.8rem 1.4rem;
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
`;

export const HeaderTitleBold = styled.b`
  font-weight: 600;
  font-size: 1.5rem;
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
`;

export const SearchFieldLabel = styled.p`
  color: #656469;
  padding-bottom: 1px; // Compensate for the svg alignment issues
  margin: 2px;

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

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 700px) {
    white-space: nowrap;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    margin: 5px;
  }
`;

export const Button = styled.button<{ border?: boolean }>`
  color: #7b89f4;
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
  border: ${(props) => (props.border ? '2px solid #7B89F4' : 'none')};
  font-weight: 600;
  font-size: 0.9rem;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.border ? 'white' : '#7B89F4')};
    background-color: ${(props) => (props.border ? '#7B89F4' : 'transparent')};
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
