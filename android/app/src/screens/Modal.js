import * as React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const Modal = () => {
  const navigation = useNavigation();

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked2, setIsChecked2] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);
  const [lastClickedCheckbox, setLastClickedCheckbox] = React.useState(null);

  const handleCheckboxToggle = checkboxNumber => {
    setLastClickedCheckbox(checkboxNumber);
    switch (checkboxNumber) {
      case 1:
        setIsChecked1(!isChecked1);
        setIsChecked2(false);
        setIsChecked3(false);
        break;
      case 2:
        setIsChecked2(!isChecked2);
        setIsChecked1(false);
        setIsChecked3(false);
        break;
      case 3:
        setIsChecked3(!isChecked3);
        setIsChecked1(false);
        setIsChecked2(false);
        break;
      default:
        break;
    }
  };

  const handleConfirm = () => {
    if (lastClickedCheckbox !== null) {
      switch (lastClickedCheckbox) {
        case 1:
          navigation.navigate('RegisterForStudents');
          break;
        case 2:
          navigation.navigate('RegisterForCompany');
          break;
        case 3:
          navigation.navigate('RegisterForAdvisors');
          break;
        default:
          break;
      }
    } else {
      // Navigate to default screen when no checkbox is clicked
      navigation.navigate('DefaultScreen');
    }
  };

  const handleCancel = () => {
    navigation.navigate('Login'); // Navigate to SignIn screen when cancel is clicked
  };

  return (
    <View style={styles.frame1ContainerParent}>
      <View style={[styles.frame1Container, styles.images1IconPosition]}>
        <Image
          style={[styles.images1Icon, styles.images1IconPosition]}
          resizeMode="cover"
          source={require('../assets/Background.png')}
        />
        <View style={styles.imageWrapper}>
          <View style={[styles.modalHeaderContainer, styles.paddingWhite]}>
            <Image
              style={[styles.modalHeader]}
              resizeMode="cover"
              source={require('../assets/Modal-header.png')}
            />
            {/* Checkbox Container with Padding */}
            <View style={[styles.modalContent, styles.paddingWhite]}>
              <TouchableOpacity
                style={[styles.checkboxContainer, styles.paddingHorizontal]}
                onPress={() => handleCheckboxToggle(1)}>
                <View style={[styles.checkbox, isChecked1 && styles.checked]} />
                <Text style={styles.checkboxText}>Student</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.checkboxContainer, styles.paddingHorizontal]}
                onPress={() => handleCheckboxToggle(2)}>
                <View style={[styles.checkbox, isChecked2 && styles.checked]} />
                <Text style={styles.checkboxText}>Company</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.checkboxContainer, styles.paddingHorizontal]}
                onPress={() => handleCheckboxToggle(3)}>
                <View style={[styles.checkbox, isChecked3 && styles.checked]} />
                <Text style={styles.checkboxText}>Advisor</Text>
              </TouchableOpacity>
            </View>
            {/* Modal Actions with Padding */}
            <View style={[styles.modalActions, styles.paddingWhite]}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.cancelButton,
                  styles.paddingHorizontal,
                ]}
                onPress={handleCancel}>
                <Image
                  style={[styles.button, styles.cancelButton]}
                  resizeMode="cover"
                  source={require('../assets/CancelButton.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.confirmButton,
                  styles.paddingHorizontal,
                ]}
                onPress={handleConfirm}>
                <Image
                  style={[styles.button, styles.confirmButton]}
                  resizeMode="cover"
                  source={require('../assets/ConfirmButton.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Image
          style={[styles.eyePasswordIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/eye_password.png')}
        />
        <Image
          style={[styles.frame1ContainerChild, styles.frame1ContainerLayout]}
          resizeMode="cover"
          source={require('../assets/rectangle-2.png')}
        />
        <Text style={[styles.enterYourPassword, styles.enterTypo]}>
          Enter Your Password
        </Text>
        <View style={styles.frame1ContainerItem} />
        <Text style={[styles.enterYourEmail, styles.enterTypo]}>
          Enter Your Email
        </Text>
        <Image
          style={[styles.frame1ContainerInner, styles.frame1ContainerLayout]}
          resizeMode="cover"
          source={require('../assets/rectangle-35.png')}
        />
        <Text style={[styles.forgotPassword, styles.signupTypo1]}>
          Forgot Password?
        </Text>
        <Text style={styles.buttonLogin}>Login</Text>
        <Text style={[styles.dontHaveAn, styles.orTypo]}>
          {'Don’t have an account? '}
        </Text>
        <Text style={[styles.signup, styles.signupTypo]}>Signup</Text>
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
          source={require('../assets/image-8.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    elevation: 10,
    padding: 20,
    position: 'absolute', // Set position to absolute
    top: 100, // Position it at the top of the parent container
    left: 0, // Align it to the left of the parent container
    zIndex: 999, // Set a high z-index value to ensure it's rendered above other elements
    backgroundColor: Color.baseWhite, // Set white background color
  },
  modalHeaderContainer: {
    marginBottom: 20,
  },
  paddingWhite: {
    padding: 10,
    color: Color.baseWhite, // Added white padding of 10px
  },
  paddingHorizontal: {
    paddingHorizontal: 10, // Added horizontal padding of 10px
  },
  modalHeader: {
    marginBottom: 20,
  },

  modalContent: {
    marginBottom: 20,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    marginRight: 10,
  },

  checked: {
    backgroundColor: Color.colorGray_900,
  },

  checkboxText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },

  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: Color.colorGray_700,
  },

  confirmButton: {
    backgroundColor: Color.colorDarkslateblue,
  },

  buttonText: {
    color: Color.baseWhite,
    fontWeight: 'bold',
  },

  confirmButtonText: {
    color: Color.baseWhite,
  },
  images1IconPosition: {
    left: 0,
    top: 0,
    position: 'absolute',
    height: 731,
  },
  modalImage: {
    width: 400, // Adjust width as needed
    height: 400, // Adjust height as needed
    top: 200,
    elevation: 10,
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
    color: Color.colorGray_800,
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
    color: Color.colorGray_700,
    fontSize: FontSize.textSmMedium_size,
    textAlign: 'left',
    position: 'absolute',
  },
  signupTypo: {
    top: 531,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  rectangleViewLayout: {
    backgroundColor: Color.colorGray_600,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    borderStyle: 'solid',
    height: 48,
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
    backgroundColor: Color.colorGray_1000,
    width: 313,
    height: 49,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    borderStyle: 'solid',
    borderRadius: Border.br_3xs,
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
    top: 602,
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
    color: Color.colorGray_700,
  },
  image10Icon: {
    top: 51,
    left: 143,
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
});

export default Modal;
