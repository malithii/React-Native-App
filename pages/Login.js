import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacityComponent,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const image = {
  uri: 'https://mobimg.b-cdn.net/v3/fetch/d4/d4f0aad419f9cc7b2dced3fe9dab3972.jpeg?h=900&r=0.5',
};

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 8,
          }}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              width: '100%',
              backgroundColor: 'rgba(242, 244, 244, 0.7)',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Log in
            </Text>
            {/* <Text
          style={{
            fontSize: 15,
            marginBottom: 10,
          }}
        >
        </Text> */}

            <Text style={styles.inputHeading}>Username</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              autoFocus
            />
            <Text style={styles.inputHeading}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              autoFocus
              secureTextEntry={true}
              marginBottom={10}
            />
            <Text style={styles.text}>Forgot password?</Text>
            <View style={{marginBottom: 10}}>
              <Button title="Login" color="#e74c3c" />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#D0D3D4',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>SIGN UP</Text>
            </TouchableOpacity>
            {/* <Button title="Signup" color="#D0D3D4" /> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export const styles = StyleSheet.create({
  inputHeading: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    height: 40,
    color: 'black',
    backgroundColor: '#EAEDED',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  text: {
    color: '#1A5276',
    marginBottom: 50,
    marginTop: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
