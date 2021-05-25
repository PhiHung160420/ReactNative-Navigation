import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SplashScreen from './SplashScreen';

const rootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  return (
    <rootStack.Navigator>
      <rootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: '#009387'},
        }}
      />
      <rootStack.Screen name="SignInScreen" component={SignInScreen} />
      <rootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </rootStack.Navigator>
  );
};

export default RootStackScreen;
