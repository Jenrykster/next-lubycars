import { useRouter } from 'next/router';
import {
  CarCardContainer,
  CarCardGradient,
  CardData,
  CarImage,
  HiddenMessage,
  ImageContainer,
  PriceContainer,
  PriceLabel,
  ThreeDots,
  TitleBold,
  TitleContainer,
  TitleText,
} from './styles';

const Price = (props: { value: number }) => {
  return (
    <PriceContainer>
      <TitleBold>$</TitleBold>
      <TitleBold size={1.5}>{props.value}</TitleBold>
      <PriceLabel size={1}>/day</PriceLabel>
    </PriceContainer>
  );
};

const Title = (props: { brand: string; model: string }) => {
  return (
    <TitleContainer>
      <TitleBold>{props.brand}</TitleBold>
      <TitleText>{props.model}</TitleText>
    </TitleContainer>
  );
};

export const CarCard = (props: {
  image: string;
  brand: string;
  model: string;
  price: number;
  id: number;
}) => {
  const router = useRouter();
  return (
    <CarCardGradient onClick={() => router.push('/car/' + props.id)}>
      <CarCardContainer>
        <CardData>
          <Title brand={props.brand} model={props.model} />
          <ThreeDots size={30} />
        </CardData>
        <ImageContainer>
          <CarImage src={props.image} />
        </ImageContainer>
        <CardData>
          <HiddenMessage size={1}>Book Now</HiddenMessage>
          <Price value={props.price} />
        </CardData>
      </CarCardContainer>
    </CarCardGradient>
  );
};
