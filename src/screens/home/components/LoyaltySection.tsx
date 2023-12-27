import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '@shared/components/app-text/AppText';
import {COLORS} from '@shared/constants/colors';

const LoyaltySection = () => {
  return (
    <View style={styles.container}>
      <AppText h2 bold center>
        You have 2 ⭐️
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
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
});

export default LoyaltySection;
