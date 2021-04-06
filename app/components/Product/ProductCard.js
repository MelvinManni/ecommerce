/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import StarRating from 'react-native-star-rating';
import Colors from '../../assets/jss/colors';
import IconBtn from '../IconButton';
import Typography from '../Typography';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function ProductCard({
  image,
  title,
  rating,
  price,
  discount,
  prevPrice,
  off,
  removeFavourite,
  style,
}) {
  const handleStringcount = (val = '') => {
    if (val.length < 28) {
      return val;
    } else {
      return val.substring(0, 30) + '...';
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={image} />
      <Typography
        style={!rating && styles.mb}
        weight="bold"
        size={12}
        height={18}>
        {handleStringcount(title)}
      </Typography>
      {rating && (
        <View style={styles.rating}>
          <StarRating
            containerStyle={{justifyContent: 'flex-start'}}
            starSize={14}
            fullStarColor={Colors.warning}
            disabled={true}
            rating={rating}
            maxStars={5}
          />
        </View>
      )}
      <View>
        <Typography color="secondary" weight="bold" size={12} height={18}>
          ${price}
        </Typography>
        {discount && (
          <View style={styles.discountContainer}>
            <Typography
              style={styles.prevPrice}
              color="grey"
              weight="normal"
              size={10}
              height={15}>
              ${prevPrice}
            </Typography>
            <Typography color="error" weight="bold" size={10} height={15}>
              {off}% off
            </Typography>
            {removeFavourite && (
              <IconBtn
                style={styles.favourite}
                outline
                iconColor="red"
                icon={MaterialIcon}
                iconName="favorite"
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.border_grey,
    borderRadius: 5,
    padding: 10,
  },
  image: {
    width: '100%',
    marginBottom: 8,
    height: 133,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prevPrice: {
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  rating: {
    marginTop: 5,
    marginBottom: 15,
  },
  mb: {
    marginBottom: 15,
  },
  favourite: {
    padding: 0,
    minHeight: 30,
    borderWidth: 0,
    marginLeft: 'auto',
  },
});
