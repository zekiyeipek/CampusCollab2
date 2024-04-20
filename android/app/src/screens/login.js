import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Navigate to the dashboard page
    navigation.navigate('Dashboard'); // Replace 'Dashboard' with the name of your dashboard screen
  };
  const handleSignup = () => {
    // Navigate to the modal page for signup
    navigation.navigate('Modal'); // Replace 'SignupModal' with the name of your modal screen
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.frame1ContainerParent}>
      <View style={[styles.frame1Container, styles.images1IconPosition]}>
        <Image
          style={[styles.images1Icon, styles.images1IconPosition]}
          resizeMode="cover"
          source={require('../assets/Background.png')}
        />
        <View style={styles.frame1ContainerItem} />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={[styles.eyePasswordIcon, styles.iconLayout]}
          onPress={toggleShowPassword}>
          <Image
            resizeMode="cover"
            source={require('../assets/eye_password.png')}
          />
        </TouchableOpacity>
        <Image
          style={[styles.frame1ContainerInner, styles.frame1ContainerLayout]}
          resizeMode="cover"
          source={require('../assets/rectangle-35.png')}
        />
        <Text style={[styles.forgotPassword, styles.signupTypo1]}>
          Forgot Password?
        </Text>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={[styles.dontHaveAn, styles.orTypo]}>
          {'Don’t have an account? '}
        </Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={[styles.signup, styles.signupTypo]}>Signup</Text>
        </TouchableOpacity>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Text style={[styles.loginWithGoogle, styles.loginTypo]}>
          Login with Google
        </Text>
        <Image
          style={styles.googleLogoIcon}
          resizeMode="cover"
          source={require('../assets/google_logo.png')}
        />
        <View
          style={[styles.frame1ContainerChild1, styles.rectangleViewLayout]}
        />
        <Text style={[styles.loginWithLinkedin, styles.loginTypo]}>
          Login with Linkedin
        </Text>
        <Image
          style={styles.image1Icon}
          resizeMode="cover"
          source={require('../assets/image-1.png')}
        />
        <View style={styles.iphoneXOrNewer}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require('../assets/battery.png')}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/battery.png')}
            />
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require('../assets/wifi.png')}
            />
            <Image
              style={styles.mobileSignalIcon}
              resizeMode="cover"
              source={require('../assets/mobile-signal.png')}
            />
            <Image
              style={[styles.recordingIndicatorIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require('../assets/battery.png')}
            />
          </View>
          <Image
            style={styles.leftSideIcon}
            resizeMode="cover"
            source={require('../assets/left-side.png')}
          />
        </View>
        <Text style={styles.bannerLoginWelcome}>{'Welcome '}</Text>
        <View style={styles.frame1ContainerChild2} />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={[styles.frame1ContainerChild3, styles.lineViewLayout]} />
        <Text style={[styles.or, styles.orTypo]}>Or</Text>
        <Image
          style={styles.image10Icon}
          resizeMode="cover"
          source={require('../assets/image-11.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 315,
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Color.colorGray_700,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 25,
    marginBottom: -5,
    top: 250,
    left: 50,
  },
  images1IconPosition: {
    left: 0,
    top: 0,
    position: 'absolute',
    height: 731,
  },
  iconLayout: {
    width: 24,
    position: 'absolute',
  },
  frame1ContainerLayout: {
    height: 48,
    width: 312,
    left: 51,
    position: 'absolute',
  },
  enterTypo: {
    textAlign: 'left',
    color: Color.colorGray_700,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    left: 67,
    position: 'absolute',
  },
  signupTypo1: {
    color: Color.colorDarkslateblue,
    fontSize: FontSize.textSmMedium_size,
    textAlign: 'left',
    position: 'absolute',
  },
  orTypo: {
    color: Color.colorGray_800,
    fontSize: FontSize.textSmMedium_size,
    textAlign: 'left',
    position: 'absolute',
  },
  signupTypo: {
    top: 390,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  rectangleViewLayout: {
    backgroundColor: Color.colorGray_1100,
    borderWidth: 1,
    borderColor: Color.colorGray_1000,
    borderStyle: 'solid',
    height: 48,
    width: 312,
    borderRadius: 10, // Increase the borderRadius value for a more cylindrical appearance
    left: 51,
    position: 'absolute',
  },
  loginTypo: {
    left: 144,
    color: Color.colorGray_800,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    fontSize: FontSize.textSmMedium_size,
    textAlign: 'left',
    position: 'absolute',
  },
  iconPosition: {
    display: 'none',
    position: 'absolute',
  },
  lineViewLayout: {
    height: 1,
    width: 140,
    borderTopWidth: 1,
    borderColor: Color.colorGray_900,
    borderStyle: 'solid',
    position: 'absolute',
  },
  images1Icon: {
    width: 414,
  },
  eyePasswordIcon: {
    top: 358,
    left: 324,
    height: 24,
  },
  frame1ContainerChild: {
    top: 346,
    borderRadius: Border.br_3xs,
    height: 48,
    width: 312,
    left: 51,
  },
  enterYourPassword: {
    top: 361,
  },
  frame1ContainerItem: {
    top: 277,
    backgroundColor: Color.colorGray_600,
    width: 313,
    height: 49,
    left: 51,
    position: 'absolute',
  },
  enterYourEmail: {
    top: 292,
  },
  frame1ContainerInner: {
    top: 458,
    borderRadius: Border.br_8xs,
    height: 48,
    width: 312,
    left: 51,
  },
  forgotPassword: {
    top: 412,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    color: Color.colorDarkslateblue,
    left: 148,
  },
  buttonLogin: {
    top: 470,
    left: 188,
    fontWeight: '600',
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.baseWhite,
    fontSize: FontSize.textSmMedium_size,
    textAlign: 'left',
    position: 'absolute',
  },
  dontHaveAn: {
    left: 87,
    top: 531,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  signup: {
    left: 270,
    color: Color.colorDarkslateblue,
    fontSize: FontSize.textSmMedium_size,
    textAlign: 'left',
    position: 'absolute',
  },
  rectangleView: {
    top: 593,
  },
  loginWithGoogle: {
    top: 605,
  },
  googleLogoIcon: {
    top: 604,
    width: 26,
    height: 26,
    left: 67,
    position: 'absolute',
  },
  frame1ContainerChild1: {
    top: 655,
  },
  loginWithLinkedin: {
    top: 669,
  },
  image1Icon: {
    top: 663,
    left: 65,
    width: 31,
    height: 33,
    position: 'absolute',
  },
  notchIcon: {
    top: -2,
    right: 108,
    bottom: 17,
    left: 107,
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
  },
  batteryIcon: {
    right: 0,
    height: 11,
    top: 0,
    width: 24,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
  },
  rightSide: {
    top: 17,
    right: 22,
    width: 67,
    height: 11,
    position: 'absolute',
  },
  leftSideIcon: {
    top: 12,
    left: 33,
    width: 54,
    height: 21,
    position: 'absolute',
  },
  iphoneXOrNewer: {
    height: '6.16%',
    top: '0%',
    right: '0%',
    bottom: '93.84%',
    left: '0%',
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
  },
  bannerLoginWelcome: {
    top: 206,
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_100,
    textAlign: 'center',
    left: 148,
    position: 'absolute',
  },
  frame1ContainerChild2: {
    top: -59,
    left: 19,
    backgroundColor: Color.colorGainsboro_300,
    width: 360,
    height: 800,
    position: 'absolute',
  },
  lineView: {
    top: 572,
    left: 43,
  },
  frame1ContainerChild3: {
    top: 571,
    left: 216,
  },
  or: {
    top: 561,
    left: 190,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_800,
  },
  image10Icon: {
    top: 51,
    left: 150,
    width: 103,
    height: 103,
    position: 'absolute',
  },
  frame1Container: {
    backgroundColor: Color.greyLight,
    width: 434,
    overflow: 'hidden',
  },
  frame1ContainerParent: {
    backgroundColor: Color.baseWhite,
    flex: 1,
    overflow: 'hidden',
    height: 731,
    width: '100%',
  },
  buttonText: {
    color: Color.baseWhite, // Change text color to white
    fontSize: FontSize.textSmMedium_size,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
  },
});

export default Login;
