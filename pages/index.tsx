import { CarGrid } from '@components';
import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Car } from 'shared/types';
import { MainPageContainer, ScrollBackButton } from './styles';

const Home: NextPage<{ cars: Car[] }> = (props: { cars: Car[] }) => {
  const [showScrollBackButton, setShowScrollBackButton] = useState(false);

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
    <MainPageContainer>
      <CarGrid cars={props.cars} />
      <ScrollBackButton size={70} showScrollButton={showScrollBackButton} />
    </MainPageContainer>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const requestResponse = await fetch('http://localhost:3000/api/cars');

  let carData;
  if (requestResponse.ok) {
    carData = await requestResponse.json();
    return {
      props: { cars: carData.data.cars },
    };
  } else {
    return { props: { cars: [] } };
  }
};
export default Home;
