import {View, StyleSheet, Pressable, FlatList} from 'react-native';
import React from 'react';
import AppText from '@shared/components/app-text/AppText';
import ProductItem from '@shared/components/product-item/ProductItem';
import Spacer from '@shared/components/spacer/Spacer';
import FlatGrid from 'react-native-super-grid';

const Special = () => {
  return (
    <View>
      <View style={styles.topWrapper}>
        <AppText h3>Special</AppText>
        <Pressable>
          <AppText h4>View All</AppText>
        </Pressable>
      </View>
      <Spacer size={10} />
      <FlatGrid
        itemDimension={130}
        data={[1, 2]}
        renderItem={() => <ProductItem />}
        scrollEnabled={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Special;
