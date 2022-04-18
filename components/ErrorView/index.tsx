import { useEffect, useState } from 'react';
import Lottie, { Options } from 'react-lottie';

import * as carAnimation from '@animations/car-animation.json';
import { ErrorSubtitle, ErrorTitle, ErrorViewContainer } from './styles';
export const ErrorView = (props: { title: string; subtitle: string }) => {
  const isClient = typeof window !== 'undefined';
  const [screenSize, getDimension] = useState({
    dynamicWidth: isClient ? window.innerWidth : 800,
    dynamicHeight: isClient ? window.innerHeight : 800,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);

  const defaultOptions: Options = {
    animationData: carAnimation,
    autoplay: true,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const animationWidth = screenSize.dynamicWidth > 600 ? 400 : 300;
  return (
    <ErrorViewContainer>
      <ErrorTitle>{props.title}</ErrorTitle>
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={200}
        width={animationWidth}
      />
      <ErrorSubtitle>{props.subtitle}</ErrorSubtitle>
    </ErrorViewContainer>
  );
};
