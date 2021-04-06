import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../assets/jss/colors';
import Typography from '../Typography';

export default function ProductSizeSelect({setSize, sizes}) {
  const [selected, setSelected] = useState({
    value: '',
    tag: null,
  });

  useEffect(() => {
    setSize(selected.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const renderItem = ({item, index}) => {
    <TouchableOpacity onPress={() => setSelected({value: item, tag: index})}>
      <View
        style={[
          styles.sizeContainer,
          selected.tag === index && styles.selected,
        ]}>
        <Typography weight="bold" size={14} height={21}>
          {item}
        </Typography>
      </View>
    </TouchableOpacity>;
  };

  return (
    <View style={styles.container}>
      <Typography style={styles.title} size={14} height={21} weight="bold">
        Select Size
      </Typography>
      <FlatList
        data={sizes}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    paddingVertical: 5,
  },
  title: {
    marginBottom: 10,
  },
  sizeContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 15,
    borderWidth: 1,
    borderColor: Colors.border_grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderColor: Colors.primary,
  },
});
