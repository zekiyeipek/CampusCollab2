import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Color, FontFamily, Border, FontSize} from '../GlobalStyles';

const CreateProfile = () => {
  return (
    <View style={styles.profileCompanyParent}>
      <View style={[styles.profileCompany, styles.profilePosition]}>
        <View style={[styles.profileCompanyContainer, styles.profilePosition]}>
          <Image
            style={styles.profilePosition}
            resizeMode="cover"
            source={require('../assets/image-1.png')}
          />
          <View style={[styles.frameParent, styles.parentShadowBox]}>
            <View style={[styles.editWrapper, styles.editLayout]}>
              <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
            </View>
            <Text style={[styles.about, styles.editTypo]}>
              <Text style={styles.about1}>About</Text>
              <Text style={styles.text}> </Text>
            </Text>
            <View style={styles.frameChild} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
            <Image
              style={styles.image5Icon}
              resizeMode="cover"
              source={require('../assets/image-5.png')}
            />
          </View>
          <View style={styles.iphoneXOrNewer}>
            <Image
              style={[styles.notchIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require('../assets/battery.png')}
            />
            <View style={styles.rightSide}>
              <Image
                style={styles.batteryIcon}
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
          <View style={styles.uploadPhotoWrapper}>
            <Text style={[styles.uploadPhoto, styles.editTypo]}>
              Upload Photo
            </Text>
          </View>
          <View style={[styles.companyNameParent, styles.parentShadowBox]}>
            <Text style={[styles.companyName, styles.companyTypo]}>
              Company Name
            </Text>
            <View style={[styles.editContainer, styles.editLayout]}>
              <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
            </View>
            <Text style={[styles.companyEMail, styles.companyTypo]}>
              Company E-mail
            </Text>
            <View style={[styles.editFrame, styles.editFrameLayout]}>
              <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
            </View>
            <Text style={[styles.addressInformation, styles.companyTypo]}>
              <Text style={styles.text1}> </Text>
              <Text style={styles.companyTypo1}>Address Information</Text>
            </Text>
            <Text style={[styles.contactInformation, styles.companyTypo]}>
              Contact Information
            </Text>
            <Text style={[styles.registrationNumber, styles.companyTypo]}>
              Registration Number
            </Text>
            <View style={[styles.frameView, styles.editFrameLayout]}>
              <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
            </View>
            <View style={[styles.editWrapper1, styles.editFrameLayout]}>
              <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
            </View>
            <View style={[styles.editWrapper2, styles.editFrameLayout]}>
              <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
            </View>
            <View style={[styles.rectangleView, styles.frameChildLayout]} />
            <View style={[styles.frameChild1, styles.frameChildLayout]} />
            <View style={[styles.frameChild2, styles.frameChildLayout]} />
            <View style={[styles.frameChild3, styles.frameChildLayout]} />
            <View style={[styles.frameChild4, styles.frameChildLayout]} />
          </View>
          <Image
            style={styles.image6Icon}
            resizeMode="cover"
            source={require('../assets/image_6.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePosition: {
    width: 414,
    left: 0,
    top: 0,
    position: 'absolute',
    height: 731,
  },
  parentShadowBox: {
    width: 344,
    borderWidth: 0.9,
    borderColor: Color.colorGray_500,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 1.78,
    shadowRadius: 1.78,
    shadowOffset: {
      width: 0,
      height: 1.7777777910232544,
    },
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'absolute',
  },
  editLayout: {
    height: 16,
    width: 41,
    borderRadius: 65,
    backgroundColor: Color.colorGhostwhite,
    overflow: 'hidden',
    position: 'absolute',
  },
  editTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  frameLayout: {
    height: 19,
    width: 179,
    left: 83,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    position: 'absolute',
  },
  iconPosition: {
    display: 'none',
    position: 'absolute',
  },
  companyTypo: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_2xs_7,
    textAlign: 'left',
    position: 'absolute',
  },
  editFrameLayout: {
    left: 229,
    height: 16,
    width: 41,
    backgroundColor: Color.colorGhostwhite,
    borderRadius: 65,
    overflow: 'hidden',
    position: 'absolute',
  },
  frameChildLayout: {
    left: 8,
    height: 19,
    width: 179,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    position: 'absolute',
  },
  edit: {
    marginTop: -3.6,
    marginLeft: -5.35,
    top: '50%',
    left: '50%',
    fontSize: FontSize.size_6xs_5,
    color: Color.darkAllContent,
    textAlign: 'left',
    position: 'absolute',
  },
  editWrapper: {
    left: 241,
    top: 17,
  },
  about1: {
    color: Color.colorGray_300,
  },
  text: {
    color: Color.colorBlack,
  },
  about: {
    top: 16,
    fontSize: FontSize.size_mini_2,
    left: 14,
    position: 'absolute',
  },
  frameChild: {
    top: 41,
    left: 10,
    width: 275,
    height: 114,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    position: 'absolute',
  },
  frameItem: {
    top: 102,
  },
  frameInner: {
    top: 128,
  },
  image5Icon: {
    top: 99,
    left: 11,
    width: 65,
    height: 44,
    position: 'absolute',
  },
  frameParent: {
    top: 487,
    left: 29,
    height: 161,
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
    width: 24,
    height: 11,
    top: 0,
    position: 'absolute',
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
    right: 22,
    width: 67,
    height: 11,
    top: 17,
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
  uploadPhoto: {
    fontSize: FontSize.size_mini,
    display: 'flex',
    alignItems: 'center',
    width: 126,
    height: 42,
    color: Color.darkAllContent,
    textAlign: 'left',
  },
  uploadPhotoWrapper: {
    top: 105,
    left: 239,
    borderRadius: 89,
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 4,
    backgroundColor: Color.colorGhostwhite,
    overflow: 'hidden',
    position: 'absolute',
  },
  companyName: {
    top: 23,
    left: 14,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  editContainer: {
    top: 43,
    left: 227,
  },
  companyEMail: {
    top: 66,
    left: 14,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  editFrame: {
    top: 81,
  },
  text1: {
    fontFamily: FontFamily.outfitRegular,
  },
  companyTypo1: {
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  addressInformation: {
    top: 104,
    left: 14,
  },
  contactInformation: {
    top: 143,
    left: 13,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  registrationNumber: {
    top: 183,
    left: 14,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  frameView: {
    top: 120,
  },
  editWrapper1: {
    top: 159,
  },
  editWrapper2: {
    top: 199,
  },
  rectangleView: {
    top: 42,
  },
  frameChild1: {
    top: 81,
  },
  frameChild2: {
    top: 118,
  },
  frameChild3: {
    top: 158,
  },
  frameChild4: {
    top: 197,
  },
  companyNameParent: {
    top: 201,
    left: 24,
    height: 252,
  },
  image6Icon: {
    top: 94,
    left: 20,
    width: 71,
    height: 73,
    position: 'absolute',
  },
  profileCompanyContainer: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.greyLight,
    overflow: 'hidden',
  },
  profileCompany: {
    backgroundColor: Color.baseWhite,
    overflow: 'hidden',
  },
  profileCompanyParent: {
    flex: 1,
    height: 731,
    width: '100%',
  },
});

export default CreateProfile;
