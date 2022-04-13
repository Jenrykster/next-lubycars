import { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import { Car } from '@types';
import { CarGrid, TransitionWrapper } from '@components';

import { MainPageContainer, ScrollBackButton } from './styles';

export const HomeView = (props: { cars: Car[] }) => {
  const [showScrollBackButton, setShowScrollBackButton] = useState(false);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    const changeScrollPercentage = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = winScroll / height;

      if (scrolled > 0.1) {
        setShowScrollBackButton(true);
      } else {
        setShowScrollBackButton(false);
      }
    };
    window.addEventListener('scroll', changeScrollPercentage);

    return () => {
      window.removeEventListener('scroll', changeScrollPercentage);
    };
  });

  return (
    <TransitionWrapper>
      <MainPageContainer>
        <CarGrid cars={props.cars} />
        <ScrollBackButton
          size={70}
          visible={showScrollBackButton.toString()}
          onClick={scrollToTop}
        />
      </MainPageContainer>
    </TransitionWrapper>
  );
};
