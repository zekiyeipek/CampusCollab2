import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';

const AddTeamMember = () => {
  return (
    <View style={styles.addTeamMember}>
      <View style={[styles.addTeamMemberContainer, styles.images1IconPosition]}>
        <Image
          style={styles.images1IconPosition}
          resizeMode="cover"
          source={require('../assets/Background.png')}
        />
        <Image
          style={styles.addTeamMemberContainerChild}
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
          <Text style={[styles.campuscollab, styles.createTeamTypo]}>
            CAMPUSCOLLAB
          </Text>
        </View>
        <Text style={[styles.createTeam, styles.createTeamTypo]}>
          {'Add Team Member '}
        </Text>
        <View style={styles.addTeamMemberContainerItem} />
        <View style={styles.addTeamMemberContainerInner} />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require('../assets/rectangle-11.png')}
        />
        <View style={[styles.rectangleView, styles.addContainerLayout1]} />
        <View
          style={[
            styles.addTeamMemberContainerChild1,
            styles.addContainerLayout1,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild2,
            styles.addContainerLayout1,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild3,
            styles.addContainerPosition,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild4,
            styles.addContainerLayout1,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild5,
            styles.addContainerLayout1,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild6,
            styles.addContainerLayout,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild7,
            styles.addContainerLayout,
          ]}
        />
        <Text style={styles.approve}>Approve</Text>
        <Text style={styles.remove}>Remove</Text>
        <Text style={[styles.name, styles.nameTypo]}>Name</Text>
        <Text style={[styles.surname, styles.yearTypo]}>Surname</Text>
        <Text style={[styles.email, styles.nameTypo]}>{`Email
`}</Text>
        <Text style={[styles.university, styles.nameTypo]}>{`University
`}</Text>
        <Text style={[styles.phone, styles.yearTypo]}>Phone</Text>
        <Text style={[styles.year, styles.yearTypo]}>{`Year
`}</Text>
        <Text style={styles.continue}>Continue?</Text>
        <View
          style={[
            styles.addTeamMemberContainerChild8,
            styles.addContainerBorder1,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild9,
            styles.addContainerBorder,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild10,
            styles.addContainerBorder,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild11,
            styles.addContainerBorder,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild12,
            styles.addContainerBorder1,
          ]}
        />
        <View
          style={[
            styles.addTeamMemberContainerChild13,
            styles.addContainerBorder1,
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
  createTeamTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    position: 'absolute',
  },
  addContainerLayout1: {
    height: 39,
    width: 227,
    backgroundColor: Color.colorGainsboro_200,
    position: 'absolute',
  },
  addContainerPosition: {
    top: 398,
    height: 39,
  },
  addContainerLayout: {
    height: 53,
    width: 148,
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_26xl,
    top: 644,
    position: 'absolute',
  },
  nameTypo: {
    width: 84,
    color: Color.colorBlack,
    height: 13,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    fontSize: FontSize.size_mini,
    textAlign: 'center',
    position: 'absolute',
  },
  yearTypo: {
    height: 22,
    width: 83,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    fontSize: FontSize.size_mini,
    textAlign: 'center',
    position: 'absolute',
  },
  addContainerBorder1: {
    borderWidth: 1,
    borderColor: Color.colorGray_1000,
    backgroundColor: Color.colorGray_1100,
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    position: 'absolute',
  },
  addContainerBorder: {
    width: 209,
    borderWidth: 1,
    borderColor: Color.colorGray_1000,
    backgroundColor: Color.colorGray_1100,
    borderRadius: Border.br_3xs,
    left: 170,
    borderStyle: 'solid',
    position: 'absolute',
  },
  addTeamMemberContainerChild: {
    top: 1,
    left: 2,
    borderRadius: Border.br_8xs,
    width: 412,
    height: 67,
    position: 'absolute',
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
    left: 288,
    width: 28,
    height: 11,
    position: 'absolute',
  },
  campuscollab: {
    top: 18,
    left: 80,
    width: 199,
    height: 36,
    color: Color.baseWhite,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
  },
  iphoneXOrNewer: {
    height: '6.16%',
    top: '0%',
    right: '0%',
    bottom: '93.84%',
    left: '0%',
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
  },
  createTeam: {
    top: 108,
    left: 26,
    color: Color.colorGray_100,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
  },
  addTeamMemberContainerItem: {
    top: -64,
    left: -55,
    backgroundColor: Color.colorGainsboro_300,
    width: 485,
    height: 800,
    position: 'absolute',
  },
  addTeamMemberContainerInner: {
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
    left: 177,
  },
  addTeamMemberContainerChild1: {
    left: 177,
    top: 172,
  },
  addTeamMemberContainerChild2: {
    right: 5,
    top: 336,
  },
  addTeamMemberContainerChild3: {
    left: 182,
    width: 227,
    backgroundColor: Color.colorGainsboro_200,
    top: 398,
    position: 'absolute',
  },
  addTeamMemberContainerChild4: {
    top: 485,
    left: 187,
  },
  addTeamMemberContainerChild5: {
    top: 555,
    left: 187,
  },
  addTeamMemberContainerChild6: {
    left: 231,
  },
  addTeamMemberContainerChild7: {
    left: 39,
  },
  approve: {
    left: 262,
    width: 91,
    height: 13,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    fontSize: FontSize.size_mini,
    top: 660,
    textAlign: 'center',
    color: Color.colorBlack,
    position: 'absolute',
  },
  remove: {
    left: 40,
    height: 35,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    fontSize: FontSize.size_mini,
    top: 660,
    width: 148,
    textAlign: 'center',
    color: Color.colorBlack,
    position: 'absolute',
  },
  name: {
    left: 170,
    top: 172,
  },
  surname: {
    top: 228,
    left: 187,
  },
  email: {
    top: 285,
    left: 177,
  },
  university: {
    top: 401,
    left: 182,
  },
  phone: {
    top: 348,
    left: 178,
  },
  year: {
    top: 468,
    left: 174,
  },
  continue: {
    top: 594,
    left: 124,
    fontSize: FontSize.textSmMedium_size,
    textDecoration: 'underline',
    width: 165,
    height: 26,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    textAlign: 'center',
    position: 'absolute',
  },
  addTeamMemberContainerChild8: {
    top: 161,
    width: 205,
    height: 34,
    left: 174,
  },
  addTeamMemberContainerChild9: {
    top: 218,
    height: 35,
  },
  addTeamMemberContainerChild10: {
    top: 273,
    height: 52,
  },
  addTeamMemberContainerChild11: {
    height: 50,
    top: 336,
  },
  addTeamMemberContainerChild12: {
    left: 169,
    width: 210,
    top: 398,
    height: 39,
  },
  addTeamMemberContainerChild13: {
    top: 457,
    width: 213,
    height: 43,
    left: 170,
  },
  addTeamMemberContainer: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.greyLight,
    overflow: 'hidden',
  },
  addTeamMember: {
    backgroundColor: Color.baseWhite,
    flex: 1,
    overflow: 'hidden',
    height: 731,
    width: '100%',
  },
});

export default AddTeamMember;
