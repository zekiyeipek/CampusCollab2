import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const CreateCompanyProfile = () => {
  return (
    <View style={styles.signupForCompaniesParent}>
      <View style={[styles.signupForCompanies, styles.signupPosition]}>
        <View
          style={[styles.signupForCompaniesContainer, styles.signupPosition]}>
          <Image
            style={styles.signupPosition}
            resizeMode="cover"
            source={require('../assets/Background.png')}
          />
          <Image
            style={[styles.eyePasswordIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/eye_password.png')}
          />
          <Image
            style={[
              styles.signupForCompaniesContainerChild,
              styles.signupContainerLayout2,
            ]}
            resizeMode="cover"
            source={require('../assets/rectangle-2.png')}
          />
          <Text style={[styles.enterContactInformation, styles.enterTypo]}>
            {'Enter Contact Information '}
          </Text>
          <View
            style={[
              styles.signupForCompaniesContainerItem,
              styles.signupContainerLayout1,
            ]}
          />
          <Text style={[styles.enterCompanyName, styles.enterPosition]}>
            Enter Company Name
          </Text>
          <Text style={[styles.enterCompanyEMail, styles.enterPosition]}>
            Enter Company E-mail
          </Text>
          <Image
            style={[
              styles.signupForCompaniesContainerInner,
              styles.signupContainerLayout2,
            ]}
            resizeMode="cover"
            source={require('../assets/rectangle-2.png')}
          />
          <Text style={[styles.buttonLogin, styles.orTypo]}>Signup</Text>
          <Text style={[styles.alreadyHaveAn, styles.orClr]}>
            {'Already have an account? '}
          </Text>
          <Text style={[styles.login, styles.loginTypo1]}>Login</Text>
          <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
          <Text style={[styles.loginWithGoogle, styles.loginTypo]}>
            Login with Google
          </Text>
          <Image
            style={[styles.googleLogoIcon, styles.enterPosition]}
            resizeMode="cover"
            source={require('../assets/google_logo.png')}
          />
          <View
            style={[
              styles.signupForCompaniesContainerChild1,
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
              source={require('../assets/image-1.png')}
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
                source={require('../assets/left-side.png')}
              />
            </View>
            <Image
              style={styles.leftSideIcon}
              resizeMode="cover"
              source={require('../assets/left-side.png')}
            />
          </View>
          <Text style={[styles.bannerLoginWelcome, styles.orClr]}>
            Signup for Companies
          </Text>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View
            style={[
              styles.signupForCompaniesContainerChild2,
              styles.lineViewLayout,
            ]}
          />
          <Text style={[styles.or, styles.orClr]}>Or</Text>
          <View
            style={[
              styles.signupForCompaniesContainerChild3,
              styles.signupContainerLayout1,
            ]}
          />
          <Text style={[styles.enterAddressInformation, styles.enterPosition]}>
            {'Enter Address Information '}
          </Text>
          <View
            style={[
              styles.signupForCompaniesContainerChild4,
              styles.signupContainerLayout,
            ]}
          />
          <Text
            style={[styles.companyRegistrationNumber, styles.enterPosition]}>
            Company Registration Number
          </Text>
          <View
            style={[
              styles.signupForCompaniesContainerChild5,
              styles.signupContainerLayout,
            ]}
          />
          <Text style={[styles.enterYourPassword, styles.enterTypo]}>
            Enter Your Password
          </Text>
          <View
            style={[
              styles.signupForCompaniesContainerChild6,
              styles.signupContainerLayout1,
            ]}
          />
          <Image
            style={styles.image8Icon}
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
    left: 67,
    position: 'absolute',
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
    top: 468,
    left: 324,
    height: 24,
  },
  signupForCompaniesContainerChild: {
    top: 359,
    width: 312,
    borderRadius: Border.br_3xs,
    left: 51,
    height: 39,
  },
  enterContactInformation: {
    top: 366,
    left: 68,
    position: 'absolute',
  },
  signupForCompaniesContainerItem: {
    top: 213,
  },
  enterCompanyName: {
    top: 223,
    textAlign: 'left',
    color: Color.colorGray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  enterCompanyEMail: {
    top: 271,
    textAlign: 'left',
    color: Color.colorGray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  signupForCompaniesContainerInner: {
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
    color: Color.Black,
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
  },
  signupForCompaniesContainerChild1: {
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
    top: 172,
    left: 70,
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    fontFamily: FontFamily.poppinsBold,
    textAlign: 'center',
  },
  lineView: {
    left: 43,
  },
  signupForCompaniesContainerChild2: {
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
  signupForCompaniesContainerChild3: {
    top: 309,
  },
  enterAddressInformation: {
    top: 319,
    textAlign: 'left',
    color: Color.colorGray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  signupForCompaniesContainerChild4: {
    top: 411,
  },
  companyRegistrationNumber: {
    top: 421,
    textAlign: 'left',
    color: Color.colorGray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  signupForCompaniesContainerChild5: {
    top: 461,
  },
  enterYourPassword: {
    top: 471,
    left: 66,
    position: 'absolute',
  },
  signupForCompaniesContainerChild6: {
    top: 261,
  },
  image8Icon: {
    top: 51,
    left: 161,
    width: 103,
    height: 103,
    position: 'absolute',
  },
  signupForCompaniesContainer: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.greyLight,
    overflow: 'hidden',
  },
  signupForCompanies: {
    backgroundColor: Color.baseWhite,
    overflow: 'hidden',
  },
  signupForCompaniesParent: {
    flex: 1,
    height: 731,
    width: '100%',
  },
});

export default CreateCompanyProfile;
