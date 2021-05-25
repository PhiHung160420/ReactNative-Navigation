import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import Button from 'react-native-button';

const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Detail Screen</Text>
      <Button onPress={() => navigation.push('Detail')}>
        Go to detail screen... again
      </Button>
      <Button onPress={() => navigation.navigate('Home')}>Go to home</Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popToTop()}>
        Go to the first screen
      </Button>
    </View>
  );
};

export default DetailScreen;
