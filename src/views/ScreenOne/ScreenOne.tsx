import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './ScreenOne.styles';

export const ScreenOne = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>ScreenOne Content</Text>
      <Button
        title="Go to Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
    </View>
  );
};
