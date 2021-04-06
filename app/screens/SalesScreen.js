import React from 'react';
import {View, StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import Wrapper from '../components/Wrapper';
import {products} from '../variables/products';
import Typography from '../components/Typography';
import ProductsDisplay from '../components/Product/ProductsDisplay';
import Header from '../components/Header';

export default function SalesScreen() {
  return (
    <SafeAreaView>
      <Header search title="Mega Flash Sales" />
      <Wrapper scroll style={styles.container}>
        <View style={styles.recommendContainer}>
          <ImageBackground
            source={require('../assets/images/recommend-bg.png')}
            style={styles.recommend}>
            <View style={styles.recommendInner}>
              <Typography color="white" size={28} weight="bold" height={36}>
                Super Flash Sale
              </Typography>
              <Typography color="white" size={28} weight="bold" height={36}>
                50% Off
              </Typography>
            </View>
          </ImageBackground>
        </View>
        <ProductsDisplay data={products} />
      </Wrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 170,
    justifyContent: 'flex-start',
  },
  recommendContainer: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  recommend: {
    width: '100%',
    height: 205,
    justifyContent: 'center',
    marginBottom: 25,
    borderRadius: 5,
    overflow: 'hidden',
  },
  recommendInner: {
    padding: 15,
  },
});
