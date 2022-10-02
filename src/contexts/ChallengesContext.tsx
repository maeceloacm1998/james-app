/* eslint-disable react/jsx-no-constructed-context-values */
import { PropsWithChildren, createContext, useContext, useState, useMemo } from 'react';
import { ChallengeStatus } from '../components/Challenge/types';

type ChallengesData = {
  scores: string[];
  challengesStatuses: { [id: string]: ChallengeStatus };
};

type ChallengesProps = PropsWithChildren;

export const ChallengesContext = createContext<ChallengesData>({} as ChallengesData);

export const useChallenges = (): ChallengesData => useContext(ChallengesContext);

export function ChallengesProvider({ children }: ChallengesProps) {
  const [scores, setScores] = useState(['0 / 2', '0 / 2', '0 / 2', '0 / 2']);
  const [challengesStatuses, setChallengeStatuses] = useState<{ [id: string]: ChallengeStatus }>({
    '0': ChallengeStatus.ACTIVE,
    '1': ChallengeStatus.DISABLED,
    '2': ChallengeStatus.DISABLED,
    '3': ChallengeStatus.DISABLED
  });

  return (
    <ChallengesContext.Provider
      value={{
        scores,
        challengesStatuses
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}
