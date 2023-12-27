import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '@shared/components/app-text/AppText';
import {COLORS} from '@shared/constants/colors';

const FavoritesItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <AppText h4 style={styles.name}>
          Pizza
        </AppText>
        <AppText h4>20$</AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: COLORS.HOME_CARDS_BG,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  image: {
    height: 70,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    marginRight: 20,
  },
  price: {},
});
export default FavoritesItem;
