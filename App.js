import React from 'react';
import {View, Text, Image} from 'react-native';
import LoginScreen from './src/screens/login/LoginScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import Item from './src/components/Item';
import RegisterScreen from './src/screens/register/RegisterScreen';
import CreatePost from './src/screens/createpost/CreatePost';
import Profile from './src/screens/profile/Profile';


//redux
import {applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

//set up redux
import allReducers from './src/reducers';
import {createStore} from 'redux';
import {
  REHYDRATE,
  PURGE,
  persistCombineReducers,
  persistStore,
  persistReducer,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import {PersistGate} from 'redux-persist/es/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //sẽ persist
  // whitelist: [
  //   'accountReducer'
  // ],
  //ko persist
  blacklist: [
    // 'late'
  ],
};

//redux persist : về cơ bản là store thứ 2 nằm giữa Reducers và Store lưu vị trí cố định và không bị mất khi reset app, web,
//__ trong cấu trúc code thì Persist bao Reduccers, Store bao Persist
// let reducer = persistCombineReducers(config, allReducers)
const persistedReducer = persistReducer(persistConfig, allReducers);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Profile />
      </PersistGate>
    </Provider>
  );
}
