import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        options={{
          headerShown: false
        }}
        component={SignIn}
        name="SignIn"
      />
    </Navigator>
  );
}
