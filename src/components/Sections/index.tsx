import { Challenge } from '../Challenge';
import { ChallengeStatus } from '../Challenge/types';
import { Container, DoubleChallengesContainer, SetChallengesContainer, Title } from './styles';

export type SectionsProps = {
  onChallengePress: (id: string) => void;
  scores: string[];
  challengesStatuses: { [id: string]: ChallengeStatus };
};

export function Sections({ onChallengePress, scores, challengesStatuses }: SectionsProps) {
  return (
    <Container>
      <Title>Seção</Title>
      <SetChallengesContainer>
        <Challenge
          status={challengesStatuses['0']}
          imageSource={require('../../assets/james-webb-image.jpg')}
          score={scores[0]}
          onChallengeClick={() => onChallengePress('0')}
        />
        <DoubleChallengesContainer>
          <Challenge
            status={challengesStatuses['1']}
            imageSource={require('../../assets/hubble-image.jpg')}
            score={scores[1]}
            onChallengeClick={() => onChallengePress('1')}
          />
          <Challenge
            status={challengesStatuses['2']}
            imageSource={require('../../assets/galaxy-image.jpg')}
            score={scores[2]}
            onChallengeClick={() => onChallengePress('2')}
          />
        </DoubleChallengesContainer>
        <Challenge
          status={challengesStatuses['3']}
          imageSource={require('../../assets/black-roles-image.jpg')}
          score={scores[3]}
          onChallengeClick={() => onChallengePress('3')}
        />
      </SetChallengesContainer>

      <SetChallengesContainer>
        <Challenge status={ChallengeStatus.DISABLED} score="2 / 2" onChallengeClick={() => {}} />
        <DoubleChallengesContainer>
          <Challenge status={ChallengeStatus.DISABLED} score="2 / 2" onChallengeClick={() => {}} />
          <Challenge status={ChallengeStatus.DISABLED} score="2 / 2" onChallengeClick={() => {}} />
        </DoubleChallengesContainer>
        <Challenge status={ChallengeStatus.DISABLED} score="2 / 2" onChallengeClick={() => {}} />
      </SetChallengesContainer>
    </Container>
  );
}
