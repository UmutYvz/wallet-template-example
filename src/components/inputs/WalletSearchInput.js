import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import {colors} from '../../utils/colors';
import {images} from '../../utils/images';

const PlacesInput = () => {
  const renderSearchIcon = () => {
    return (
      <View style={styles.leftIconOutContainer}>
        <Image source={images.search} />
      </View>
    );
  };

  const renderFilterIcon = () => {
    return (
      <TouchableOpacity style={styles.rightIconOutContainer}>
        <Text style={styles.filterText}>TÜM CÜZDANLAR</Text>
        <Image source={images.filter} style={styles.rightIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.textInputContainer}>
      {renderSearchIcon()}
      <TextInput
        placeholder="Cüzdan Ara..."
        placeholderTextColor={colors.searchTextColor}
        style={styles.textInput}
        returnKeyType="search"
      />
      {renderFilterIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  textInputContainer: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorder,
    flexDirection: 'row',
    height: 50,
  },
  textInput: {
    paddingVertical: 15,
    paddingLeft: 12,
    marginBottom: 0,
    color: colors.dark,
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  leftIconOutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 24,
    backgroundColor: colors.white,
  },
  rightIconOutContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 26,
    paddingRight: 24,
    flexDirection: 'row',
  },
  filterText: {color: colors.primary, fontWeight: '600'},
  rightIcon: {
    marginLeft: 8,
  },
});

export default PlacesInput;
