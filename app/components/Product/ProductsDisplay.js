/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions} from 'react-native';
import ProductCard from './ProductCard';

const screenWidth = Dimensions.get('screen').width;

export default function ProductsDisplay({data, removeFavourite}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 25,
      }}>
      {Object.keys(data).length > 0 &&
        Object.keys(data).map(props => {
          const item = data[props];
          return (
            <ProductCard
              key={item.key}
              style={{width: screenWidth * 0.44, marginVertical: 8}}
              image={item.image}
              title={item.title}
              price={item.price}
              off={item.off}
              prevPrice={item.prevPrice}
              discount={item.discount}
              rating={item.rating}
              removeFavourite={removeFavourite}
            />
          );
        })}
    </View>
  );
}
