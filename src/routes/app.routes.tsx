import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RankingProviderHook } from '../context';
import { Home } from '../screens';
import { Questions } from '../screens/Questions';
import { Ranking } from '../screens/Ranking';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <RankingProviderHook>
      <Navigator>
        <Screen
          component={Ranking}
          name="Ranking"
          options={{
            headerShown: false
          }}
        />

        <Screen
          component={Home}
          name="Home"
          options={{
            headerShown: false
          }}
        />

        <Screen
          component={Questions}
          name="Questions"
          options={{
            headerShown: false
          }}
        />
      </Navigator>
    </RankingProviderHook>
  );
}

