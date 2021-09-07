import React, {memo} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from '../../utils/images';

const Button = ({
  title = 'defaultText',
  onPress,
  buttonStyle = {},
  textStyle = {},
  image,
}) => (
  <TouchableOpacity style={[buttonStyle, styles.container]} onPress={onPress}>
    <View style={styles.innerContainer}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </View>
    <View style={styles.rightIconOutContainer}>
      <Image source={images[image]} style={styles.rightIcon} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 120,
    margin: 24,
    height: 60,
    zIndex: 99999,
  },
  innerContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  rightIconOutContainer: {
    position: 'absolute',
    right: 0,
    paddingLeft: 26,
    paddingRight: 24,
  },
  rightIcon: {
    marginLeft: 8,
  },
});

export default memo(Button);
