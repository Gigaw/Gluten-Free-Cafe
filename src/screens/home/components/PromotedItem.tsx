import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '@shared/components/app-text/AppText';
import Spacer from '@shared/components/spacer/Spacer';

const PromotedItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg',
        }}
        style={styles.image}
      />
      <Spacer size={10} />
      <View style={styles.infoContainer}>
        <AppText h3 bold style={styles.name}>
          Pizza
        </AppText>
        <AppText h3 bold>
          20$
        </AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  image: {
    height: 200,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    marginRight: 20,
  },
  price: {},
});
export default PromotedItem;
