/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../assets/jss/colors';

export default function IconBtn({
  loading,
  icon,
  imageIcon,
  outline,
  block,
  icon: Icon,
  iconColor: color,
  onPress,
  style,
  iconStyle,
  iconName: name,
  ...rest
}) {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        outline && styles.outline,
        block && {minWidth: '100%'},
        style,
      ]}
      onPress={onPress}
      disabled={loading}
      {...rest}
      activeOpacity={0.7}>
      {loading ? (
        <ActivityIndicator
          color={outline ? Colors.grey : Colors.white}
          size="small"
        />
      ) : (
        <>
          {icon ? (
            <Icon
              name={name}
              style={[
                styles.icon,
                {
                  color:
                    color && Colors[color] !== undefined
                      ? Colors[color]
                      : Colors.grey,
                },
                iconStyle,
              ]}
            />
          ) : imageIcon ? (
            <Image style={[styles.imageIcon, iconStyle]} source={imageIcon} />
          ) : null}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.black,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 55,
    marginTop: 0,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.border_grey,
    elevation: 0,
  },
  icon: {
    fontSize: 23,
  },
  imageIcon: {
    // maxWidth: 18,
  },
});
