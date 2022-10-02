import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRanking } from '../../context/Ranking';
import { Container } from './styled';

export function Ranking() {
  const {rankingList} = useRanking()
  useEffect(() => {
    console.log(rankingList)
  }, [])

  return (
    <Container>
      <Text>Dale dale Ranking</Text>
    </Container>
  );
}
