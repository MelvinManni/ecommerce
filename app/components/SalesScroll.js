/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ProductCard from './Product/ProductCard';
import Typography from './Typography';

const screenWidth = Dimensions.get('screen').width;

export default function SalesScroll({data, title, route}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Typography weight="700" size={14} height={21}>
          {title}
        </Typography>
        <TouchableOpacity activeOpacity={0.7}>
          <Typography color="secondary" weight="700" size={14} height={21}>
            See More
          </Typography>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ProductCard
            style={{width: screenWidth * 0.45, marginHorizontal: 5}}
            image={item.image}
            title={item.title}
            price={item.price}
            off={item.off}
            prevPrice={item.prevPrice}
            discount={item.discount}
            rating={item.rating}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginBottom: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
});
