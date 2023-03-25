import React, {FC, useMemo, useRef, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';

import {useTranslation} from 'react-i18next';
import Container from '../../components/container';
import {Animated, FlatList, Image, View, Pressable, Alert} from 'react-native';
import CustomText from '../../components/customText';
import {COLORS, sh, SIZES, sw, width} from '../../constants/theme';
import {ArrowDown, CheckBox, Saved, Search} from '../../assets/svg';
import CustomButton from '../../components/customButton';
import {useEffect} from 'react';
import {Text} from 'react-native-svg';
import RenderhorizontalItem from '../../components/HorizontalFlatList/RenderHorizontalFlatList';
import {DATA} from '../../utils/constants';
import Header from '../../components/ScreensHeader/ScreensHeader';
interface LandingDetailsViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const LandingDetailsView: FC<LandingDetailsViewProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const [show, setShow] = useState<boolean>(true);
  const [counterImg, setCounterImg] = useState<number>(0);
  const flatListScrollX = new Animated.Value(0);

  const flatListRef = useRef(null);

  const {t} = useTranslation();

  const onMomentumScrollEnd = (e: object) => {
    const index = Math.round(e?.nativeEvent?.contentOffset.x / width);
    setCounterImg(index);
  };

  return (
    <View style={styles.keyboardAvoiding}>
      <Container>
        <View>
          <Header navigation={navigation} />

          {show && (
            <View style={styles.locView}>
              <Pressable onPress={() => setShow(false)}>
                <CustomText
                  color={'primary'}
                  containerStyle={styles.close}
                  style={styles.x}>
                  {'X'}
                </CustomText>
              </Pressable>
              <CustomText
                color={'primary'}
                containerStyle={styles.locTextContainer}
                style={styles.locText}>
                {
                  'Please turn on your location or use the search bar to view the listed properities'
                }
              </CustomText>
              <CustomButton
                text="Turn on my location"
                containerStyle={styles.locButt}
              />
            </View>
          )}
          <FlatList
            data={DATA}
            ref={flatListRef}
            style={styles.flatlistDetails}
            pagingEnabled
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: flatListScrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            onMomentumScrollEnd={onMomentumScrollEnd}
            renderItem={index => {
              return (
                <View style={styles.virticalView}>
                  <Pressable style={styles.verticalView}>
                    <Image
                      style={styles.img}
                      source={require('../../../assets/image/landing.png')}
                    />
                  </Pressable>
                </View>
              );
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
          <View style={styles.ballView}>
            <View
              style={
                counterImg == 0 ? styles.ball : styles.unselectBall
              }></View>
            <View
              style={
                counterImg == 1 ? styles.ball : styles.unselectBall
              }></View>
            <View
              style={
                counterImg == 2 ? styles.ball : styles.unselectBall
              }></View>
            <View
              style={
                counterImg == 3 ? styles.ball : styles.unselectBall
              }></View>
            <View
              style={
                counterImg == 4 ? styles.ball : styles.unselectBall
              }></View>
          </View>
          <CustomText
            color={'semiBlock'}
            containerStyle={styles.recommendation}>
            {'Inspiration for your dream home'}
          </CustomText>
        </View>
        <FlatList
          data={DATA}
          renderItem={({index}) => {
            return (
              <View
                style={{
                  marginHorizontal: index % 2 == 0 ? SIZES.smallPadding / 2 : 0,
                }}>
                <RenderhorizontalItem navigation={navigation} />
              </View>
            );
          }}
          showsHorizontalScrollIndicator={false}
          style={styles.flatlist2}
          horizontal={true}
          alwaysBounceVertical={false}
        />
      </Container>
    </View>
  );
};

export default LandingDetailsView;
