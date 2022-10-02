import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 100
  }
})`
  display: flex;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_100};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 4px;
  font-size: ${RFValue(16)}px;
`;

export const SetChallengesContainer = styled.View`
  display: flex;
  margin-top: 24px;
  width: 100%; ;
`;

export const DoubleChallengesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 24px;
`;
