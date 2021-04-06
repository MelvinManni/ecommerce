import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Wrapper from '../components/Wrapper';
import {products} from '../variables/products';
import ProductsDisplay from '../components/Product/ProductsDisplay';
import Header from '../components/Header';

export default function FavouriteScreen() {
  return (
    <SafeAreaView>
      <Header title="Favourite Products" />
      <Wrapper scroll style={styles.container}>
        <ProductsDisplay removeFavourite data={products} />
      </Wrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 170,
    justifyContent: 'flex-start',
  },
});
