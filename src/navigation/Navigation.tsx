import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import SignInScreen from '@screens/sign-in/SignInScreen';
import SignUpScreen from '@screens/sign-up/SignUpScreen';
import {selectIsSignIn} from '@services/slices/authSlice';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Main: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const isSignedIn = useSelector(selectIsSignIn);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isSignedIn ? (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',
                animationTypeForReplace: !isSignedIn ? 'pop' : 'push',
              }}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <Stack.Screen
            name="Main"
            component={TabNavigation}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
