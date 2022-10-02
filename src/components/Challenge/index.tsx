/* eslint-disable react/require-default-props */
import { Container, Image, Button, ScoreText } from './styles';
import { ChallengeStatus } from './types';

export type ChallengeProps = {
  status: ChallengeStatus;
  imageSource?: string;
  score: string;
  onChallengeClick: () => void;
};

export function Challenge({
  status = ChallengeStatus.DISABLED,
  imageSource,
  score,
  onChallengeClick
}: ChallengeProps) {
  return (
    <Container>
      <Button onPress={onChallengeClick}>
        <Image source={imageSource} status={status} />
      </Button>
      <ScoreText status={status}>{score}</ScoreText>
    </Container>
  );
}
