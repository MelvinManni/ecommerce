import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../assets/jss/colors';

export default function CustomInput({
  icon: Icon,
  helper,
  iconName: name,
  onChange,
  onBlur,
  secureTextEntry,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[{marginBottom: 15}, containerStyle]}>
      <View style={styles.wrapper}>
        {Icon && (
          <Icon
            name={name}
            style={[
              styles.icon,
              focus && styles.focusIcon,
              helper && styles.errorIcon,
            ]}
          />
        )}
        <TextInput
          style={[
            styles.input,
            focus && styles.focus,
            Icon && styles.withIcon,
            helper ? styles.error : {},
            style,
          ]}
          placeholderTextColor={Colors.grey}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setFocus(false);
            onBlur !== undefined && onBlur();
          }}
          secureTextEntry={secureTextEntry}
          onChangeText={onChange}
          {...rest}
        />
      </View>
      {helper && <Text style={styles.helper}>{helper}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    borderRadius: 5,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.border_grey,
    padding: 10,
    fontSize: 15,
    fontFamily: 'Poppins',
    lineHeight: 24.6,
    letterSpacing: 0.5,
    color: Colors.tetiary,
    fontWeight: 'bold',
    minWidth: '100%',
    minHeight: 55,
  },
  focus: {
    borderColor: Colors.primary,
  },
  error: {
    borderColor: Colors.error,
  },
  errorIcon: {
    color: Colors.error,
  },
  withIcon: {
    paddingLeft: 36,
  },
  icon: {
    fontSize: 21,
    color: Colors.grey,
    position: 'absolute',
    zIndex: 3,
    left: 6,
  },
  focusIcon: {
    color: Colors.primary,
  },
  helper: {
    fontFamily: 'Poppins',
    lineHeight: 21.6,
    letterSpacing: 0.5,
    color: Colors.error,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
