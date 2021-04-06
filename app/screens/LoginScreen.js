import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CustomInput from '../components/CustomInput';
import Typography from '../components/Typography';
import Wrapper from '../components/Wrapper';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';
import Colors from '../assets/jss/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LoginScreen({navigation}) {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email address is required')
      .email('Please enter a valid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password cannot be less than 6 characters'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      navigation.navigate('App');
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
    <Wrapper style={styles.container}>
      <View style={styles.textContainer}>
        <Image source={require('../assets/images/logox96.png')} />
        <Typography style={styles.title} weight="bold" size={16} height={24}>
          Welcome to FreeStore
        </Typography>
        <Typography color="grey" size={12} height={21}>
          Sign in to continue
        </Typography>
      </View>

      <View>
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
      </View>
      <Button onPress={handleSubmit} block>
        Login
      </Button>

      <View style={[styles.lineContainer, styles.row]}>
        <View style={styles.line} />
        <Typography
          color="grey"
          style={styles.or}
          weight="bold"
          size={14}
          height={21}>
          OR
        </Typography>
        <View style={styles.line} />
      </View>

      <View style={styles.mb}>
        <Button
          imageIcon={require('../assets/icons/google.png')}
          iconPosition="left"
          outline
          // onPress={handleSubmit}
          block
          style={styles.mbSm}>
          Login with Google
        </Button>
        <Button
          imageIcon={require('../assets/icons/facebook.png')}
          iconPosition="left"
          outline
          // onPress={handleSubmit}
          block>
          Login with facebook
        </Button>
      </View>

      <View>
        <TouchableOpacity style={styles.mbSm}>
          <Typography
            align="center"
            weight="bold"
            color="secondary"
            size={12}
            height={18}>
            Forgot Password?
          </Typography>
        </TouchableOpacity>
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
  container: {alignItems: 'center'},
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineContainer: {
    marginVertical: 20,
  },
  or: {
    marginHorizontal: 10,
  },
  line: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.border_grey,
    width: '35%',
  },
  mb: {
    marginBottom: 15,
  },
  mbSm: {
    marginBottom: 8,
  },
});
