/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Colors from '../assets/jss/colors';

export default function Wrapper({children, scroll, style}) {
  return (
    <>
      {scroll ? (
        <ScrollView
          style={{minHeight: '100%', backgroundColor: '#fff'}}
          showsVerticalScrollIndicator={false}>
          <SafeAreaView style={[styles.wrapper, style]}>
            <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
            {children}
          </SafeAreaView>
        </ScrollView>
      ) : (
        <SafeAreaView style={[styles.wrapper, style]}>
          <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
          {children}
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    minHeight: '100%',
    minWidth: '100%',
  },
});
