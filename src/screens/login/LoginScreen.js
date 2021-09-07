import React from 'react';

import {useNavigation} from '@react-navigation/native';

import LoginView from './LoginView';

const LoginScreen = () => {
  const navigation = useNavigation();
  const onPressLogin = () => {
    navigation.navigate('Home');
  };
  return <LoginView onPressLogin={onPressLogin} />;
};

export default LoginScreen;
