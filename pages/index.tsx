import type { GetStaticProps, NextPage } from 'next';
import { Car } from '@types';
import { ErrorView, HomeView } from '@components';
import { loadCarData } from '@lib';
import { Fragment } from 'react';
import Head from 'next/head';

const Home: NextPage<{ cars: Car[]; error: boolean }> = (props: {
  cars: Car[];
  error?: boolean;
}) => {
  let content;
  if (props.error && !props.cars) {
    content = <ErrorView />;
  } else {
    content = <HomeView cars={props.cars} />;
  }

  return (
    <Fragment>
      <Head>
        <title>Luby Cars</title>
        <meta name='description' content='Find your NEXT exotic car'></meta>
      </Head>
      {content}
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const carJsonData = loadCarData();
    if (carJsonData.cars) {
      return {
        props: { cars: carJsonData.cars },
      };
    } else {
      return {
        props: { error: true },
      };
    }
  } catch (error) {
    return {
      props: { error: true },
    };
  }
};
export default Home;
