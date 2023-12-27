import {View, Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '../app-text/AppText';
import {COLORS} from '@shared/constants/colors';
import Spacer from '../spacer/Spacer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProductItem = () => {
  return (
    <Pressable style={[styles.item, styles.shadow]}>
      <View>
        <MaterialIcons name="favorite" style={styles.favorite} />
        <View style={styles.label}>
          <AppText h4 bold color="white">
            discount
          </AppText>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg',
          }}
        />
      </View>
      <View>
        <Spacer size={5} />
        <AppText h3>Black Coffee</AppText>
        <Spacer size={5} />
        <View style={styles.priceWrapper}>
          <AppText h4>5$</AppText>
          <AppText h4>10$</AppText>
          <AppText h4>/1pc</AppText>
        </View>
      </View>
      <Spacer size={5} />
      <Pressable style={styles.button}>
        <AppText bold color="white">
          Add To Cart
        </AppText>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  button: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  priceWrapper: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 10,
  },
  favorite: {
    fontSize: 30,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2,
  },
  label: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 3,
    top: 10,
    right: 10,
    zIndex: 2,
    borderRadius: 10,
  },
});

export default ProductItem;
