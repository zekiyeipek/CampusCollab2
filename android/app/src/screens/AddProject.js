import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';

const AddProject = () => {
  return (
    <View style={styles.addProjectPageParent}>
      <View style={[styles.addProjectPage, styles.images1IconPosition]}>
        <View style={[styles.frame3Container, styles.images1IconPosition]}>
          <Image
            style={styles.images1IconPosition}
            resizeMode="cover"
            source={require('../assets/Background.png')}
          />
          <View
            style={[styles.frame3ContainerChild, styles.frame3ContainerLayout]}
          />
          <View
            style={[styles.frame3ContainerItem, styles.frame3ContainerLayout]}
          />
          <Text
            style={[
              styles.projectNameHistory,
              styles.projectTypo,
            ]}>{`Project Name
              History
              Project duration
              Project team`}</Text>
          <Text
            style={[
              styles.projectNameHistory1,
              styles.projectTypo,
            ]}>{`Project Name
            History
            Project duration
            Project team`}</Text>
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
              style={[styles.leftSideIcon, styles.iconPosition1]}
              resizeMode="cover"
              source={require('../assets/left-side.png')}
            />
          </View>
          <View
            style={[styles.frame3ContainerInner, styles.frame3ContainerLayout]}
          />
          <Image
            style={[styles.image6Icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require('../assets/image_6.png')}
          />
          <Text style={styles.projects}>Projects</Text>
          <Text
            style={[styles.projectNameHistory2, styles.projectTypo]}
            numberOfLines={4}>{`Project Name
History
Project duration
Project team`}</Text>
          <View style={styles.image4Parent}>
            <Image
              style={styles.image4Icon}
              resizeMode="cover"
              source={require('../assets/image_41.png')}
            />
            <Text style={styles.addProject}>ADD PROJECT</Text>
          </View>
          <View style={[styles.rectangleView, styles.frame3ContainerLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  images1IconPosition: {
    width: 414,
    left: 0,
    top: 0,
    position: 'absolute',
    height: 731,
  },
  frame3ContainerLayout: {
    height: 101,
    width: 331,
    borderWidth: 1,
    borderColor: Color.colorGray_900,
    borderStyle: 'solid',
    backgroundColor: Color.colorGray_1000,
    borderRadius: Border.br_3xs,
    left: 33,
    position: 'absolute',
  },
  projectTypo: {
    height: 82,
    width: 326,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: Color.colorGray_300,
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_mini_2,
    left: 37,
    position: 'absolute',
  },
  iconPosition: {
    display: 'none',
    position: 'absolute',
  },
  iconPosition1: {
    left: 33,
    position: 'absolute',
  },
  frame3ContainerChild: {
    top: 348,
  },
  frame3ContainerItem: {
    top: 349,
  },
  projectNameHistory: {
    top: 355,
  },
  projectNameHistory1: {
    top: 477,
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
    top: 17,
    right: 22,
    width: 67,
    height: 11,
    position: 'absolute',
  },
  leftSideIcon: {
    top: 12,
    width: 54,
    height: 21,
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
  frame3ContainerInner: {
    top: 224,
  },
  image6Icon: {
    top: 98,
    width: 71,
    height: 73,
  },
  projects: {
    top: 195,
    left: 35,
    fontWeight: '500',
    fontFamily: FontFamily.outfitMedium,
    textAlign: 'left',
    color: Color.colorGray_300,
    fontSize: FontSize.size_mini_2,
    position: 'absolute',
  },
  projectNameHistory2: {
    top: 226,
    overflow: 'hidden',
  },
  image4Icon: {
    width: 38,
    height: 39,
  },
  addProject: {
    fontSize: FontSize.size_mini,
    color: Color.darkAllContent,
    width: 126,
    height: 42,
    marginLeft: 8.89,
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.outfitRegular,
    textAlign: 'left',
  },
  image4Parent: {
    top: 615,
    borderRadius: 89,
    backgroundColor: Color.colorGhostwhite,
    width: 207,
    height: 52,
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 4,
    left: 37,
    overflow: 'hidden',
    position: 'absolute',
  },
  rectangleView: {
    top: 473,
  },
  frame3Container: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.greyLight,
    overflow: 'hidden',
  },
  addProjectPage: {
    backgroundColor: Color.baseWhite,
    overflow: 'hidden',
  },
  addProjectPageParent: {
    flex: 1,
    height: 731,
    width: '100%',
  },
});

export default AddProject;
