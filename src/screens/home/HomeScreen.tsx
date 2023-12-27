import AppScreen from '@shared/components/app-screen/AppScreen';
import React from 'react';
import {StyleSheet} from 'react-native';
import Banner from './components/Banner';
import Special from './components/Special';
import Spacer from '@shared/components/spacer/Spacer';

function HomeScreen(): JSX.Element {
  return (
    <AppScreen>
      <Banner />
      <Spacer />
      <Special />
      <Spacer />
    </AppScreen>
  );
}

const style = StyleSheet.create({});

export default HomeScreen;
