import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authService } from '../services/authService';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './slices/authSlice';
import { propService } from '../services/propService';
import { googleService } from '../services/googleService';

import filterReducer from './slices/filterSlice';
import favReducer from './slices/favSlice';
import homeReducer from './slices/homeSlice';
import movingReducer from './slices/movingSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage';

export const appReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
  Favourites: favReducer,
  home: homeReducer,
  moving: movingReducer,
  [authService.reducerPath]: authService.reducer,
  [propService.reducerPath]: propService.reducer,
  [googleService.reducerPath]: googleService.reducer,


});

const reducer = (state, action) => {
  if (action.type === 'SIGNOUT_REQUEST') {
      // for all keys defined in your persistConfig(s)
      storage.removeItem('persist:root')
      // storage.removeItem('persist:otherKey')

      return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      // immutableCheck: { warnAfter: 128 },
      // serializableCheck: { warnAfter: 128 },

      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authService.middleware,
      propService.middleware,
      googleService.middleware
    ),

})

export let persistor = persistStore(store)

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export * from './slices/authSlice';
