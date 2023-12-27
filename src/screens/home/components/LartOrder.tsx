import {View} from 'react-native';
import React from 'react';
import AppText from '@shared/components/app-text/AppText';

const LartOrder = () => {
  return (
    <View>
      <AppText h2 bold>
        Your last order{' '}
      </AppText>
      <View>
        <AppText h3>price</AppText>
        <AppText h3>number of items</AppText>
      </View>
    </View>
  );
};

export default LartOrder;
