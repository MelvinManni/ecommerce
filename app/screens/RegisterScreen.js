import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CustomInput from '../components/CustomInput';
import Typography from '../components/Typography';
import Wrapper from '../components/Wrapper';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RegisterScreen({navigation}) {
  const validationSchema = Yup.object().shape({
    lastName: Yup.string().required('Last name is required'),
    firstName: Yup.string().notRequired(),
    email: Yup.string()
      .required('Email address is required')
      .email('Please enter a valid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password cannot be less than 6 characters'),
    confirmPassword: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: () => {
      console.log('');
      //   navigation.navigate('Register');
    },
  });

  const {
    errors,
    values,
    touched,
    setFieldTouched,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <Wrapper scroll style={styles.container}>
      <View style={styles.textContainer}>
        <Image source={require('../assets/images/logox96.png')} />
        <Typography style={styles.title} weight="bold" size={16} height={24}>
          Let’s Get Started
        </Typography>
        <Typography color="grey" size={12} height={21}>
          Create an new account
        </Typography>
      </View>

      <View>
        <CustomInput
          icon={Icon}
          iconName="person-outline"
          value={values.firstname}
          placeholder="First Name"
          onChange={handleChange('firstName')}
        />

        <CustomInput
          icon={Icon}
          iconName="person-outline"
          value={values.lastName}
          placeholder="Last Name"
          onChange={handleChange('lastName')}
          onBlur={() => setFieldTouched('lastName', true)}
          helper={
            errors.lastName && touched.lastName ? errors.lastName : undefined
          }
        />

        <CustomInput
          icon={Icon}
          iconName="mail-outline"
          value={values.email}
          placeholder="Email Address"
          onChange={handleChange('email')}
          onBlur={() => setFieldTouched('email', true)}
          helper={errors.email && touched.email ? errors.email : undefined}
        />

        <CustomInput
          icon={Icon}
          iconName="lock-outline"
          value={values.password}
          placeholder="Password"
          secureTextEntry={true}
          onChange={handleChange('password')}
          onBlur={() => setFieldTouched('password', true)}
          helper={
            errors.password && touched.password ? errors.password : undefined
          }
        />

        <CustomInput
          icon={Icon}
          iconName="lock-outline"
          value={values.confirmPassword}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChange={handleChange('confirmPassword')}
          onBlur={() => setFieldTouched('confirmPassword', true)}
          helper={
            errors.confirmPassword && touched.confirmPassword
              ? errors.confirmPassword
              : undefined
          }
        />
      </View>
      <Button style={styles.mb} onPress={handleSubmit} block>
        Login
      </Button>

      <View>
        <View style={styles.row}>
          <Typography color="grey" size={12} height={18}>
            Don't have an account?{' '}
          </Typography>
          <TouchableOpacity>
            <Typography weight="bold" color="secondary" size={12} height={18}>
              Register
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', paddingBottom: 20},
  image: {
    marginBottom: 15,
  },
  textContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mb: {
    marginBottom: 25,
  },
});
