/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import CustomInput from '../components/CustomInput';
import Wrapper from '../components/Wrapper';
import IconBtn from '../components/IconButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Colors from '../assets/jss/colors';
import HomeSlider from '../components/HomeSlider';
import Categories from './CategoriesShortcut';
import SalesScroll from '../components/SalesScroll';
import {flashSale, megaSale, products} from '../variables/products';
import Typography from '../components/Typography';
import ProductsDisplay from '../components/Product/ProductsDisplay';

export default function HomeScreen({navigation}) {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <CustomInput
            icon={FeatherIcon}
            iconName="search"
            containerStyle={styles.search}
            value={search}
            onChange={val => setSearch(val)}
          />
        </View>
        <View style={styles.searchContainerButtons}>
          <IconBtn
            outline
            icon={Icon}
            onPress={() => navigation.navigate('FavouriteScreen')}
            style={styles.searchButtons}
            iconName="heart-o"
          />
          <IconBtn
            outline
            icon={Icon}
            style={styles.searchButtons}
            iconName="bell-o"
          />
        </View>
      </View>
      <Wrapper scroll style={styles.container}>
        <HomeSlider />
        <Categories />
        <SalesScroll data={flashSale} title="Flash Sale" />
        <SalesScroll data={megaSale} title="Mega Sale" />
        <View style={styles.recommendContainer}>
          <ImageBackground
            source={require('../assets/images/recommend-bg.png')}
            style={styles.recommend}>
            <View style={styles.recommendInner}>
              <Typography color="white" size={28} weight="bold" height={36}>
                Recomended
              </Typography>
              <Typography color="white" size={28} weight="bold" height={36}>
                Product
              </Typography>
              <Typography
                style={{marginTop: 15}}
                color="white"
                size={12}
                height={21}>
                We recommend the best for you
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border_grey,
    backgroundColor: Colors.white,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  searchInputContainer: {
    width: '68%',
  },
  searchContainerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButtons: {
    marginHorizontal: 1,
    borderWidth: 0,
  },
  search: {
    marginBottom: 0,
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
