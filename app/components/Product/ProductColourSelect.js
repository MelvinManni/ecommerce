import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../assets/jss/colors';
import Typography from '../Typography';

export default function ProductColourSelect({setColour, colours}) {
  const [selected, setSelected] = useState({
    value: '',
    tag: null,
  });

  useEffect(() => {
    setColour(selected.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const renderItem = ({item, index}) => {
    <TouchableOpacity onPress={() => setSelected({value: item, tag: index})}>
      <View style={[styles.sizeContainer, {backgroundColor: item}]}>
        {selected.tag === index && <View style={styles.selected} />}
      </View>
    </TouchableOpacity>;
  };

  return (
    <View style={styles.container}>
      <Typography style={styles.title} size={14} height={21} weight="bold">
        Select Colour
      </Typography>
      <FlatList
        data={colours}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: Colors.white,
    borderColor: Colors.border_grey,
    borderWidth: 1,
  },
});
