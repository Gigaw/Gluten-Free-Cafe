import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
// import {api} from './api/auth';
// import {api} from './services/auth';

export const store = configureStore({
  reducer: {
    // [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
