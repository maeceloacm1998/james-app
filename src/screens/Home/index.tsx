import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Sections } from '../../components';
import { ChallengeStatus } from '../../components/Challenge/types';
import { useChallenges } from '../../contexts/ChallengesContext';
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
  const { scores, challengesStatuses } = useChallenges();

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
        <Sections
          onChallengePress={(id) => console.log(id)}
          scores={scores}
          challengesStatuses={challengesStatuses}
        />
      </SectionsContainer>
    </Container>
  );
}
