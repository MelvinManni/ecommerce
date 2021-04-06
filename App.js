import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import navigation from './app/navigation/navigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerTitle: false,
          headerShown: false,
        })}
        initialRouteName="Splash">
        {navigation.map((item, index) => (
          <Stack.Screen
            name={item.name}
            key={index.toString()}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
