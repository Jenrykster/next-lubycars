import { CarView } from '@components';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Fragment } from 'react';
import { getSingleCarData, loadCarData } from '@lib';
import { Car } from '@types';
import Head from 'next/head';

const CarDetailPage: NextPage<{ selectedCar: Car }> = (props: {
  selectedCar: Car;
}) => {
  return (
    <Fragment>
      <Head>
        <title>{props.selectedCar.model}</title>
        <meta
          name='description'
          content={`Buy the ${props.selectedCar.brand} ${props.selectedCar.model} with the best prices`}
        ></meta>
      </Head>
      <CarView selectedCar={props.selectedCar} />
    </Fragment>
  );
};
export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  context
) => {
  const params = context.params!;

  try {
    const selectedCar = getSingleCarData(params.id);
    return {
      props: {
        selectedCar,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const carList = loadCarData().cars;
    const paths = carList.map((car: Car) => ({
      params: { id: car.id.toString() },
    }));
    return { paths: paths, fallback: false };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export default CarDetailPage;
