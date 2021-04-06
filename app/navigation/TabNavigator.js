import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RegisterScreen from '../screens/RegisterScreen';
import Colors from '../assets/jss/colors';
import {StyleSheet, Text, View} from 'react-native';
import HomeTab from './HomeTabNavigation';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.primary}
      labeled={true}
      screenOptions={{}}
      barStyle={styles.bar}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="search" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <View style={styles.cartContainer}>
              <View style={styles.cartCount}>
                <Text style={styles.countText}>0</Text>
              </View>
              <MaterialCommunityIcons
                name="cart-outline"
                color={color}
                size={25}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Offers',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="tag-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Colors.white,
  },
  cartContainer: {
    position: 'relative',
  },
  cartCount: {
    backgroundColor: Colors.primary,
    padding: 1,
    width: 22,
    height: 22,
    borderRadius: 11,
    position: 'absolute',
    top: -8,
    right: -12,
    zIndex: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    color: Colors.white,
    margin: 0,
    padding: 0,
    // bottom: 2,
    fontSize: 10,
  },
});
