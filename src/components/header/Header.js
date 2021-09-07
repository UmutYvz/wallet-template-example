import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {images} from '../../utils/images';
import {colors} from '../../utils/colors';

const Header = ({navProps}) => {
  const {route} = navProps;
  const [headerParams, setHeaderParams] = useState({});
  useEffect(() => {
    setHeaderParams(route?.params);
  }, [route?.params]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={[styles.header]}>
          {headerParams?.leftButton && (
            <TouchableOpacity
              style={styles.leftContainer}
              hitSlop={{
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
              }}>
              <Image source={images.bars} style={styles.iconStyle} />
            </TouchableOpacity>
          )}
          <View style={styles.centerContainer}>
            <Text style={styles.title}>
              {headerParams?.title ? headerParams?.title : 'Giriş Yapın'}{' '}
            </Text>
          </View>

          {headerParams?.rightButton && (
            <View style={styles.rightContainer}>
              <TouchableOpacity
                hitSlop={{
                  top: 10,
                  left: 10,
                  right: 10,
                  bottom: 10,
                }}>
                <Image source={images.bell} style={styles.iconStyle} />
                <View style={styles.dotContainer}>
                  <Image source={images.bellDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  header: {
    height: 50,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
  },
  iconStyle: {
    transform: [{scale: 1.2}],
  },
  centerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    zIndex: -1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
  },
  rightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'row',
  },
  dotContainer: {
    position: 'absolute',
    bottom: -2,
    left: -6,
  },
});
export default Header;
