import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';
import FilePickerManager from 'react-native-file-picker'; // Import the document picker
import {DatePickerAndroid} from 'react-native';
const RegisterForAdvisors = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [cvFile, setCvFile] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = () => {
    navigation.navigate('Login'); // Replace 'Login' with the name of your login screen component
  };

  const handleUploadCV = () => {
    FilePickerManager.showFilePicker(null, response => {
      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.log('File picker error:', response.error);
      } else {
        // Set the selected file to state
        setCvFile(response);
      }
    });
  };

  const showDatePicker = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(),
        mode: 'spinner', // Change the mode as needed
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        setDateOfBirth(selectedDate);
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };

  return (
    <View style={styles.signupForStudentsParent}>
      <View style={[styles.signupForStudents, styles.signupPosition]}>
        <View
          style={[styles.signupForStudentsContainer, styles.signupPosition]}>
          <Image
            style={styles.signupPosition}
            resizeMode="cover"
            source={require('../assets/Background.png')}
          />
          <Text style={[styles.bannerLoginWelcome, styles.orClr]}>
            Signup for Advisors
          </Text>
          <TextInput
            style={[
              styles.signupForStudentsContainerItem,
              styles.enterPosition,
            ]}
            placeholder="Enter Your Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={[styles.enterYourEMail, styles.enterPosition]}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.enterStudentNumber, styles.enterPosition]}
            placeholder="Enter Your Student Number"
            value={studentNumber}
            onChangeText={setStudentNumber}
          />
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={[styles.enterDateOf, styles.enterPosition]}>
              {dateOfBirth
                ? dateOfBirth.toLocaleDateString()
                : 'Select Date of Birth'}
            </Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.enterYourPassword, styles.enterPosition]}
            placeholder="Enter Your Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              style={[styles.eyePasswordIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/eye_password.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleUploadCV}>
            <View style={[styles.uploadYourCv, styles.enterPosition]}>
              <Text>{cvFile ? cvFile.fileName : 'Upload Your CV'}</Text>
            </View>
          </TouchableOpacity>
          <Image
            style={[
              styles.signupForStudentsContainerInner,
              styles.signupContainerLayout2,
            ]}
            resizeMode="cover"
            source={require('../assets/rectangle-35.png')}
          />
          <Text style={[styles.buttonLogin, styles.orTypo]}>Signup</Text>
          <Text style={[styles.alreadyHaveAn, styles.orClr]}>
            {'Already have an account? '}
          </Text>
          <TouchableOpacity onPress={handleLoginClick}>
            <Text style={[styles.login, styles.loginTypo1]}>Login</Text>
          </TouchableOpacity>
          <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
          <Text style={[styles.loginWithGoogle, styles.loginTypo]}>
            Login with Google
          </Text>
          <Image
            style={[styles.googleLogoIcon, styles.googleLogoIcon]}
            resizeMode="cover"
            source={require('../assets/google_logo.png')}
          />
          <View
            style={[
              styles.signupForStudentsContainerChild1,
              styles.rectangleViewLayout,
            ]}
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
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View
            style={[
              styles.signupForStudentsContainerChild2,
              styles.lineViewLayout,
            ]}
          />
          <Text style={[styles.or, styles.orClr]}>Or</Text>
          <Image
            style={styles.image9Icon}
            resizeMode="cover"
            source={require('../assets/image-8.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupPosition: {
    width: 414,
    left: 0,
    top: 0,
    position: 'absolute',
    height: 731,
  },
  iconLayout: {
    width: 24,
    position: 'absolute',
  },
  signupContainerLayout2: {
    height: 39,
    position: 'absolute',
  },
  enterTypo: {
    textAlign: 'left',
    color: Color.colorGray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  signupContainerLayout1: {
    height: 40,
    width: 313,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    borderStyle: 'solid',
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_3xs,
    left: 51,
    position: 'absolute',
  },
  enterPosition: {
    left: 50,
    position: 'absolute',
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    borderRadius: 10,
    height: 40,
    width: 313,
  },
  orTypo: {
    fontSize: FontSize.textSmMedium_size,
    textAlign: 'left',
  },
  orClr: {
    color: Color.colorGray_700,
    position: 'absolute',
  },
  loginTypo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    top: 561,
    fontSize: FontSize.textSmMedium_size,
    textAlign: 'left',
  },
  rectangleViewLayout: {
    backgroundColor: Color.colorGray_600,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    borderStyle: 'solid',
    height: 39,
    width: 312,
    borderRadius: Border.br_3xs,
    left: 51,
    position: 'absolute',
  },
  loginTypo: {
    left: 144,
    color: Color.colorGray_700,
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
    borderColor: Color.colorGray_1100,
    top: 598,
    borderStyle: 'solid',
    position: 'absolute',
  },
  signupContainerLayout: {
    left: 52,
    height: 40,
    width: 313,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    borderStyle: 'solid',
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_3xs,
    position: 'absolute',
  },
  eyePasswordIcon: {
    top: 428,
    left: 324,
    height: 24,
  },
  signupForStudentsContainerChild: {
    top: 359,
    width: 312,
    borderRadius: Border.br_3xs,
    left: 51,
    height: 39,
  },
  enterDateOf: {
    top: 372,
    left: 78,
    position: 'absolute',
  },
  signupForStudentsContainerItem: {
    top: 213,
  },
  enterYourFull: {
    top: 223,
    textAlign: 'left',
    color: Color.colorGray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  enterYourEMail: {
    top: 271,
    textAlign: 'left',
    color: Color.colorGray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  signupForStudentsContainerInner: {
    top: 513,
    borderRadius: Border.br_8xs,
    width: 250,
    left: 87,
  },
  buttonLogin: {
    top: 522,
    left: 185,
    fontWeight: '600',
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.baseWhite,
    position: 'absolute',
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    top: 561,
    fontSize: FontSize.textSmMedium_size,
    textAlign: 'left',
    left: 87,
  },
  login: {
    left: 288,
    color: Color.colorDarkslateblue,
    position: 'absolute',
  },
  rectangleView: {
    top: 617,
  },
  loginWithGoogle: {
    top: 624,
  },
  googleLogoIcon: {
    top: 623,
    width: 26,
    height: 26,
    left: 65,
  },
  signupForStudentsContainerChild1: {
    top: 670,
  },
  loginWithLinkedin: {
    top: 681,
  },
  image1Icon: {
    top: 674,
    left: 65,
    width: 31,
    height: 33,
    position: 'absolute',
  },
  notchIcon: {
    top: -2,
    right: 98,
    bottom: 17,
    left: 97,
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
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
  },
  bannerLoginWelcome: {
    top: 165,
    left: 70,
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    fontFamily: FontFamily.poppinsBold,
    textAlign: 'center',
  },
  lineView: {
    left: 43,
  },
  signupForStudentsContainerChild2: {
    left: 213,
  },
  or: {
    top: 583,
    left: 190,
    fontSize: FontSize.textSmMedium_size,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_700,
  },
  signupForStudentsContainerChild3: {
    top: 309,
  },
  enterStudentNumber: {
    top: 319,
    textAlign: 'left',
    color: Color.colorGray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  signupForStudentsContainerChild4: {
    top: 411,
  },
  enterYourPassword: {
    top: 421,
    textAlign: 'left',
    color: Color.colorGray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  signupForStudentsContainerChild5: {
    top: 461,
  },
  uploadYourCv: {
    top: 471,
    left: 66,
    position: 'absolute',
  },
  signupForStudentsContainerChild6: {
    top: 261,
  },
  image9Icon: {
    top: 51,
    left: 153,
    width: 103,
    height: 103,
    position: 'absolute',
  },
  signupForStudentsContainer: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.greyLight,
    overflow: 'hidden',
  },
  signupForStudents: {
    backgroundColor: Color.baseWhite,
    overflow: 'hidden',
  },
  signupForStudentsParent: {
    flex: 1,
    height: 731,
    width: '100%',
  },
});

export default RegisterForAdvisors;
