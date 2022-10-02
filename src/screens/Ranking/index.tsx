import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRanking } from '../../context/Ranking';

import {
  BackButtonContainer,
  Container,
  TextBackButton,
  Title,
  TitleContainer
} from './styled';
import { RankingComponent } from './components/RankingComponent';

export function Ranking() {
  const { rankingList } = useRanking();

  return (
    <Container>
      <BackButtonContainer>
        <Icon name="arrow-back-ios" size={20} color="#FFFFFF" />
        <TextBackButton>Voltar</TextBackButton>
      </BackButtonContainer>

      <TitleContainer>
        <Title>Ranking</Title>
      </TitleContainer>

      <FlatList
        data={rankingList}
        renderItem={({ item }) => (
          <RankingComponent id={item.id} username={item.username} points={item.points} />
        )}
        style={{ marginTop: 20 }}
      />
    </Container>
  );
}

