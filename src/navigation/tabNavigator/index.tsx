import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from '../homeStack';
import {ContactScreen} from '../../views/ContactScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
