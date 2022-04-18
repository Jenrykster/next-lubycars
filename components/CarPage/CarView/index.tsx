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
  CarPictureContainer,
} from './styles';

import { TransitionWrapper, ColorCarousel } from '@components';
import { useRouter } from 'next/router';

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

export const CarView = (props: { selectedCar: Car }) => {
  const firstRun = useRef(true);
  const router = useRouter();
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    props.selectedCar?.colors[1]
  );
  const [actualCarImage, setActualCarImage] = useState(
    `/cars/${selectedColor!.pics[1]}`
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
    setIsLoadingImage(true);
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
          <CarPictureContainer>
            <CarPicture
              onLoad={() => setIsLoadingImage(true)}
              onLoadingComplete={() => setIsLoadingImage(false)}
              src={actualCarImage}
              transitioning={isTransitioning || isLoadingImage}
              layout='responsive'
              objectFit='contain'
              width={783}
              height={408}
              placeholder='blur'
              blurDataURL={actualCarImage}
            />
          </CarPictureContainer>
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
