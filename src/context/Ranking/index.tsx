import React, { createContext, useContext, useState } from 'react';

interface RankingContextData {
  existUser(idUser: String): void;
  addNewUser(userToRanking: Ranking): void;
  updatePoints(idUser: String, points: Number): void;
  rankingList: Array<Ranking>;
  loading: Boolean;
}

interface RankingState {}

interface Ranking {
  id: String;
  username: String;
  points: Number;
}

const RankingContext = createContext<RankingContextData>({} as RankingContextData);

export const RankingProvider = ({ children }: any) => {
  // const dale =[{id: "111111", username: "Marcelo", points: 100}] as Ranking[]
  const [rankingList, setRankingList] = useState<Ranking[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function existUser(idUser: String) {
    const user = rankingList.findIndex((user) => user.id == idUser);
    if (user != -1) {
      return true;
    }

    return false;
  }

  function addNewUser(userToRanking: Ranking) {
    setLoading(true);
    setRankingList((oldvalue) => [...oldvalue, userToRanking]);
    setLoading(false);
  }

  function updatePoints(idUser: String, points: Number) {
    setLoading(true);

    const newRankingList: Array<Ranking> = rankingList.map((user) => {
      if (user.id == idUser) {
        user.points = points;
      }
      return user;
    });

    setRankingList(newRankingList);

    setLoading(false);
  }

  return (
    <RankingContext.Provider value={{
        existUser,
        addNewUser,
        updatePoints,
        rankingList,
        loading
    }}>
      {children}
    </RankingContext.Provider>
  );
};

export function useRanking(): RankingContextData {
  const context = useContext(RankingContext);

  return context;
}

