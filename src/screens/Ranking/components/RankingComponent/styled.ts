import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Divider = styled.View`
  height: 2px;
  margin-right: 16px;
  margin-left: 16px;
  background-color: ${({ theme }) => theme.colors.GRAY_100};;
`;

export const ImageClassification = styled.Image`
  height: 24px;
  width: 24px;
`;

export const TitleClassification = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

export const PointClassification = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

