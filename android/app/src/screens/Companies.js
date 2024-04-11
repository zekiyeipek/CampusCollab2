import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';

const Companies = () => {
  return (
    <View style={styles.companiesParent}>
      <View style={[styles.companies, styles.companiesContainerPosition]}>
        <View
          style={[
            styles.companiesContainer,
            styles.companiesContainerPosition,
          ]}>
          <Image
            style={[styles.images1Icon, styles.companiesContainerPosition]}
            resizeMode="cover"
            source={require('../assets/Background.png')}
          />
          <Image
            style={[
              styles.companiesContainerChild,
              styles.companiesContainerPosition,
            ]}
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
            <Image
              style={styles.leftSideIcon}
              resizeMode="cover"
              source={require('../assets/left-side.png')}
            />
            <Text style={styles.campuscollab}>CAMPUSCOLLAB</Text>
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
          </View>
          <Image
            style={styles.companiesContainerItem}
            resizeMode="cover"
            source={require('../assets/rectangle-8.png')}
          />
          <Image
            style={[
              styles.companiesContainerInner,
              styles.companiesContainerLayout1,
            ]}
            resizeMode="cover"
            source={require('../assets/rectangle-19.png')}
          />
          <Image
            style={[styles.rectangleIcon, styles.companiesContainerLayout1]}
            resizeMode="cover"
            source={require('../assets/rectangle-18.png')}
          />
          <Image
            style={[
              styles.companiesContainerChild1,
              styles.companiesContainerLayout1,
            ]}
            resizeMode="cover"
            source={require('../assets/rectangle-17.png')}
          />
          <Image
            style={[
              styles.companiesContainerChild2,
              styles.companiesContainerLayout1,
            ]}
            resizeMode="cover"
            source={require('../assets/rectangle-16.png')}
          />
          <Text style={styles.createTeam}>Companies</Text>
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require('../assets/line-3.png')}
          />
          <Image
            style={[
              styles.companiesContainerChild3,
              styles.companiesContainerLayout1,
            ]}
            resizeMode="cover"
            source={require('../assets/rectangle-14.png')}
          />
          <Text style={[styles.netflixIsA, styles.appleIsATypo]}>
            Netflix is a global streaming platform that offers a wide variety of
            movies, TV shows, documentaries, and original content.
          </Text>
          <Text style={[styles.amazonIsA, styles.appleIsATypo]}>
            Amazon is a multinational technology company known for its vast
            e-commerce platform, cloud computing services and digital streaming
            services.
          </Text>
          <Text style={[styles.appleIsA, styles.appleIsATypo]}>
            Apple is a technology giant renowned for its consumer electronics,
            software, and services.
          </Text>
          <Text style={[styles.instagramOwnedBy, styles.appleIsATypo]}>
            Instagram, owned by Facebook, is a widely used social media platform
            focused on photo and video sharing.
          </Text>
          <Text style={[styles.googleIsA, styles.appleIsATypo]}>
            Google is a multinational technology company known for its search
            engine, but it offers a diverse range of products and services.
          </Text>
          <Text style={[styles.netflix, styles.appleTypo]}>Netflix</Text>
          <Text style={[styles.amazon, styles.appleTypo]}>Amazon</Text>
          <Text style={[styles.apple, styles.appleTypo]}>Apple</Text>
          <Text style={[styles.instagram, styles.googleTypo]}>Instagram</Text>
          <Text style={[styles.google, styles.googleTypo]}>Google</Text>
          <View
            style={[styles.rectangleView, styles.companiesContainerLayout]}
          />
          <Text style={[styles.viewProfile, styles.viewTypo1]}>
            View Profile
          </Text>
          <Image
            style={[
              styles.companiesContainerChild4,
              styles.companiesContainerLayout,
            ]}
            resizeMode="cover"
            source={require('../assets/rectangle-25.png')}
          />
          <Text style={[styles.viewProfile1, styles.viewTypo]}>
            View Profile
          </Text>
          <Image
            style={[
              styles.companiesContainerChild5,
              styles.companiesContainerLayout,
            ]}
            resizeMode="cover"
            source={require('../assets/rectangle-25.png')}
          />
          <View
            style={[
              styles.companiesContainerChild5,
              styles.companiesContainerLayout,
            ]}
          />
          <Text style={[styles.viewProfile2, styles.viewTypo1]}>
            View Profile
          </Text>
          <View
            style={[
              styles.companiesContainerChild6,
              styles.viewProfile3Position,
            ]}
          />
          <View
            style={[
              styles.companiesContainerChild7,
              styles.viewProfile4Position,
            ]}
          />
          <Text style={[styles.viewProfile3, styles.viewProfile3Position]}>
            View Profile
          </Text>
          <Text style={[styles.viewProfile4, styles.viewProfile4Position]}>
            View Profile
          </Text>
          <Text
            style={[styles.entertainmentStreamingServi, styles.technologyTypo]}>
            Entertainment, Streaming Services
          </Text>
          <Text style={[styles.eCommerceCloudComputing, styles.technologyTypo]}>
            E-Commerce, Cloud Computing
          </Text>
          <Text
            style={[styles.technologyConsumerElectroni, styles.technologyTypo]}>
            Technology, Consumer Electronics
          </Text>
          <Text style={[styles.socialMediaTechnology, styles.technologyTypo]}>
            {' '}
            Social Media, Technology
          </Text>
          <Text
            style={[styles.technologyInternetServices, styles.technologyTypo]}>
            Technology, Internet Services
          </Text>
          <Image
            style={styles.companiesContainerChild8}
            resizeMode="cover"
            source={require('../assets/rectangle-32.png')}
          />
          <Text style={[styles.filters, styles.searchTypo]}>Filters</Text>
          <View style={styles.companiesContainerChild9} />
          <Image
            style={styles.companiesContainerChild10}
            resizeMode="cover"
            source={require('../assets/rectangle-34.png')}
          />
          <Text style={[styles.search, styles.searchTypo]}>Search</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  companiesContainerPosition: {
    width: 414,
    left: 0,
    position: 'absolute',
  },
  iconPosition: {
    display: 'none',
    position: 'absolute',
  },
  companiesContainerLayout1: {
    height: 63,
    width: 76,
    left: 33,
    position: 'absolute',
  },
  appleIsATypo: {
    height: 44,
    width: 230,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: '300',
    fontSize: FontSize.size_4xs,
    textAlign: 'center',
    position: 'absolute',
  },
  appleTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.textMdSemibold_size,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    position: 'absolute',
  },
  googleTypo: {
    left: 112,
    color: Color.colorGray_200,
    fontSize: FontSize.textMdSemibold_size,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    position: 'absolute',
  },
  companiesContainerLayout: {
    width: 93,
    left: 268,
    height: 18,
    borderRadius: Border.br_26xl,
  },
  viewTypo1: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    color: Color.baseWhite,
  },
  viewTypo: {
    left: 283,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    color: Color.baseWhite,
  },
  viewProfile3Position: {
    top: 587,
    position: 'absolute',
  },
  viewProfile4Position: {
    top: 695,
    position: 'absolute',
  },
  technologyTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
    color: Color.colorGray_100,
    textAlign: 'center',
    position: 'absolute',
  },
  searchTypo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: 'center',
    position: 'absolute',
  },
  images1Icon: {
    left: 0,
    width: 414,
    top: 0,
    height: 731,
  },
  companiesContainerChild: {
    top: 4,
    borderRadius: Border.br_8xs,
    height: 70,
    left: 0,
    width: 414,
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
    width: 199,
    height: 36,
    textAlign: 'center',
    color: Color.baseWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
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
    height: '10.12%',
    top: '0%',
    right: '0.72%',
    bottom: '89.88%',
    left: '-0.72%',
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
  },
  companiesContainerItem: {
    top: -25,
    left: 32,
    width: 360,
    height: 800,
    position: 'absolute',
  },
  companiesContainerInner: {
    top: 619,
  },
  rectangleIcon: {
    top: 521,
  },
  companiesContainerChild1: {
    top: 401,
  },
  companiesContainerChild2: {
    top: 294,
  },
  createTeam: {
    top: 91,
    color: Color.colorGray_100,
    left: 19,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    position: 'absolute',
  },
  lineIcon: {
    top: 129,
    width: 376,
    height: 0,
    left: 19,
    position: 'absolute',
  },
  companiesContainerChild3: {
    top: 182,
  },
  netflixIsA: {
    top: 192,
    left: 130,
    width: 230,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: '300',
    fontSize: FontSize.size_4xs,
  },
  amazonIsA: {
    top: 303,
    left: 131,
  },
  appleIsA: {
    top: 423,
    left: 128,
  },
  instagramOwnedBy: {
    top: 531,
    left: 130,
    width: 230,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: '300',
    fontSize: FontSize.size_4xs,
  },
  googleIsA: {
    top: 641,
    left: 130,
    width: 230,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: '300',
    fontSize: FontSize.size_4xs,
  },
  netflix: {
    top: 163,
    width: 64,
    left: 109,
    fontSize: FontSize.textMdSemibold_size,
  },
  amazon: {
    top: 273,
    left: 99,
    width: 89,
  },
  apple: {
    top: 389,
    width: 64,
    left: 109,
    fontSize: FontSize.textMdSemibold_size,
  },
  instagram: {
    top: 497,
    width: 90,
  },
  google: {
    top: 615,
    width: 64,
  },
  rectangleView: {
    top: 249,
    height: 18,
    backgroundColor: Color.colorGold,
    width: 93,
    left: 268,
    position: 'absolute',
  },
  viewProfile: {
    top: 250,
    left: 281,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
    position: 'absolute',
  },
  companiesContainerChild4: {
    top: 361,
    height: 18,
    width: 93,
    left: 268,
    position: 'absolute',
  },
  viewProfile1: {
    top: 362,
    position: 'absolute',
  },
  companiesContainerChild5: {
    top: 477,
    height: 18,
    backgroundColor: Color.colorGold,
    width: 93,
    left: 268,
    position: 'absolute',
  },
  viewProfile2: {
    top: 478,
    left: 282,
    position: 'absolute',
  },
  companiesContainerChild6: {
    height: 18,
    width: 93,
    left: 268,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorGold,
  },
  companiesContainerChild7: {
    height: 18,
    width: 93,
    left: 268,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorGold,
  },
  viewProfile3: {
    left: 283,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    color: Color.baseWhite,
  },
  viewProfile4: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    color: Color.baseWhite,
    left: 281,
  },
  entertainmentStreamingServi: {
    top: 178,
    left: 183,
  },
  eCommerceCloudComputing: {
    top: 290,
    left: 193,
  },
  technologyConsumerElectroni: {
    top: 405,
    left: 184,
  },
  socialMediaTechnology: {
    top: 514,
    left: 229,
  },
  technologyInternetServices: {
    top: 624,
    left: 210,
  },
  companiesContainerChild8: {
    top: 139,
    left: 35,
    width: 22,
    height: 16,
    position: 'absolute',
  },
  filters: {
    left: 57,
    fontSize: FontSize.textSmMedium_size,
    top: 137,
  },
  companiesContainerChild9: {
    left: 238,
    borderStyle: 'solid',
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 138,
    height: 19,
    top: 137,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.baseWhite,
    position: 'absolute',
  },
  companiesContainerChild10: {
    left: 357,
    width: 16,
    top: 137,
    height: 18,
    position: 'absolute',
  },
  search: {
    top: 138,
    left: 246,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  companiesContainer: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.greyLight,
    overflow: 'hidden',
    left: 0,
    width: 414,
    top: 0,
    height: 731,
  },
  companies: {
    overflow: 'hidden',
    backgroundColor: Color.baseWhite,
    width: 414,
    left: 0,
    top: 0,
    height: 731,
  },
  companiesParent: {
    flex: 1,
    height: 731,
    width: '100%',
  },
});

export default Companies;
