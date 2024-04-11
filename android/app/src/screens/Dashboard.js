import * as React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';

const Dashboard = () => {
  const navigation = useNavigation(); // Access the navigation object

  const navigateToDashboardSidebar = () => {
    navigation.navigate('DashboardSideBar');
  };
  return (
    <View style={[styles.images1Parent, styles.images1ParentLayout]}>
      <Image
        style={[styles.images1Icon, styles.frameChildPosition]}
        resizeMode="cover"
        source={require('../assets/Background.png')}
      />
      <Image
        style={[styles.frameChild, styles.frameChildPosition]}
        resizeMode="cover"
        source={require('../assets/rectangle-35.png')}
      />
      <View style={[styles.iphoneXOrNewer, styles.images1ParentLayout]}>
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
        <Text style={[styles.campuscollab, styles.profileTypo]}>
          CAMPUSCOLLAB
        </Text>
        <TouchableOpacity
          onPress={navigateToDashboardSidebar}
          style={styles.iphoneXOrNewerChild}>
          <Image
            style={styles.iphoneXOrNewerChildImage}
            resizeMode="cover"
            source={require('../assets/ellipse-1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToDashboardSidebar}
          style={styles.iphoneXOrNewerItem}>
          <Image
            style={styles.iphoneXOrNewerItemImage}
            resizeMode="cover"
            source={require('../assets/line-4.png')}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.frameItem}
        resizeMode="cover"
        source={require('../assets/rectangle-8.png')}
      />
      <Text style={styles.createTeam}>Dashboard</Text>
      <Image
        style={[styles.frameInner, styles.frameInnerPosition]}
        resizeMode="cover"
        source={require('../assets/line-3.png')}
      />
      <View style={[styles.rectangleView, styles.companiesPosition]} />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require('../assets/rectangle-34.png')}
      />
      <Text style={styles.search}>Search</Text>
      <View style={styles.frameView} />
    </View>
  );
};

const styles = StyleSheet.create({
  images1ParentLayout: {
    width: '100%',
    overflow: 'hidden',
  },
  frameChildPosition: {
    width: 414,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  iconPosition: {
    display: 'none',
    position: 'absolute',
  },
  profileTypo: {
    color: Color.baseWhite,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
  },
  frameInnerPosition: {
    left: 19,
    position: 'absolute',
  },
  companiesPosition: {
    left: 238,
    position: 'absolute',
  },
  images1Icon: {
    height: 731,
  },
  frameChild: {
    borderRadius: Border.br_8xs,
    height: 74,
  },
  notchIcon: {
    top: -2,
    right: 98,
    bottom: 54,
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
    width: 199,
    height: 36,
    textAlign: 'center',
    position: 'absolute',
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
  iphoneXOrNewer: {
    height: '11.22%',
    top: '-1.09%',
    right: '0.72%',
    bottom: '89.88%',
    left: '-0.72%',
    position: 'absolute',
    overflow: 'hidden',
  },
  frameItem: {
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
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    position: 'absolute',
  },
  frameInner: {
    top: 129,
    width: 376,
    height: 0,
  },
  rectangleView: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.baseWhite,
    borderStyle: 'solid',
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 138,
    height: 19,
    top: 117,
  },
  rectangleIcon: {
    left: 357,
    width: 16,
    height: 18,
    top: 117,
    position: 'absolute',
  },
  search: {
    top: 118,
    left: 246,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: 'center',
    position: 'absolute',
  },
  frameView: {
    top: 149,
    left: 92,
    width: 100,
    height: 100,
    position: 'absolute',
    overflow: 'hidden',
  },
  frameChild1: {
    top: 69,
    left: 229,
    width: 188,
    height: 709,
    position: 'absolute',
  },
  companies: {
    top: 210,
    textAlign: 'center',
    color: Color.baseWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
  },
  myProjects: {
    top: 259,
    left: 240,
    textAlign: 'center',
    position: 'absolute',
  },
  myTracking: {
    top: 304,
    left: 239,
    textAlign: 'center',
    position: 'absolute',
  },
  editProfile: {
    top: 109,
    textAlign: 'center',
    color: Color.baseWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
  },
  createTeam1: {
    top: 158,
    left: 231,
    textAlign: 'center',
    position: 'absolute',
  },
  settings: {
    top: 623,
    left: 269,
    textAlign: 'center',
    position: 'absolute',
  },
  logOut: {
    top: 672,
    left: 263,
    textAlign: 'center',
    position: 'absolute',
  },
  profile: {
    top: 574,
    left: 266,
    textAlign: 'center',
    position: 'absolute',
  },
  image8Icon: {
    top: 7,
    width: 61,
    height: 61,
  },
  images1Parent: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.greyLight,
    flex: 1,
    overflow: 'hidden',
    height: 731,
  },
});

export default Dashboard;
