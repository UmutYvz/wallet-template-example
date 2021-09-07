import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {colors} from '../../utils/colors';

import Login from '../login/LoginScreen';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="screen">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Giriş Yapın',
          headerStyle: {
            backgroundColor: colors.white,
            borderColor: colors.inputBorder,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 1,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Home"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
