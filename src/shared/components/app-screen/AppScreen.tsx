import {SCREEN_HORIZONTAL_PADDING} from '@shared/constants/styles';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

interface Props extends React.PropsWithChildren {}

const AppScreen = ({children}: Props): JSX.Element => {
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.safeScreen}
          contentContainerStyle={styles.contentContainer}>
          {children}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  safeScreen: {
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
});

export default AppScreen;
