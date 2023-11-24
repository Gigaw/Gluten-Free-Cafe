import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import AccountScreen from '../screens/account/AccountScreen';
import ProductsScreen from '../screens/products/ProductsScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Settings" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
