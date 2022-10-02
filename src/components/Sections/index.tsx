import { Challenge } from '../Challenge';
import { ChallengeStatus } from '../Challenge/types';
import { Container, DoubleChallengesContainer, SetChallengesContainer, Title } from './styles';

export function Sections() {
  return (
    <Container>
      <Title>Seção</Title>
      <SetChallengesContainer>
        <Challenge
          status={ChallengeStatus.ACTIVE}
          imageSource={require('../../assets/james-webb-image.jpg')}
          score="0 / 1"
        />
        <DoubleChallengesContainer>
          <Challenge
            status={ChallengeStatus.DISABLED}
            imageSource={require('../../assets/hubble-image.jpg')}
            score="0 / 1"
          />
          <Challenge
            status={ChallengeStatus.DISABLED}
            imageSource={require('../../assets/galaxy-image.jpg')}
            score="0 / 1"
          />
        </DoubleChallengesContainer>
        <Challenge
          status={ChallengeStatus.DISABLED}
          imageSource={require('../../assets/black-roles-image.jpg')}
          score="0 / 1"
        />
      </SetChallengesContainer>

      <SetChallengesContainer>
        <Challenge status={ChallengeStatus.DISABLED} score="2 / 2" />
        <DoubleChallengesContainer>
          <Challenge status={ChallengeStatus.DISABLED} score="2 / 2" />
          <Challenge status={ChallengeStatus.DISABLED} score="2 / 2" />
        </DoubleChallengesContainer>
        <Challenge status={ChallengeStatus.DISABLED} score="2 / 2" />
      </SetChallengesContainer>
    </Container>
  );
}
