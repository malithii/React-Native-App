import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './pages/OnboardingScreen';
import LoginScreen from './pages/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();

const App = () => {
  // const [isFirstLaunch, setIsFirstlaunch] = React.useState(null);

  // React.useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if (value == null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsFirstlaunch(true);
  //     } else {
  //       setIsFirstlaunch(false);
  //     }
  //   });
  // }, []);

  // if (isFirstLaunch === null) {
  //   return null;
  // } else if (isFirstLaunch == true) {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
  // } else {
  //   return <LoginScreen />;
  // }
};

export default App;
