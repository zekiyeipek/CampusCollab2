import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';

const ProjectEvaluationStudent = () => {
  return (
    <View style={styles.projectEvaluation}>
      <Image
        style={[styles.images1Icon, styles.timePosition]}
        resizeMode="cover"
        source={require('../assets/Background.png')}
      />
      <Image
        style={styles.projectEvaluationChild}
        resizeMode="cover"
        source={require('../assets/rectangle-3.png')}
      />
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
        <View style={[styles.leftSide, styles.timeLayout]}>
          <View style={[styles.time, styles.timeLayout]} />
        </View>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/left-side.png')}
        />
        <Text style={styles.campuscollab}>CAMPUSCOLLAB</Text>
      </View>
      <View style={styles.projectEvaluationItem} />
      <View style={styles.projectEvaluationInner} />
      <Text style={styles.projectEvaluation1}>Project Evaluation</Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require('../assets/rectangle-36.png')}
      />
      <View
        style={[
          styles.communicationWithTheCompanyParent,
          styles.availabilityParentLayout,
        ]}>
        <Text
          style={[
            styles.communicationWithThe,
            styles.communicationWithTheTypo,
          ]}>
          Communication with the company
        </Text>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require('../assets/group-6.png')}
        />
      </View>
      <View
        style={[
          styles.availabilityOfMentorsParent,
          styles.availabilityParentLayout,
        ]}>
        <Text
          style={[
            styles.availabilityOfMentors,
            styles.communicationWithTheTypo,
          ]}>
          Availability of mentors
        </Text>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require('../assets/group-6.png')}
        />
      </View>
      <View
        style={[
          styles.resourceAvailabilityParent,
          styles.availabilityParentLayout,
        ]}>
        <Text
          style={[
            styles.availabilityOfMentors,
            styles.communicationWithTheTypo,
          ]}>
          Resource Availability
        </Text>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require('../assets/group-6.png')}
        />
      </View>
      <View
        style={[
          styles.supportForProjectRelatedIsParent,
          styles.availabilityParentLayout,
        ]}>
        <Text
          style={[
            styles.supportForProjectRelated,
            styles.communicationWithTheTypo,
          ]}>
          Support for project-related issues
        </Text>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require('../assets/group-6.png')}
        />
      </View>
      <View style={styles.ethicalConsiderationsAndCorParent}>
        <Text
          style={[
            styles.ethicalConsiderationsAnd,
            styles.communicationWithTheTypo,
          ]}>
          Ethical Considerations and Corporate Responsibility
        </Text>
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          resizeMode="cover"
          source={require('../assets/group-6.png')}
        />
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.submit}>Submit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    left: 0,
    top: 0,
  },
  iconPosition: {
    display: 'none',
    position: 'absolute',
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: 'absolute',
  },
  availabilityParentLayout: {
    height: 78,
    width: 340,
    left: 34,
    position: 'absolute',
    overflow: 'hidden',
  },
  communicationWithTheTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.textMdSemibold_size,
    color: Color.colorBlack,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  frameChildLayout: {
    height: 20,
    width: 248,
    left: 46,
    position: 'absolute',
  },
  groupChildLayout: {
    height: 41,
    width: 118,
    position: 'absolute',
  },
  images1Icon: {
    width: 414,
    height: 770,
    position: 'absolute',
  },
  projectEvaluationChild: {
    top: 1,
    left: 2,
    borderRadius: Border.br_8xs,
    width: 412,
    height: 67,
    position: 'absolute',
  },
  notchIcon: {
    top: -2,
    right: 101,
    bottom: 36,
    left: 101,
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
    top: 17,
    right: 22,
    width: 67,
    height: 11,
    position: 'absolute',
  },
  time: {
    borderRadius: Border.br_13xl,
    left: 0,
    top: 0,
  },
  leftSide: {
    top: 12,
    left: 33,
  },
  icon: {
    top: 19,
    left: 286,
    width: 28,
    height: 11,
    position: 'absolute',
  },
  campuscollab: {
    top: 27,
    left: 76,
    height: 36,
    width: 199,
    textAlign: 'center',
    color: Color.baseWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    position: 'absolute',
  },
  iphoneXOrNewer: {
    height: '8.61%',
    width: '101.69%',
    top: '-1.23%',
    right: '1.21%',
    bottom: '92.61%',
    left: '-2.9%',
    position: 'absolute',
    overflow: 'hidden',
  },
  projectEvaluationItem: {
    top: -58,
    left: -36,
    backgroundColor: Color.colorGainsboro_300,
    width: 485,
    height: 800,
    position: 'absolute',
  },
  projectEvaluationInner: {
    top: 144,
    left: 22,
    borderStyle: 'solid',
    borderColor: Color.colorGray_900,
    borderTopWidth: 1,
    width: 358,
    height: 1,
    position: 'absolute',
  },
  projectEvaluation1: {
    top: 106,
    left: 10,
    width: 256,
    height: 42,
    color: Color.colorBlack,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    position: 'absolute',
  },
  rectangleIcon: {
    top: 134,
    left: 500,
    width: 353,
    height: 192,
    position: 'absolute',
  },
  communicationWithThe: {
    width: 350,
  },
  frameChild: {
    top: 42,
  },
  communicationWithTheCompanyParent: {
    top: 179,
  },
  availabilityOfMentors: {
    width: 199,
  },
  availabilityOfMentorsParent: {
    top: 272,
  },
  resourceAvailabilityParent: {
    top: 365,
  },
  supportForProjectRelated: {
    width: 294,
  },
  supportForProjectRelatedIsParent: {
    top: 458,
  },
  ethicalConsiderationsAnd: {
    width: 340,
  },
  frameChild1: {
    top: 58,
  },
  ethicalConsiderationsAndCorParent: {
    top: 551,
    height: 91,
    width: 340,
    left: 34,
    position: 'absolute',
    overflow: 'hidden',
  },
  groupChild: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorGold,
    left: 0,
    top: 0,
  },
  submit: {
    top: 10,
    left: 27,
    width: 63,
    height: 22,
    fontSize: FontSize.textMdSemibold_size,
    textAlign: 'center',
    color: Color.baseWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    position: 'absolute',
  },
  rectangleParent: {
    top: 666,
    left: 260,
  },
  projectEvaluation: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.greyLight,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: '100%',
    height: 742,
    overflow: 'hidden',
  },
});

export default ProjectEvaluationStudent;
