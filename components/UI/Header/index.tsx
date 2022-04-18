import {
  Button,
  ButtonContainer,
  DateContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderTitleBold,
  SearchBarContainer,
  SearchButton,
  SearchFieldContainer,
  SearchFieldLabel,
} from './styles';

import * as Icons from 'react-icons/io5';
import { useRouter } from 'next/router';

const Title = () => {
  const router = useRouter();
  return (
    <HeaderTitle onClick={() => router.push('/')}>
      <HeaderTitleBold>EXOTIC </HeaderTitleBold>
      CARS
    </HeaderTitle>
  );
};

const SearchField = (props: { label: string; icon: keyof typeof Icons }) => {
  const IconComponent = Icons[props.icon];
  return (
    <SearchFieldContainer>
      <IconComponent color='#C4C4C4' size={20} />

      <SearchFieldLabel>{props.label}</SearchFieldLabel>
    </SearchFieldContainer>
  );
};

export const Header = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <Title />
      <SearchBarContainer>
        <SearchField icon='IoLocationSharp' label='North Carolina, NC 90025' />
        <DateContainer>
          <SearchField icon='IoCalendarSharp' label='11/03/2021' />
          <SearchField icon='IoCalendarSharp' label='12/12/2021' />
        </DateContainer>
        <SearchButton size={25} />
      </SearchBarContainer>
      <ButtonContainer>
        <Button onClick={() => router.push('/signup')}>Sign up</Button>
        <Button onClick={() => router.push('/login')} border>
          Sign in
        </Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};
