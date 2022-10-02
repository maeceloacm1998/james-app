import React from "react";
import {} from "react-native"

import {RankingProvider} from "./Ranking"

export const RankingProviderHook = ({children}: any) => {
    return <RankingProvider>{children}</RankingProvider>
}