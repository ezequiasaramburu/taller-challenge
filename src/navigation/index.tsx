import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigation} from '../navigation/tabNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};
