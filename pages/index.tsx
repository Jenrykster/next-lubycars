import type { GetStaticProps, NextPage } from 'next';
import { Car } from '@types';
import { HomeView } from '@components';
import { loadCarData } from '@lib';
import { Fragment } from 'react';
import Head from 'next/head';

const Home: NextPage<{ cars: Car[] }> = (props: { cars: Car[] }) => {
  return (
    <Fragment>
      <Head>
        <title>Luby Cars</title>
        <meta name='description' content='Find your NEXT exotic car'></meta>
      </Head>
      <HomeView cars={props.cars} />;
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const carJsonData = loadCarData();
  return {
    props: { cars: carJsonData.cars },
  };
};
export default Home;
