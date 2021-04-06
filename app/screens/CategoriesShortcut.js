import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {shortcutCateegories} from '../variables/categories';
import IconBtn from '../components/IconButton';
import Typography from '../components/Typography';

export default function CategoriesShortcut() {
  const renderItem = ({item}) => (
    <View style={styles.iconWrapper}>
      <IconBtn style={styles.cartegoryIcon} outline imageIcon={item.icon} />
      <Typography size={10} align="center" height={15} color="grey">
        {item.title}
      </Typography>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Typography weight="700" size={14} height={21}>
          Category
        </Typography>
        <TouchableOpacity activeOpacity={0.7}>
          <Typography color="secondary" weight="700" size={14} height={21}>
            More Category
          </Typography>
        </TouchableOpacity>
      </View>
      <View style={styles.cartegoryIconContainer}>
        <FlatList
          data={shortcutCateegories}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
        />
      </View>
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
  cartegoryIconContainer: {
    paddingLeft: 3,
  },
  iconWrapper: {
    marginHorizontal: 3,
    alignItems: 'center',
    width: 80,
  },
  cartegoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 3,
  },
});
