/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from '@services/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
