import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {colors} from '../../utils/colors';
import {images} from '../../utils/images';
import Button from '../../components/buttons/Button';

const LoginView = ({onPressLogin}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={getStatusBarHeight(true) + 50}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={images.logo}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.leftIconOutContainer}>
              <View style={styles.iconInnerContainer}>
                <Image source={images.phone} />
              </View>
            </View>
            <TextInput
              label="phone"
              placeholder={'5xx xxx xx xx'}
              placeholderTextColor={colors.placeholderTextColor}
              style={styles.inputContainer}
            />
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.leftIconOutContainer}>
              <View style={styles.iconInnerContainer}>
                <Image source={images.lock} />
              </View>
            </View>
            <TextInput
              label="password"
              placeholder="●●●●●●●"
              placeholderTextColor={colors.placeholderTextColor}
              style={styles.inputContainer}
            />
          </View>
          <TouchableOpacity style={styles.forgetPasswordContainer}>
            <Text style={styles.forgetPasswordText}>Şifremi Unuttum</Text>
          </TouchableOpacity>
          <Button
            title="Giriş Yap"
            onPress={() => onPressLogin()}
            buttonStyle={{backgroundColor: colors.primary}}
            textStyle={styles.loginButton}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderColor: colors.inputBorder,
    borderWidth: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  topContainer: {
    padding: 24,
    paddingVertical: 0,
  },
  imageContainer: {
    width: 160,
    height: 124.5,
    marginBottom: 15,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  textInputContainer: {
    textAlign: 'center',
    paddingVertical: 5,
    width: Dimensions.get('window').width,
    marginHorizontal: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftIconOutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 26,
    backgroundColor: colors.white,
  },
  iconInnerContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderBottomColor: colors.inputBorder,
    borderBottomWidth: 1,
    width: 315,
    fontSize: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginLeft: -20,
  },
  forgetPasswordContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  forgetPasswordText: {
    color: colors.primary,
    letterSpacing: 1,
  },
  loginButton: {color: colors.white, fontWeight: '800'},
});
export default LoginView;
