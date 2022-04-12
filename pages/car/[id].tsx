import { useEffect, useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Car } from '@types';
import {
  CarDetailContainer,
  CarInformationHeader,
  CarLogo,
  BoldText,
  ColorInfoContainer,
  LightText,
  CarInfoContainer,
  CarInformationBody,
  CarPicture,
  ButtonText,
  GoBackButtonContainer,
  BookButtonContainer,
} from './styles';

import { TransitionWrapper, ColorCarousel } from '@components';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const Title = (props: { name: string; price: number }) => {
  return (
    <div>
      <BoldText size={1.6}>{props.name}</BoldText>
      <LightText>${props.price}/day</LightText>
    </div>
  );
};

const ColorInfo = (props: {
  color: string;
  number: number;
  transitioning: boolean;
}) => {
  return (
    <ColorInfoContainer transitioning={props.transitioning}>
      <BoldText size={2}>{props.number.toString().padStart(2, '0')}</BoldText>
      <LightText size='1.5rem'>{props.color}</LightText>
    </ColorInfoContainer>
  );
};

const CarDetail: NextPage<{ selectedCar: Car }> = (props: {
  selectedCar: Car;
}) => {
  const firstRun = useRef(true);
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(
    props.selectedCar?.colors[1]
  );
  const [actualCarImage, setActualCarImage] = useState(
    '/cars/' + selectedColor!.pics[1]
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeCarInfo = (sel: number) => {
    setSelectedColor(
      props.selectedCar!.colors.find((color) => color.id === sel) ||
        props.selectedCar?.colors[1]
    );
  };

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const changeImage = () => {
      setIsTransitioning(false);
      setActualCarImage('/cars/' + selectedColor!.pics[1]);
    };
    setIsTransitioning(true);

    setTimeout(changeImage, 300);
  }, [selectedColor]);

  return (
    <TransitionWrapper>
      <CarDetailContainer>
        <CarInformationHeader>
          <CarInfoContainer>
            <CarLogo src={'/cars/' + props.selectedCar!.logo} />
            <Title
              name={props.selectedCar!.brand + ' ' + props.selectedCar!.model}
              price={props.selectedCar!.price}
            />
          </CarInfoContainer>
          <ColorInfo
            color={selectedColor!.color}
            number={0 + selectedColor!.id}
            transitioning={isTransitioning}
          />
        </CarInformationHeader>
        <CarInformationBody>
          <GoBackButtonContainer onClick={() => router.push('/')}>
            <BsArrowLeft />
            <ButtonText color='#313136'>Back to catalog</ButtonText>
          </GoBackButtonContainer>
          <CarPicture src={actualCarImage} transitioning={isTransitioning} />
        </CarInformationBody>
        <BookButtonContainer
          onClick={() => alert('Booked car ' + props.selectedCar?.model)}
        >
          <ButtonText color='white'>Book now</ButtonText>
          <BsArrowRight color='white' />
        </BookButtonContainer>
        <ColorCarousel
          colorList={props.selectedCar!.colors}
          onSelectedColorChange={changeCarInfo}
        />
      </CarDetailContainer>
    </TransitionWrapper>
  );
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  context
) => {
  console.log(context.params);
  const params = context.params!;

  try {
    const response = await fetch('http://localhost:3000/api/cars/' + params.id);
    if (response.ok) {
      const responseData = await response.json();
      return {
        props: {
          selectedCar: responseData.selectedCar!,
        },
      };
    } else {
      return { notFound: true };
    }
  } catch (error) {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/cars');
    if (response.ok) {
      const responseData = await response.json();

      const paths = responseData.data.cars.map((car: Car) => ({
        params: { id: car.id.toString() },
      }));
      return { paths: paths, fallback: false };
    } else {
      return { paths: [], fallback: false };
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export default CarDetail;
