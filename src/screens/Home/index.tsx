import { TouchableOpacity } from 'react-native';
import { Sections } from '../../components';
import {
  Container,
  Header,
  InfoButton,
  InfoContainer,
  InfoIcon,
  InfoText,
  Logo,
  Nickname,
  RankIcon,
  SectionsContainer
} from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <Nickname>@Usuário</Nickname>
        <TouchableOpacity activeOpacity={0.5}>
          <RankIcon />
        </TouchableOpacity>
      </Header>
      <InfoContainer>
        <InfoButton>
          <InfoIcon />
          <InfoText>Informações</InfoText>
        </InfoButton>
      </InfoContainer>
      <SectionsContainer>
        <Sections />
      </SectionsContainer>
    </Container>
  );
}
