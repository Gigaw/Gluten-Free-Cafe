import {logOut} from '@services/slices/authSlice';
import AppMockScreen from '@shared/components/app-mock-screen/AppMockScreen';
import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';

function AccountScreen(): JSX.Element {
  const dispatch = useDispatch();
  return (
    <AppMockScreen name="Account Screen">
      <Button title="log out" onPress={() => dispatch(logOut())} />
    </AppMockScreen>
  );
}

export default AccountScreen;
