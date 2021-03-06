import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ToastAndroid,
} from 'react-native';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPass: '',
      loading: false,
    };
  }

  alert() {
    Alert.alert(
      'Sukses',
      'Registrasi berhasil',
      [
        {
          text: 'Ok',
          onPress: () => console.log('Cancel Pressed'),
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/login/green.png')}
          style={styles.mainView}>
          <View style={styles.viewLogin}>
            <Text style={styles.text}> Register </Text>
            <View style={styles.viewInput}>
              <Image
                source={require('../assets/round-account-button-with-user-inside.png')}
                style={styles.icon}
              />
              <TextInput
                style={{flex: 1}}
                placeholder="Nama"
                onChangeText={(input) => this.setState({name: input})}
              />
            </View>
            <View style={styles.viewInput}>
              <Image
                source={require('../assets/black-envelope-email-symbol.png')}
                style={styles.icon}
              />
              <TextInput
                keyboardType={'email-address'}
                style={{flex: 1}}
                placeholder="Email"
                onChangeText={(input) => this.setState({email: input})}
              />
            </View>
            <View style={styles.viewInput}>
              <Image
                source={require('../assets/locked-padlock.png')}
                style={styles.icon}
              />
              <TextInput
                style={{flex: 1}}
                placeholder="Kata Sandi"
                onChangeText={(input) => this.setState({password: input})}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.viewInput}>
              <Image
                source={require('../assets/locked-padlock.png')}
                style={styles.icon}
              />
              <TextInput
                style={{flex: 1}}
                placeholder="Konfirmasi Kata Sandi"
                onChangeText={(input) => this.setState({confirmPass: input})}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              style={{
                width: 300,
              }}
              onPress={() => this.props.navigation.replace('Login')}>
              <Text style={styles.subText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Dashboard')}>
              {this.state.loading ? (
                <LottieView
                  source={require('../assets/lottie/890-loading-animation.json')}
                  autoPlay={true}
                  style={{width: 60, height: 60}}
                />
              ) : (
                <View style={styles.viewTextLogin}>
                  <Text style={styles.textLogin}>Sign up</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    // justifyContent: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  viewLogin: {
    width: '95%',
    backgroundColor: '#ffffff',
    elevation: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: '#4EC5F1',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  viewInput: {
    flexDirection: 'row',
    height: 50,
    width: 300,
    backgroundColor: '#0000001a',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    // borderRightColor: '#000000',
    // borderRightWidth: 1,
  },
  textRegister: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subText: {
    fontWeight: 'bold',
    color: '#8f8f8f',
  },
  viewTextLogin: {
    width: 160,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c9b8d',
    marginTop: 10,
    borderRadius: 10,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default Register;
