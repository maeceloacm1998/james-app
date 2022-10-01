import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen component={Home} name="Home" />
    </Navigator>
  );
}
