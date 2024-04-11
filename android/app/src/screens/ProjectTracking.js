import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';

const ProjectTracking = () => {
  return (
    <View style={styles.projectTracking}>
      <Image
        style={[styles.images1Icon, styles.images1IconPosition]}
        resizeMode="cover"
        source={require('../assets/Background.png')}
      />
      <Image
        style={[styles.projectTrackingChild, styles.images1IconPosition]}
        resizeMode="cover"
        source={require('../assets/rectangle-35.png')}
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
      <View style={styles.projectTrackingItem} />
      <View style={styles.projectTrackingInner} />
      <Text style={[styles.projectTracking1, styles.projectTracking1Typo]}>
        Project Tracking
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.projectChildLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-2.png')}
      />
      <Image
        style={[styles.projectTrackingChild1, styles.projectChildLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-2.png')}
      />
      <Image
        style={[styles.projectTrackingChild2, styles.projectChildLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-2.png')}
      />
      <Image
        style={[styles.projectTrackingChild3, styles.projectChildLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-2.png')}
      />
      <Image
        style={[styles.projectTrackingChild4, styles.projectChildLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-2.png')}
      />
      <Image
        style={[styles.projectTrackingChild5, styles.projectChildLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-2.png')}
      />
      <Text
        style={[
          styles.startupPhaseRequirementsContainer,
          styles.projectTracking1Typo,
        ]}>
        <Text style={styles.startupPhaseRequirementsPha}>{`Startup Phase
Requirements Phase
Design Phase
Implementation Phase
Test Phase
Evaluation Phase
`}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  images1IconPosition: {
    top: 1,
    position: 'absolute',
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
  projectTracking1Typo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    position: 'absolute',
  },
  projectChildLayout: {
    width: 23,
    height: 21,
    position: 'absolute',
  },
  images1Icon: {
    left: -28,
    width: 442,
    height: 731,
  },
  projectTrackingChild: {
    left: 2,
    borderRadius: Border.br_8xs,
    width: 412,
    height: 67,
  },
  notchIcon: {
    top: -2,
    right: 101,
    bottom: 35,
    left: 101,
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
  },
  batteryIcon: {
    right: 0,
    width: 24,
    top: 0,
    height: 11,
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
    left: 0,
    borderRadius: Border.br_13xl,
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
    color: Color.baseWhite,
    width: 199,
    height: 36,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    position: 'absolute',
  },
  iphoneXOrNewer: {
    height: '8.62%',
    width: '101.69%',
    top: '-1.23%',
    right: '1.21%',
    bottom: '92.61%',
    left: '-2.9%',
    position: 'absolute',
    overflow: 'hidden',
  },
  projectTrackingItem: {
    top: -64,
    left: -55,
    backgroundColor: Color.colorGainsboro_300,
    width: 485,
    height: 800,
    position: 'absolute',
  },
  projectTrackingInner: {
    top: 144,
    left: 22,
    borderStyle: 'solid',
    borderColor: Color.colorGray_900,
    borderTopWidth: 1,
    width: 358,
    height: 1,
    position: 'absolute',
  },
  rectangleIcon: {
    top: 273,
    left: -19,
    width: 227,
    height: 39,
    position: 'absolute',
  },
  projectTracking1: {
    top: 106,
    left: 10,
    width: 256,
    height: 42,
    textAlign: 'center',
  },
  ellipseIcon: {
    top: 172,
    left: 48,
    width: 23,
  },
  projectTrackingChild1: {
    top: 223,
    left: 48,
    width: 23,
  },
  projectTrackingChild2: {
    top: 282,
    left: 48,
    width: 23,
  },
  projectTrackingChild3: {
    top: 336,
    left: 48,
    width: 23,
  },
  projectTrackingChild4: {
    top: 388,
    left: 48,
    width: 23,
  },
  projectTrackingChild5: {
    top: 447,
    left: 49,
  },
  startupPhaseRequirementsPha: {
    marginBottom: 20,
  },
  startupPhaseRequirementsContainer: {
    top: 161,
    left: 89,
    textAlign: 'left',
    width: 308,
    height: 368,
  },
  projectTracking: {
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
    overflow: 'hidden',
    height: 731,
  },
});

export default ProjectTracking;
