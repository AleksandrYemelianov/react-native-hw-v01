import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/user/HomeScreen/HomeScreen';
import CommentsScreen from './Screens/user/CommentsScreen/CommentsScreen';
import MapScreen from './Screens/user/MapScreen/MapScreen';
import LoginScreen from './Screens/auth/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen/RegistrationScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
