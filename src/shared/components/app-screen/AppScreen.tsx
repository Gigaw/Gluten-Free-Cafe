import {SCREEN_HORIZONTAL_PADDING} from '@shared/constants/styles';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

interface Props extends React.PropsWithChildren {}

const AppScreen = ({children}: Props): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.contentContainer}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  screen: {
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
});

export default AppScreen;
