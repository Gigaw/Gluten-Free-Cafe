import {View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import AppText from '@shared/components/app-text/AppText';
import ProductItem from '@shared/components/product-item/ProductItem';
import Spacer from '@shared/components/spacer/Spacer';
import {FlatGrid} from 'react-native-super-grid';
import HomeSection from './HomeSection';

const Special = () => {
  return (
    <HomeSection name="Special" onPress={() => null}>
      <FlatGrid
        itemDimension={130}
        data={[1, 2]}
        renderItem={() => <ProductItem />}
        scrollEnabled={false}
        numColumns={2}
      />
    </HomeSection>
  );
};

const styles = StyleSheet.create({
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Special;
