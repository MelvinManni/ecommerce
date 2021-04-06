/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import Colors from '../assets/jss/colors';

export default function Typography({
  children,
  color,
  size,
  weight,
  style,
  align,
  height,
  spacing,
  ...rest
}) {
  const alignArray = ['left', 'auto', 'center', 'justify', 'right'];
  const weightArray = [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    'bold',
    'normal',
  ];
  const fontFamily = {
    ['100']: 'Poppins-Thin',
    ['200']: 'Poppins-ExtraLight',
    ['300']: 'Poppins-Light',
    ['400']: 'Poppins-Regular',
    ['500']: 'Poppins-Medium',
    ['600']: 'Poppins-SemiBold',
    ['700']: 'Poppins-Bold',
    ['bold']: 'Poppins-Bold',
    ['normal']: 'Poppins-Regular',
  };

  return (
    <Text
      style={[
        {
          fontFamily:
            weight && weightArray.includes(weight)
              ? fontFamily[weight]
              : fontFamily['normal'],
          fontWeight:
            weight && weightArray.includes(weight) ? weight : 'normal',
          textAlign: align && alignArray.includes(align) ? align : 'left',
          fontSize: size && Number(size) ? Number(size) + 4 : 16,
          lineHeight: height && Number(height) ? Number(height) + 4 : 22.6,
          letterSpacing: spacing && Number(spacing) ? Number(spacing) : 0.5,
          color:
            color && Colors[color] !== undefined
              ? Colors[color]
              : Colors.tetiary,
        },
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
}
