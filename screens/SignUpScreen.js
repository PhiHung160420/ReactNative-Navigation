import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import {useTheme} from 'react-native-paper';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../components/AuthContext';
import {useContext} from 'react';

const SignUpScreen = ({navigation}) => {
  const {colors} = useTheme();
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
    secureConfirmTextEntry: true,
  });

  const signUp = useContext(AuthContext);

  const textInputChange = value => {
    if (value.length !== 0) {
      setData({
        ...data,
        email: value,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = value => {
    setData({
      ...data,
      password: value,
    });
  };

  const handleConfirmPasswordChange = value => {
    setData({
      ...data,
      confirmPassword: value,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateSecureConfirmTextEntry = () => {
    setData({
      ...data,
      secureConfirmTextEntry: !data.secureConfirmTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {backgroundColor: colors.background}]}>
        <Text style={[styles.text_footer, {color: colors.text}]}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={25} />
          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="Your Email"
            onChangeText={text => textInputChange(text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" size={25} color="green" />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, {marginTop: 10, color: colors.text}]}>
          Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.text} size={25} />
          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={text => handlePasswordChange}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Ionicons name="eye" size={25} color="green" />
            ) : (
              <Ionicons name="eye-off" size={25} color="green" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, {marginTop: 10, color: colors.text}]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.text} size={25} />
          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="Confirm Password"
            secureTextEntry={data.secureConfirmTextEntry ? true : false}
            onChangeText={text => handleConfirmPasswordChange(text)}
          />
          <TouchableOpacity onPress={updateSecureConfirmTextEntry}>
            {data.secureConfirmTextEntry ? (
              <Ionicons name="eye" size={25} color="green" />
            ) : (
              <Ionicons name="eye-off" size={25} color="green" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn}>
            <LinearGradient
              style={styles.signIn}
              colors={['#08d4c4', '#01ab9d']}>
              <Text style={styles.textSign}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.signIn,
              {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#009387',
                },
              ]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 20,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SignUpScreen;
