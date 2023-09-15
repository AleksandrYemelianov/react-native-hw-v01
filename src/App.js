import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={<HomeScreen/>} />
        <Stack.Screen name="Login" component={<LoginScreen/>} />
        <Stack.Screen name="Registration" component={<RegistrationScreen/>} />
        <StatusBar style="auto" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
