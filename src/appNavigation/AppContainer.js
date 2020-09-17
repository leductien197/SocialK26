import React, { useEffect } from 'react';
import { Button, View, Text, BackHandler, Alert } from 'react-native';
import NavigationService from './NavigationService';
import TopLevelNavigator from './Router';

// // màn này hỗ trợ chuyển màn hình giữa 2 stack con (stack 1 có a,b,c stack 2 có d,e,f thì nếu chuyển a-> d có lúc sẽ lỗi nên mới dùng file này để fix)


export default function AppContainer() {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    }
  }, [])

  const handleBackButton = () => {
     Alert.alert('Bạn có chắc thoát ứng dụng không?')
    return true;
  }

  return (
    <TopLevelNavigator
      refs={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
  )
}
