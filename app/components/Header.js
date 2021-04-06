import React from 'react';
import {StyleSheet, View} from 'react-native';
import IconBtn from './IconButton';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/jss/colors';
import {useNavigation} from '@react-navigation/native';
import Typography from './Typography';

export default function Header({title, search, menu}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <IconBtn
          onPress={() => navigation.goBack()}
          outline
          icon={Ionicons}
          style={styles.backButton}
          iconName="chevron-back"
        />
        <Typography weight="bold" size={16} height={24}>
          {title}
        </Typography>
      </View>
      <View style={styles.rowContainer}>
        {search && (
          <IconBtn
            style={styles.buttons}
            outline
            icon={FeatherIcon}
            iconName="search"
          />
        )}
        {menu && (
          <IconBtn
            style={styles.buttons}
            outline
            icon={MaterialCommunityIcon}
            iconName="dots-vertical"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  buttons: {
    borderWidth: 0,
    padding: 5,
    marginLeft: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 20,
    borderWidth: 0,
  },
});
