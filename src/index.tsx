import React, { useEffect } from 'react';
import {I18nManager, StatusBar} from 'react-native';
import Screens from './navigation';
import './localization/index';
import {COLORS} from './constants/theme';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {

  useEffect(()=>{
    I18nManager.forceRTL(true);
  })
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Screens />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
