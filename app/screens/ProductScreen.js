import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Wrapper from '../components/Wrapper';
import {products} from '../variables/products';
import ProductsDisplay from '../components/Product/ProductsDisplay';
import Header from '../components/Header';

export default function ProductScreen(props) {
  const product = props.route.params.item;
  return (
    <SafeAreaView>
      <Header title="Favourite Products" />
      <Wrapper scroll style={styles.container}>
          
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
