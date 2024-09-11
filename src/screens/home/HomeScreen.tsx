import AppScreen from '@shared/components/app-screen/AppScreen';
import React from 'react';
import Banner from './components/Banner';
import Spacer from '@shared/components/spacer/Spacer';
import Special from './components/Special';
import Categories from './components/Categories';
// import Banner from './components/Banner';
// import Special from './components/Special';
// import Spacer from '@shared/components/spacer/Spacer';
// import Categories from './components/Categories';
// import Spacer from '@shared/components/spacer/Spacer';

function HomeScreen(): JSX.Element {
  return (
    <AppScreen>
      <Banner />
      <Spacer />
      <Special />
      <Spacer />
      <Categories />
    </AppScreen>
  );
}

export default HomeScreen;
