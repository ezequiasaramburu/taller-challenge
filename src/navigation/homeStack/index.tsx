import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../views/HomeScreen';
import {ScreenOne} from '../../views/ScreenOne';
import {ScreenTwo} from '../../views/ScreenTwo';

const Stack = createNativeStackNavigator();

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
