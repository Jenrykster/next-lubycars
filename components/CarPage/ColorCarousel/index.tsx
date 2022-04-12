import { useEffect, useState } from 'react';
import { ArrowButton } from '@components';
import { Color } from '@types';
import {
  CarouselContainer,
  CarouselDisplay,
  CarouselImage,
  CarouselSpinner,
} from './styles';

const generateInitialPositions = (listLength: number) => {
  const startPosition = Math.floor(listLength / 2);
  const positions = [];
  let colorId = 1;
  for (let i = -startPosition; i <= startPosition; i++) {
    positions.push({ id: colorId, pos: i });
    colorId++;
  }
  return positions;
};

export const ColorCarousel = (props: {
  colorList: Color[];
  onSelectedColorChange: (selection: number) => void;
}) => {
  const [positions, setPositions] = useState(
    generateInitialPositions(props.colorList.length)
  );

  const rotate = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setPositions((prev) => {
        return prev.map((pos) => {
          const newPos = pos.pos > -1 ? pos.pos - 1 : 1;

          return { id: pos.id, pos: newPos };
        });
      });
    } else {
      setPositions((prev) => {
        return prev.map((pos) => {
          const newPos = pos.pos < 1 ? pos.pos + 1 : -1;
          return { id: pos.id, pos: newPos };
        });
      });
    }
  };
  useEffect(() => {
    props.onSelectedColorChange(positions.find((pos) => pos.pos === 0)!.id);
  }, [positions, props]);
  const getPosition = (id: number) => {
    return positions.find((posData) => posData.id === id)!.pos;
  };
  const generateCarousel = () => {
    return props.colorList.map((color) => {
      return (
        <CarouselImage
          key={color.id}
          src={'/cars/' + color.pics[0]}
          position={getPosition(color.id)}
          isSelected={getPosition(color.id) === 0}
        />
      );
    });
  };
  return (
    <CarouselContainer>
      <ArrowButton
        color='white'
        backgroundColor='#313136'
        arrowDirection='left'
        onClick={() => rotate('left')}
      />
      <CarouselSpinner>
        <CarouselDisplay>{generateCarousel()}</CarouselDisplay>
      </CarouselSpinner>
      <ArrowButton
        color='white'
        backgroundColor='#313136'
        arrowDirection='right'
        onClick={() => rotate('right')}
      />
    </CarouselContainer>
  );
};
