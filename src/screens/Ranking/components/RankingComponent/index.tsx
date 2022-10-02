import React from 'react';
import { View, Text } from 'react-native';

import { Ranking } from '../../../../context/Ranking';

import Classification from '../../../../assets/placing.png';
import Classification2 from '../../../../assets/ranking2.png';
import Classification3 from '../../../../assets/ranking3.png';


import {
  Container,
  Divider,
  ImageClassification,
  PointClassification,
  TitleClassification
} from './styled';

export function RankingComponent({ id, points, username }: Ranking) {
  return (
    <View>
      <Container>
        <ImageClassification source={Classification} />
        <TitleClassification>{username}</TitleClassification>
        <PointClassification>{points} pts</PointClassification>
      </Container>

      <Divider />

      <Container>
        <ImageClassification source={Classification2} />
        <TitleClassification>Julia</TitleClassification>
        <PointClassification>80 pts</PointClassification>
      </Container>
      
      <Divider />

      <Container>
        <ImageClassification source={Classification3} />
        <TitleClassification>Roberta</TitleClassification>
        <PointClassification>70 pts</PointClassification>
      </Container>
      
      <Divider />
    </View>
  );
}
