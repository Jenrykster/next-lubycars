import type { GetStaticProps, NextPage } from 'next';
import { Car } from '@types';
import { HomeView } from '@components';
import { loadCarData } from '@lib';

const Home: NextPage<{ cars: Car[] }> = (props: { cars: Car[] }) => {
  return <HomeView cars={props.cars} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const carJsonData = loadCarData();
  return {
    props: { cars: carJsonData.cars },
  };
};
export default Home;
