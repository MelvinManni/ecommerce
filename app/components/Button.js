/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../assets/jss/colors';
import Typography from './Typography';

export default function Button({
  loading,
  icon,
  imageIcon,
  outline,
  block,
  children,
  icon: Icon,
  iconPosition: position,
  iconColor: color,
  onPress,
  style,
  iconName: name,
  ...rest
}) {
  const positionArr = ['left', 'right'];

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
      activeOpacity={0.8}>
      {icon && (
        <Icon
          name={name}
          style={[
            styles.icon,
            positionArr.includes(position) ? {[position]: 16} : {right: 16},
            {
              color:
                color && Colors[color] !== undefined
                  ? Colors[color]
                  : Colors.white,
            },
          ]}
        />
      )}
      {imageIcon && (
        <Image
          style={[
            styles.imageIcon,
            positionArr.includes(position) ? {[position]: 16} : {right: 16},
          ]}
          source={imageIcon}
        />
      )}
      {loading ? (
        <ActivityIndicator
          color={outline ? Colors.grey : Colors.white}
          size="small"
        />
      ) : (
        <Typography
          color={outline ? 'grey' : 'white'}
          weight="bold"
          size={14}
          height={25}>
          {children}
        </Typography>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 5,
    padding: 15,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 55,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.border_grey,
    elevation: 0,
  },
  icon: {
    position: 'absolute',
    fontSize: 24,
  },
  imageIcon: {
    position: 'absolute',
    maxWidth: 18,
  },
});
