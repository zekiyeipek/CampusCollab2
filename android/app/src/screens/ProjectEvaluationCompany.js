import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Color, FontFamily, Border, FontSize} from '../GlobalStyles';

const ProjectEvaluationCompany = () => {
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
        <Text style={[styles.campuscollab, styles.submitTypo]}>
          CAMPUSCOLLAB
        </Text>
      </View>
      <View style={styles.projectEvaluationItem} />
      <View style={styles.projectEvaluationInner} />
      <Text style={[styles.projectEvaluation1, styles.teamMember1Clr]}>
        Project Evaluation
      </Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require('../assets/rectangle-36.png')}
      />
      <View style={[styles.teamMember1Parent, styles.teamParentLayout]}>
        <Text style={[styles.teamMember1, styles.teamMember1Clr]}>
          Team Member 1
        </Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require('../assets/group-6.png')}
        />
      </View>
      <View style={[styles.teamMember2Parent, styles.teamParentLayout]}>
        <Text style={[styles.teamMember1, styles.teamMember1Clr]}>
          Team Member 2
        </Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require('../assets/group-6.png')}
        />
      </View>
      <View style={[styles.teamMember3Parent, styles.teamParentLayout]}>
        <Text style={[styles.teamMember1, styles.teamMember1Clr]}>
          Team Member 3
        </Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require('../assets/group-6.png')}
        />
      </View>
      <View style={[styles.teamMember4Parent, styles.teamParentLayout]}>
        <Text style={[styles.teamMember1, styles.teamMember1Clr]}>
          Team Member 4
        </Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require('../assets/group-6.png')}
        />
      </View>
      <View style={[styles.teamMember5Parent, styles.teamParentLayout]}>
        <Text style={[styles.teamMember1, styles.teamMember1Clr]}>
          Team Member 5
        </Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require('../assets/group-6.png')}
        />
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
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
  submitTypo: {
    textAlign: 'center',
    color: Color.baseWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    position: 'absolute',
  },
  teamMember1Clr: {
    color: Color.colorBlack,
    textAlign: 'center',
    position: 'absolute',
  },
  teamParentLayout: {
    height: 78,
    width: 340,
    left: 34,
    position: 'absolute',
    overflow: 'hidden',
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
    fontSize: FontSize.size_5xl,
    color: Color.baseWhite,
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
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
  },
  rectangleIcon: {
    top: 134,
    left: 500,
    width: 353,
    height: 192,
    position: 'absolute',
  },
  teamMember1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    width: 199,
    left: 0,
    top: 0,
  },
  frameChild: {
    top: 42,
    left: 46,
    width: 248,
    height: 20,
    position: 'absolute',
  },
  teamMember1Parent: {
    top: 179,
  },
  teamMember2Parent: {
    top: 272,
  },
  teamMember3Parent: {
    top: 365,
  },
  teamMember4Parent: {
    top: 458,
  },
  teamMember5Parent: {
    top: 551,
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
    fontSize: FontSize.textMdSemibold_size,
    width: 63,
    height: 22,
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

export default ProjectEvaluationCompany;
