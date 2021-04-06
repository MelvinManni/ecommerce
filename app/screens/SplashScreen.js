import React, {useEffect, useRef} from 'react';
import {View, StatusBar, StyleSheet, Image, Animated} from 'react-native';
import Colors from '../assets/jss/colors';

export default function SplashScreen({navigation}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      tension: 13,
      friction: 3,
      useNativeDriver: true,
    }).start(() => navigation.replace('Login'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fadeAnim]);

  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo-darkx144.png')}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
