import {View, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '@shared/constants/colors';
import AppText from '@shared/components/app-text/AppText';
import Spacer from '@shared/components/spacer/Spacer';

const Banner = () => {
  return (
    <Pressable style={styles.banner} onPress={() => null}>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <AppText h1>Special Offer</AppText>
        </View>
        <Spacer size={10} />
        <AppText h3 style={styles.desription}>
          Enjoy fresh coffee every morning!
        </AppText>
      </View>
      <Spacer horizontal />
      <View>
        <Image
          source={{
            uri: 'https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg',
          }}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  banner: {
    padding: 15,
    paddingLeft: 0,
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingLeft: 15,
  },
  desription: {
    paddingLeft: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  infoContainer: {
    flexShrink: 1,
  },
});
export default Banner;
