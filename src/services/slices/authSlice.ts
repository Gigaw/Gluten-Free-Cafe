import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '@services/store';
// import type {PayloadAction} from '@reduxjs/toolkit';
// import type {RootState} from '../../app/store';

// Define a type for the slice state
interface AuthState {
  isSignedIn: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  isSignedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signIn: state => {
      state.isSignedIn = true;
    },
    logOut: state => {
      state.isSignedIn = false;
    },
  },
});

export const {logOut, signIn} = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsSignIn = (state: RootState) => state.auth.isSignedIn;

export default authSlice;
