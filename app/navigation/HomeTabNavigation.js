import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SalesScreen from '../screens/SalesScreen';
import FavouriteScreen from '../screens/FavouriteScreen';

const Stack = createStackNavigator();

const navigation = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
  },
  {
    name: 'SalesScreen',
    component: SalesScreen,
  },
  {
    name: 'FavouriteScreen',
    component: FavouriteScreen,
  },
];

const HomeTab = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTitle: false,
        headerShown: false,
      })}
      initialRouteName="HomeScreen">
      {navigation.map((item, index) => (
        <Stack.Screen
          name={item.name}
          key={index.toString()}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeTab;
