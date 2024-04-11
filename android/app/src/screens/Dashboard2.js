import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Border, Color, FontFamily, FontSize} from '../GlobalStyles';

const Dashboard2 = () => {
  return (
    <View style={styles.dashboardParent}>
      <View style={[styles.dashboard, styles.dashboardContainerPosition]}>
        <View
          style={[
            styles.dashboardContainer,
            styles.dashboardContainerPosition,
          ]}>
          <Image
            style={[styles.images1Icon, styles.dashboardContainerPosition]}
            resizeMode="cover"
            source={require('../assets/Background.png')}
          />
          <Image
            style={[
              styles.dashboardContainerChild,
              styles.dashboardContainerPosition,
            ]}
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
            <Image
              style={styles.leftSideIcon}
              resizeMode="cover"
              source={require('../assets/left-side.png')}
            />
            <Text style={[styles.campuscollab, styles.searchFlexBox]}>
              CAMPUSCOLLAB
            </Text>
            <Image
              style={styles.iphoneXOrNewerChild}
              resizeMode="cover"
              source={require('../assets/ellipse-1.png')}
            />
            <Image
              style={styles.iphoneXOrNewerItem}
              resizeMode="cover"
              source={require('../assets/line-4.png')}
            />
            <Image
              style={styles.image9Icon}
              resizeMode="cover"
              source={require('../assets/image-8.png')}
            />
          </View>
          <Image
            style={styles.dashboardContainerItem}
            resizeMode="cover"
            source={require('../assets/rectangle-8.png')}
          />
          <Text style={[styles.createTeam, styles.searchFlexBox]}>
            Dashboard
          </Text>
          <Image
            style={styles.dashboardContainerInner}
            resizeMode="cover"
            source={require('../assets/line-3.png')}
          />
          <View style={[styles.rectangleView, styles.rectanglePosition]} />
          <Image
            style={[styles.rectangleIcon, styles.rectanglePosition]}
            resizeMode="cover"
            source={require('../assets/rectangle-34.png')}
          />
          <Text style={[styles.search, styles.searchFlexBox]}>Search</Text>
          <View style={styles.frameView} />
          <View style={styles.dashboardContainerChild1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardContainerPosition: {
    width: 414,
    left: 0,
    position: 'absolute',
  },
  iconPosition: {
    display: 'none',
    position: 'absolute',
  },
  searchFlexBox: {
    textAlign: 'center',
    position: 'absolute',
  },
  rectanglePosition: {
    top: 137,
    position: 'absolute',
  },
  images1Icon: {
    top: 0,
    height: 731,
  },
  dashboardContainerChild: {
    top: -4,
    borderRadius: Border.br_8xs,
    height: 78,
  },
  notchIcon: {
    top: -2,
    right: 98,
    bottom: 46,
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
    top: 17,
    right: 22,
    width: 67,
    height: 11,
    position: 'absolute',
  },
  leftSideIcon: {
    top: 13,
    left: 272,
    width: 54,
    height: 21,
    position: 'absolute',
  },
  campuscollab: {
    top: 33,
    left: 87,
    color: Color.baseWhite,
    width: 199,
    height: 36,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    textAlign: 'center',
  },
  iphoneXOrNewerChild: {
    top: 40,
    left: 372,
    width: 29,
    height: 25,
    position: 'absolute',
  },
  iphoneXOrNewerItem: {
    top: 48,
    left: 378,
    width: 18,
    height: 10,
    position: 'absolute',
  },
  image9Icon: {
    top: 8,
    left: 16,
    width: 61,
    height: 61,
    position: 'absolute',
  },
  iphoneXOrNewer: {
    height: '10.12%',
    top: '0%',
    right: '0.72%',
    bottom: '89.88%',
    left: '-0.72%',
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
  },
  dashboardContainerItem: {
    top: -25,
    left: 32,
    width: 360,
    height: 800,
    position: 'absolute',
  },
  createTeam: {
    top: 91,
    left: 21,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    textAlign: 'center',
  },
  dashboardContainerInner: {
    top: 129,
    left: 19,
    width: 376,
    height: 0,
    position: 'absolute',
  },
  rectangleView: {
    left: 238,
    borderRadius: Border.br_26xl,
    borderStyle: 'solid',
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 138,
    height: 19,
    backgroundColor: Color.baseWhite,
  },
  rectangleIcon: {
    left: 357,
    width: 16,
    height: 18,
  },
  search: {
    top: 138,
    left: 246,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
  },
  frameView: {
    top: 224,
    left: 35,
    width: 363,
    height: 417,
    overflow: 'hidden',
    position: 'absolute',
  },
  dashboardContainerChild1: {
    top: 149,
    left: 92,
    width: 100,
    height: 100,
    overflow: 'hidden',
    position: 'absolute',
  },
  dashboardContainer: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.greyLight,
    overflow: 'hidden',
    top: 0,
    height: 731,
  },
  dashboard: {
    overflow: 'hidden',
    backgroundColor: Color.baseWhite,
    top: 0,
    height: 731,
  },
  dashboardParent: {
    flex: 1,
    height: 731,
    width: '100%',
  },
});

export default Dashboard2;
