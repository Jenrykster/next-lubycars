import { CarGrid } from '@components';
import type { GetStaticProps, NextPage } from 'next';
import { Car } from 'shared/types';
import { MainPageContainer } from './styles';

const Home: NextPage<{ cars: Car[] }> = (props: { cars: Car[] }) => {
  return (
    <MainPageContainer>
      <CarGrid cars={props.cars} />
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
