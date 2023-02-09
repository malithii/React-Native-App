import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 8}} {...props}>
    <Text style={{fontSize: 16, color: 'white'}}>Done</Text>
  </TouchableOpacity>
);
const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#27AE60',

          title: 'We have what you’re looking for',
          titleStyles: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            marginHorizontal: 10,
          },
          subtitle: 'Shop with us and get the best online shopping experience',
          cntainerStyles: {
            paddingBotton: 0,
          },
          image: (
            <Image
              source={require('../images/shopping5.png')}
              style={styles.picture}
            />
          ),
        },
        {
          backgroundColor: '#7d3c98',
          title: 'Find it here, buy it now',
          titleStyles: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            marginHorizontal: 10,
          },
          subtitle:
            'The place where you can find the best deals, You can shop for anything from home goods to pet supplies and more!',
          image: (
            <Image
              source={require('../images/shopping0.png')}
              style={styles.picture}
            />
          ),
        },
        {
          backgroundColor: '#f39c12',

          title: 'A few clicks is all it takes.',
          titleStyles: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            marginHorizontal: 10,
          },
          subtitle: 'Start by creating an account',
          cntainerStyles: {
            paddingBotton: 0,
          },
          image: (
            <Image
              source={require('../images/shopping4.png')}
              style={styles.picture2}
            />
          ),
        },
      ]}
    />
  );
};

export default OnboardingScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 380,
    height: 400,
  },
  picture2: {
    width: 350,
    height: 350,
  },
});
