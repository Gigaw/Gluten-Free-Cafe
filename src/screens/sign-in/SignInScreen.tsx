import React from 'react';
import AppMockScreen from '@shared/components/app-mock-screen/AppMockScreen';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
// import {signIn} from '@services/slices/authSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/Navigation';
import {signIn} from '@services/slices/authSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignInScreen({navigation}: Props): JSX.Element {
  const dispatch = useDispatch();
  return (
    <AppMockScreen name="Sign In Screen">
      <Button title="log in" onPress={() => dispatch(signIn())} />
      <Button title="register" onPress={() => navigation.navigate('SignUp')} />
    </AppMockScreen>
  );
}

export default SignInScreen;
