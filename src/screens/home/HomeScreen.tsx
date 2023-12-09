import AppScreen from '@shared/components/app-screen/AppScreen';
import AppText from '@shared/components/app-text/AppText';
import Spacer from '@shared/components/spacer/Spacer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PromotedItem from './components/PromotedItem';

function HomeScreen(): JSX.Element {
  return (
    <AppScreen>
      {/* Greeting */}
      <View>
        <AppText h1 bold>
          Hello Igor
        </AppText>
      </View>
      <Spacer />
      {/* Loyalty points */}
      <View>
        <AppText h2 bold>
          You have 2 ⭐️
        </AppText>
      </View>
      {/* Promoted items */}
      <View>
        <AppText h2 bold>
          Promoted Items
        </AppText>
        {[{}].map(() => (
          <PromotedItem />
        ))}
      </View>
      {/* Favorite Items */}
      <View>
        <Text>Favorite Items</Text>
      </View>
      {/* Your last order */}
      <View>
        <Text>Your last order </Text>
      </View>
    </AppScreen>
  );
}

const style = StyleSheet.create({});

export default HomeScreen;
