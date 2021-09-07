import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {createRef} from 'react/cjs/react.production.min';
import Button from '../../components/buttons/Button';
import CarouselComp from '../../components/carousel/Carousel';

import WalletSearchInput from '../../components/inputs/WalletSearchInput';
import {colors} from '../../utils/colors';
import {images} from '../../utils/images';

const WalletsView = () => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      scrollEnabled={true}
      keyboardShouldPersistTaps="handled">
      <View>
        <WalletSearchInput />
        <View style={styles.container}>
          <View style={styles.backgroundContainer}>
            <Image source={images.ellipse} resizeMode="cover" />
            <View style={styles.starContainer}>
              <Image source={images.stars} resizeMode="cover" />
            </View>
          </View>

          <View style={styles.overlay}>
            <View style={styles.headline}>
              <CarouselComp />
            </View>
          </View>
          <View style={styles.buttons}>
            <Button
              image="gift"
              title="Kampanyalar"
              buttonStyle={styles.giftButton}
              textStyle={styles.giftButtonText}
            />
            <Button
              title="Cüzdan Ekle"
              image="addWallet"
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WalletsView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    flex: 1,
    marginTop: -130,
    textAlign: 'center',
    zIndex: -9999,
  },
  starContainer: {
    alignItems: 'center',
    marginTop: -40,
    zIndex: -199,
  },
  overlay: {
    marginTop: 5,
  },
  headline: {
    height: 320,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  buttons: {
    width: Dimensions.get('window').width - 30,
    flexDirection: 'column',
    justifyContent: 'space-around',
    zIndex: 999,
    marginBottom: 110,
  },
  giftButton: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 3,
  },
  giftButtonText: {color: colors.primary, fontWeight: '600'},
  loginButton: {backgroundColor: colors.primary, marginTop: 0},
  loginButtonText: {color: colors.white, fontWeight: '600'},
});
