import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, Text, View} from 'react-native';
import Button from 'react-native-button';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text, fontSize: 25}}>Home Screen</Text>
      <Button
        containerStyle={{
          backgroundColor: 'green',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 10,
        }}
        style={{color: 'white', fontSize: 20}}
        onPress={() => navigation.navigate('Detail')}>
        Go to detail screen
      </Button>
    </View>
  );
};

export default HomeScreen;
