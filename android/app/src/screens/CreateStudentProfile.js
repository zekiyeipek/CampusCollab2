import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Color, FontFamily, Border, FontSize} from '../GlobalStyles';

const CreateStudentProfile = () => {
  return (
    <View style={styles.profileStudentParent}>
      <View style={[styles.profileStudent, styles.profilePosition]}>
        <View style={[styles.profileStudentContainer, styles.profilePosition]}>
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
          <View
            style={[styles.uploadPhotoWrapper, styles.image4ParentSpaceBlock]}>
            <Text style={styles.uploadTypo}>Upload Photo</Text>
          </View>
          <Image
            style={styles.image3Icon}
            resizeMode="cover"
            source={require('../assets/image-3.png')}
          />
          <View style={[styles.yourNameParent, styles.parentShadowBox]}>
            <Text style={[styles.yourName, styles.numberTypo]}>Your Name</Text>
            <View style={[styles.editContainer, styles.editLayout]}>
              <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
            </View>
            <Text style={[styles.dateOfBirth, styles.numberTypo]}>
              {' '}
              Date of Birth
            </Text>
            <View style={[styles.editFrame, styles.editFrameLayout]}>
              <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
            </View>
            <Text style={[styles.email, styles.numberTypo]}>
              <Text style={styles.text1}> </Text>
              <Text style={styles.numberTypo1}>Email</Text>
            </Text>
            <Text style={[styles.studentNumber, styles.numberTypo]}>
              Student Number
            </Text>
            <Text style={[styles.phoneNumber, styles.numberTypo]}>
              Phone Number
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
            <View style={[styles.image4Parent, styles.image4ParentSpaceBlock]}>
              <Image
                style={styles.image4Icon}
                resizeMode="cover"
                source={require('../assets/image-4.png')}
              />
              <Text style={[styles.uploadCv, styles.uploadTypo]}>
                Upload CV
              </Text>
            </View>
          </View>
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
    left: 29,
    overflow: 'hidden',
    position: 'absolute',
  },
  editLayout: {
    height: 16,
    width: 41,
    backgroundColor: Color.colorGhostwhite,
    borderRadius: 65,
    overflow: 'hidden',
    position: 'absolute',
  },
  editTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  frameLayout: {
    height: 19,
    width: 179,
    left: 77,
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
  image4ParentSpaceBlock: {
    paddingVertical: 4,
    paddingHorizontal: 14,
    flexDirection: 'row',
    borderRadius: 89,
    backgroundColor: Color.colorGhostwhite,
    overflow: 'hidden',
    position: 'absolute',
  },
  numberTypo: {
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
  uploadTypo: {
    height: 42,
    width: 126,
    alignItems: 'center',
    display: 'flex',
    fontSize: FontSize.size_mini,
    textAlign: 'left',
    color: Color.darkAllContent,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  edit: {
    marginTop: -3.6,
    marginLeft: -5.35,
    top: '50%',
    left: '50%',
    fontSize: FontSize.size_6xs_5,
    color: Color.darkAllContent,
    textAlign: 'left',
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
  },
  frameChild: {
    top: 41,
    width: 275,
    height: 114,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    left: 0,
    position: 'absolute',
  },
  frameItem: {
    top: 109,
  },
  frameInner: {
    top: 133,
  },
  image5Icon: {
    top: 107,
    left: 7,
    width: 65,
    height: 44,
    position: 'absolute',
  },
  frameParent: {
    top: 536,
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
  uploadPhotoWrapper: {
    top: 105,
    left: 239,
  },
  image3Icon: {
    top: 90,
    left: 36,
    width: 75,
    height: 71,
    position: 'absolute',
  },
  yourName: {
    top: 23,
    left: 14,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  editContainer: {
    top: 43,
    left: 227,
  },
  dateOfBirth: {
    top: 66,
    fontFamily: FontFamily.outfitRegular,
    left: 14,
  },
  editFrame: {
    top: 81,
  },
  text1: {
    fontFamily: FontFamily.outfitRegular,
  },
  numberTypo1: {
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  email: {
    top: 104,
    left: 14,
  },
  studentNumber: {
    top: 143,
    left: 13,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '500',
  },
  phoneNumber: {
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
  image4Icon: {
    width: 36,
    height: 32,
  },
  uploadCv: {
    marginLeft: 8.89,
  },
  image4Parent: {
    top: 234,
    width: 152,
    height: 46,
    left: 14,
  },
  yourNameParent: {
    top: 194,
    height: 326,
  },
  profileStudentContainer: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.greyLight,
    overflow: 'hidden',
  },
  profileStudent: {
    backgroundColor: Color.baseWhite,
    overflow: 'hidden',
  },
  profileStudentParent: {
    flex: 1,
    height: 731,
    width: '100%',
  },
});

export default CreateStudentProfile;
