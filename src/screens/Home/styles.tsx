import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import LogoSvg from '../../assets/min-logo.svg';
import RankSvg from '../../assets/rank-icon.svg';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: ${({ theme }) => theme.colors.GRAY_900};
  padding: ${RFValue(20)}px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled(LogoSvg)``;

export const Nickname = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_100};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  margin-left: 12px;
  margin-right: auto;
`;

export const RankIcon = styled(RankSvg)``;

export const InfoIcon = styled(Feather).attrs({
  name: 'info',
  size: 24
})`
  color: ${({ theme }) => theme.colors.GRAY_100};
`;

export const InfoContainer = styled.View`
  display: flex;
  align-items: flex-end;
  margin-top: 42px;
`;

export const InfoButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  display: flex;
  align-items: center;
`;

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_100};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 4px;
  font-size: ${RFValue(12)}px;
`;

export const SectionsContainer = styled.View`
  margin-top: 16px;
  margin-bottom: 50px;
`;
