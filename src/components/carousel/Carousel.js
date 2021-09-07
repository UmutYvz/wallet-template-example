import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import {colors} from '../../utils/colors';
import {images} from '../../utils/images';

const carouselItems = [
  {
    title: 'Kantin',
    amount: '4',
    active: true,
    color: colors.greenBorder,
    borderColor: colors.greenBorder,
    image: images.coffee,
  },
  {
    title: 'Kahveci Penguen',
    amount: '4',
    price: '4.00',
    active: true,
    color: colors.orangeBorder,
    borderColor: colors.orangeOutBorder,
    image: images.coffee,
  },
  {
    title: 'Lagina Kahvecisi',
    amount: '4',
    active: true,
    color: colors.pinkBorder,
    borderColor: colors.pinkBorder,
    image: images.aven,
  },
];

const CarouselComp = () => {
  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.carouselOutContainer}>
        <View style={styles.carouselInnerContainer}>
          <View
            style={[
              styles.topBorder,
              {
                backgroundColor: item.color,
              },
            ]}
          />
          <View style={styles.infoContainerRow}>
            <View style={styles.infoLeftContainer}>
              <View
                style={[
                  styles.imageContainer,
                  {borderColor: item.borderColor},
                ]}>
                <Image source={item.image} />
              </View>
            </View>
            <View style={styles.infoRightContainer}>
              <View style={styles.infoRightTextContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
              </View>
            </View>
          </View>
        </View>

        {item.active && (
          <View style={styles.dynamicCampaignContainer}>
            <Text style={styles.dynamicCampaignText}>{item.amount} </Text>
            <Text style={styles.activeCampaignText}>AKTİF KAMPANYA </Text>
          </View>
        )}

        {item.price && (
          <View style={styles.dynamicPriceContainer}>
            <Text style={styles.dynamicPriceText}>{item.price} TL</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Carousel
        layout={'default'}
        loop
        firstItem={2}
        enableSnap
        data={carouselItems}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 100}
        renderItem={_renderItem}
        onSnapToItem={index => console.log(index)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  carouselOutContainer: {
    height: 200,
    marginVertical: 20,
  },
  carouselInnerContainer: {
    flex: 1,
    borderRadius: 12,
    height: 168,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  topBorder: {height: 25},
  infoContainerRow: {
    flex: 1,
    flexDirection: 'row',
  },
  infoLeftContainer: {flex: 0.45, alignItems: 'center'},
  imageContainer: {
    backgroundColor: 'white',
    height: 80,
    borderRadius: 100,
    width: 80,
    marginTop: -15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 3,
  },
  infoRightContainer: {
    flex: 0.75,
    alignItems: 'center',
  },
  infoRightTextContainer: {
    marginRight: 20,
    marginTop: 11,
    width: '100%',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.placeholderTextColor,
  },
  dynamicCampaignContainer: {
    left: 35,
    bottom: 20,
    zIndex: 99,
    position: 'absolute',
    flexDirection: 'row',
  },
  dynamicCampaignText: {fontSize: 21, color: colors.priceTextColor},
  activeCampaignText: {fontSize: 11, color: colors.secondTextColor},
  dynamicPriceContainer: {
    right: 27,
    bottom: 20,
    position: 'absolute',
    flexDirection: 'row',
  },
  dynamicPriceText: {fontSize: 20, color: colors.priceTextColor},
});

export default CarouselComp;
