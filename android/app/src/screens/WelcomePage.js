import * as React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontSize, FontFamily, Color, Border} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const WelcomePage = () => {
  const navigation = useNavigation(); // Access the navigation object

  const handleGetStarted = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };
  const handleChooseRole = () => {
    navigation.navigate('Modal'); // Navigate to the Modal page
  };
  return (
    <View style={styles.frame1321314492ContainerParent}>
      <View
        style={[styles.frame1321314492Container, styles.batteryIconPosition]}>
        <Image
          style={[styles.frame1321314492Container, styles.batteryIconPosition]}
          resizeMode="cover"
          source={require('../assets/welcome-page.png')}
        />
        <Text style={styles.bannerLoginWelcome}>{'Welcome '}</Text>
        <Image
          style={styles.frame1321314492ContainerChild}
          resizeMode="cover"
          source={require('../assets/rectangle-3.png')}
        />
        <TouchableOpacity
          onPress={handleChooseRole}
          style={styles.chooseRoleContainer}>
          <Text style={[styles.chooseARole, styles.chooseARoleTypo]}>
            Choose a role
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Image
          style={styles.image8Icon}
          resizeMode="cover"
          source={require('../assets/image-8.png')}
        />
        <View style={styles.iphoneXOrNewer}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require('../assets/battery.png')}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.batteryIconPosition]}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 60, // Adjust this value to control the distance from the bottom
    left: '40%',
    transform: [{translateX: -50}], // Center the button horizontally
    color: Color.baseWhite,
    paddingVertical: 45,
    paddingHorizontal: 10,
    borderRadius: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  batteryIconPosition: {
    top: 0,
    position: 'absolute',
  },
  chooseARoleTypo: {
    textAlign: 'left',
    fontSize: FontSize.textSmMedium_size,
    position: 'absolute',
    borderRadius: 2,
  },
  iconPosition: {
    display: 'none',
    position: 'absolute',
  },
  frame1321314492Container: {
    left: 0,
    width: 522,
    height: 805,
  },
  bannerLoginWelcome: {
    top: 242,
    left: 140,
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    fontFamily: FontFamily.poppinsBold,
    textAlign: 'center',
    color: Color.baseWhite,
    position: 'absolute',
  },
  frame1321314492ContainerChild: {
    top: 674,
    left: 60,
    borderRadius: Border.br_8xs,
    width: 312,
    height: 48,
    position: 'absolute',
  },
  chooseARole: {
    top: 739,
    left: 161,
    fontWeight: '800',
    fontFamily: FontFamily.poppinsExtraBold,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  buttonLogin: {
    top: 688,
    left: 208,
    fontWeight: '600',
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.baseWhite,
  },
  image8Icon: {
    top: 109,
    left: 160,
    width: 103,
    height: 103,
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
    width: 24,
    height: 11,
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
    height: '5.59%',
    width: '83.14%',
    top: '0%',
    right: '9%',
    bottom: '94.41%',
    left: '7.85%',
    position: 'absolute',
    overflow: 'hidden',
  },
  frame1321314492ContainerParent: {
    backgroundColor: Color.baseWhite,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 805,
  },
});

export default WelcomePage;
