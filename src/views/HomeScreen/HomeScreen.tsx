import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './HomeScreen.styles';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>HomeScreen Content</Text>
      <Button
        title="Go to Screen One"
        onPress={() => navigation.navigate('ScreenOne')}
      />
    </View>
  );
};
