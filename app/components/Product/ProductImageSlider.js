import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Colors from '../../assets/jss/colors';

const windowWidth = Dimensions.get('screen').width;

export default function ProductImageSlider({images}) {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SalesScreen')}
            style={styles.sliderView}
            activeOpacity={0.9}>
            <Image style={styles.sliderImage} source={item} />
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth * 0.9}
        itemWidth={windowWidth * 0.9}
        autoplay={true}
        autoplayInterval={2200}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeIndex}
        carouselRef={carouselRef}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderView: {
    width: '100%',
  },
  sliderImage: {
    width: '100%',
    borderRadius: 5,
  },
  paginationContainer: {
    paddingTop: 15,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
    backgroundColor: Colors.primary,
  },
});
