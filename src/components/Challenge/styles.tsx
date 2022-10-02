import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ChallengeStatus } from './types';

type ImageProps = {
  status: ChallengeStatus;
};

type ScoreTextProps = {
  status: ChallengeStatus;
};

export const Container = styled.View`
  align-items: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  display: flex;
  align-items: center;
`;

export const Image = styled.Image<ImageProps>`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;
  border-radius: ${RFValue(32)}px;
  overflow: hidden;
  border-width: ${RFValue(4)}px;

  ${({ status, theme }) =>
    status === ChallengeStatus.ACTIVE &&
    css`
      border-color: ${theme.colors.GRAY_500};
    `}

  ${({ status, theme }) =>
    status === ChallengeStatus.HALF &&
    css`
      border-color: ${theme.colors.YELLOW_400};
    `}

  ${({ status, theme }) =>
    status === ChallengeStatus.DISABLED &&
    css`
      border-color: ${theme.colors.GRAY_700};
    `};

  ${({ status, theme }) =>
    status === ChallengeStatus.FINISHED &&
    css`
      border-color: ${theme.colors.GREEN_500};
    `};
`;

export const ScoreText = styled.Text<ScoreTextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 4px;
  font-size: ${RFValue(16)}px;

  ${({ status, theme }) =>
    status === ChallengeStatus.ACTIVE &&
    css`
      color: ${theme.colors.GRAY_300};
    `}

  ${({ status, theme }) =>
    status === ChallengeStatus.HALF &&
    css`
      color: ${theme.colors.YELLOW_100};
    `}

  ${({ status, theme }) =>
    status === ChallengeStatus.DISABLED &&
    css`
      color: ${theme.colors.GRAY_700};
    `};

  ${({ status, theme }) =>
    status === ChallengeStatus.FINISHED &&
    css`
      color: ${theme.colors.GREEN_100};
    `};
`;
