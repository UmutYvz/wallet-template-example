import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WalletsScreen from '../home/WalletsScreen';
import {colors} from '../../utils/colors';
import {images} from '../../utils/images';

import Header from '../../components/header/Header';

import Empty from '../Empty';

const Tab = createBottomTabNavigator();

const TabBar = ({state, navigation}) => {
  const [screen, setScreen] = useState('Wallets');
  const [keyboard, setKeyboard] = useState(false);

  useEffect(() => {
    const keyboardListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboard(true);
    });
    const keyboardListener2 = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboard(false);
    });

    return () => {
      keyboardListener.remove();
      keyboardListener2.remove();
    };
  }, []);

  if (!keyboard) {
    return (
      <View style={styles.tabButtonContainer}>
        {state.routes.map((route, index) => {
          const {title, iconName} = route?.params || {};
          const isFocused = state.index === index;
          const onPress = () => {
            setScreen(route.name);
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                key={index}
                onPress={() => onPress()}
                style={styles.sectionContainer(isFocused)}>
                <Image
                  source={images[iconName]}
                  style={styles.tabBarIcon(isFocused)}
                />
                {isFocused && <View style={styles.triangle} />}
              </TouchableOpacity>
              <Text style={styles.tabBarText(isFocused)}>
                {title.toUpperCase()}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
  return null;
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
      }}
      screenOptions={{header: props => <Header navProps={props} />}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Wallets"
        initialParams={{
          title: 'Cüzdanlar',
          iconName: 'wallets',
          leftButton: true,
          rightButton: true,
        }}
        component={WalletsScreen}
      />
      <Tab.Screen
        name="Cards"
        initialParams={{title: 'Kartlarım', iconName: 'myCards'}}
        component={Empty}
      />
      <Tab.Screen
        name="ChooseFoodTab"
        initialParams={{title: 'Bakiye', iconName: 'balance'}}
        component={Empty}
      />
      <Tab.Screen
        name="History"
        initialParams={{title: 'Geçmiş', iconName: 'history'}}
        component={Empty}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  tabButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 24,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  triangle: {
    position: 'absolute',
    bottom: 64,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.primary,
  },
  sectionContainer: focused => {
    return {
      padding: 20,
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: focused ? colors.primary : colors.white,
      shadowColor: 'rgb(23, 24, 27)',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.12,
      shadowRadius: 4,
      elevation: 2,
    };
  },
  tabBarText: focused => {
    return {
      fontSize: 11,
      lineHeight: 26,
      color: focused ? colors.primary : colors.placeholderTextColor,
    };
  },
  tabBarIcon: focused => {
    return {
      tintColor: focused ? colors.white : colors.primary,
    };
  },
});
