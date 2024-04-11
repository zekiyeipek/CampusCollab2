import * as React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';

const CreateTeam = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleAddMemberPress = () => {
    // Navigate to the "Add Team Member" page when the button is pressed
    navigation.navigate('AddTeamMember'); // Replace 'AddTeamMember' with the name of your destination screen
  };

  return (
    <View style={styles.createTeam}>
      <View style={[styles.createTeamContainer, styles.images1IconPosition]}>
        <Image
          style={styles.images1IconPosition}
          resizeMode="cover"
          source={require('../assets/Background.png')}
        />
        <Image
          style={styles.createTeamContainerChild}
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
            source={require('../assets/battery.png')}
          />
          <Text style={styles.campuscollab}>CAMPUSCOLLAB</Text>
        </View>
        <View style={styles.createTeamContainerItem} />
        <View style={styles.createTeamContainerInner} />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require('../assets/rectangle-11.png')}
        />
        <View style={[styles.rectangleView, styles.createContainerLayout1]} />
        <View
          style={[
            styles.createTeamContainerChild1,
            styles.createContainerLayout1,
          ]}
        />

        <View style={styles.createTeamContainerChild3} />
        <View style={styles.createTeamContainerChild4} />
        <Text style={styles.approve}>Approve</Text>
        <Text style={[styles.remove, styles.removeTypo]}>Remove</Text>
        <Text style={[styles.teamName, styles.infoLayout]}>Team Name</Text>
        <Text style={[styles.continue, styles.infoTypo]}>Continue?</Text>
        <Text style={[styles.createTeam1, styles.teamClr]}>{`Create Team
`}</Text>
        <Text style={[styles.info, styles.infoTypo]}>Info</Text>
        <View
          style={[
            styles.createTeamContainerChild5,
            styles.createContainerLayout,
          ]}
        />
        <TouchableOpacity onPress={handleAddMemberPress}>
          <Text style={[styles.addMember, styles.removeTypo]}>
            {'Add member'}
          </Text>
        </TouchableOpacity>
        <View
          style={[
            styles.createTeamContainerChild6,
            styles.createContainerBorder,
          ]}
        />
        <View
          style={[
            styles.createTeamContainerChild7,
            styles.createContainerBorder,
          ]}
        />
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
  iconPosition: {
    display: 'none',
    position: 'absolute',
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: 'absolute',
  },
  createContainerLayout1: {
    height: 39,
    width: 227,
    position: 'absolute',
  },
  removeTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  infoLayout: {
    width: 149,
    height: 13,
    fontSize: FontSize.size_mini,
  },
  infoTypo: {
    left: 124,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    textAlign: 'center',
    position: 'absolute',
  },
  teamClr: {
    color: Color.colorBlack,
    textAlign: 'center',
    position: 'absolute',
  },
  createContainerLayout: {
    height: 48,
    left: 158,
  },
  createContainerBorder: {
    borderWidth: 1,
    borderColor: Color.colorGray_1000,
    backgroundColor: Color.colorGray_1100,
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    position: 'absolute',
  },
  createTeamContainerChild: {
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
    bottom: 35,
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
    width: 54,
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
    width: 199,
    height: 36,
    textAlign: 'center',
    color: Color.baseWhite,
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
  createTeamContainerItem: {
    top: -64,
    left: -55,
    backgroundColor: Color.colorGainsboro_300,
    width: 485,
    height: 800,
    position: 'absolute',
  },
  createTeamContainerInner: {
    top: 144,
    borderColor: Color.colorGray_900,
    borderTopWidth: 1,
    width: 358,
    height: 1,
    borderStyle: 'solid',
    left: 22,
    position: 'absolute',
  },
  rectangleIcon: {
    width: 136,
    height: 101,
    top: 172,
    left: 22,
    position: 'absolute',
  },
  rectangleView: {
    top: 234,
    backgroundColor: Color.colorGainsboro_200,
    left: 177,
    height: 39,
    width: 227,
  },
  createTeamContainerChild1: {
    backgroundColor: Color.colorGainsboro_200,
    left: 177,
    height: 39,
    width: 227,
    top: 172,
  },
  createTeamContainerChild2: {
    top: 273,
    left: -19,
  },
  createTeamContainerChild3: {
    left: 231,
    height: 53,
    width: 148,
    top: 644,
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_26xl,
    position: 'absolute',
  },
  createTeamContainerChild4: {
    left: 39,
    height: 53,
    width: 148,
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_26xl,
    top: 644,
    position: 'absolute',
  },
  approve: {
    left: 266,
    width: 91,
    height: 33,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    fontSize: FontSize.size_mini,
    top: 660,
    textAlign: 'center',
    color: Color.colorBlack,
    position: 'absolute',
  },
  remove: {
    height: 35,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    textAlign: 'center',
    color: Color.colorBlack,
    position: 'absolute',
    top: 660,
    left: 39,
    width: 148,
  },
  teamName: {
    top: 178,
    left: 149,
    color: Color.colorBlack,
    textAlign: 'center',
    position: 'absolute',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  continue: {
    top: 594,
    fontSize: FontSize.textSmMedium_size,
    textDecoration: 'underline',
    width: 165,
    height: 26,
  },
  createTeam1: {
    top: 108,
    left: -21,
    width: 256,
    height: 42,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
  },
  info: {
    top: 228,
    width: 149,
    height: 13,
    fontSize: FontSize.size_mini,
  },
  createTeamContainerChild5: {
    top: 356,
    width: 154,
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_26xl,
    height: 48,
    left: 158,
    position: 'absolute',
  },
  addMember: {
    top: 366,
    left: 178,
    width: 115,
    height: 18,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    textAlign: 'center',
    color: Color.colorBlack,
    position: 'absolute',
  },
  createTeamContainerChild6: {
    top: 163,
    width: 218,
    height: 48,
    left: 158,
  },
  createTeamContainerChild7: {
    top: 256,
    left: 161,
    width: 209,
    height: 80,
  },
  createTeamContainer: {
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
    overflow: 'hidden',
  },
  createTeam: {
    backgroundColor: Color.baseWhite,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 731,
  },
});

export default CreateTeam;
