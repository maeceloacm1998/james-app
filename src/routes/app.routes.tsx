import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  );
}