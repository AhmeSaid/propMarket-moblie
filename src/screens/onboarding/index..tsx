import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {_retrieveData} from '../../utils/storageController';
import {
  I18nManager,
  Image,
  ImageBackground,
  ImageSourcePropType,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import createStyles from './style';
import Carousel from 'react-native-snap-carousel';
import {
  background1,
  background2,
  onboarding1,
  onboarding2,
  onboarding3,
} from '../../assets/images';
import {COLORS, width} from '../../constants/theme';
import CustomText from '../../components/customText';
import {t} from 'i18next';
import {useDispatch} from 'react-redux';
import RegisterButtons from '../../components/RegisterButtons';
import AsyncStorage from '@react-native-community/async-storage';

interface OnboardingProps {
  navigation: NavigationProp<ParamListBase>;
}

const Onboarding: FC<OnboardingProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const {
    imageBackground,
    container,
    carouselImage,
    customCarouselContainer,
    onboardingHeader,
    carouselItemContainer,
    langContainer,
    imgstyle,
    desc,
    contentContainer,
    dots,
    dotsContainer,
  } = styles;

  const ref = useRef();
  const dispatch = useDispatch();

  const carouselItems = [
    {
      title: t('onboardinTitle1'),
      desc: t('onboardingDesc1'),
      image: onboarding3,
    },
    {
      title: t('onboardinTitle2'),
      desc: t('onboardingDesc2'),
      image: onboarding2,
    },
    {
      title: t('onboardinTitle3'),
      desc: t('onboardingDesc3'),
      image: onboarding1,
    },
  ];
  const carouselItemsReversed = [
    {
      title: t('onboardinTitle3'),
      desc: t('onboardingDesc3'),
      image: onboarding1,
    },
    {
      title: t('onboardinTitle2'),
      desc: t('onboardingDesc2'),
      image: onboarding2,
    },
    {
      title: t('onboardinTitle1'),
      desc: t('onboardingDesc1'),
      image: onboarding3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const setNotFirst = async () => {
    await AsyncStorage.setItem('notFirst', 'true');
  };

  useEffect(() => {
    setNotFirst();
  }, []);

  const renderItem = ({
    item,
  }: {
    item: {title: string; desc: string; image: ImageSourcePropType};
  }) => {
    return (
      <View style={carouselItemContainer}>
        <Image style={carouselImage} source={item.image} />
        <CustomText
          color="black"
          fontFamily="bold"
          size={20}
          text={item.title}
        />
        <CustomText
          color="black"
          fontFamily="regular"
          size={16}
          text={item.desc}
          style={desc}
        />
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={contentContainer} style={container}>
      <ImageBackground
        source={
          activeIndex === 0
            ? background1
            : activeIndex === 1
            ? background2
            : background1
        }
        style={imageBackground}
        imageStyle={imgstyle}>
        <Carousel
          layout="default"
          ref={ref}
          onBeforeSnapToItem={(index: number) => {
            setActiveIndex(index);
          }}
          data={
            I18nManager.isRTL && Platform.OS === 'android'
              ? carouselItemsReversed
              : carouselItems
          }
          sliderWidth={width}
          itemWidth={width}
          renderItem={renderItem}
          containerCustomStyle={customCarouselContainer}
        />
        <View style={onboardingHeader}>
          <Pressable
            onPress={() => {
              navigation.navigate('Landing');
            }}>
            <CustomText
              color="white"
              fontFamily="bold"
              size={15}
              text={t('skip')}
            />
          </Pressable>
          <View style={langContainer}>
            <CustomText
              color="red"
              fontFamily="bold"
              size={14}
              text={t('lang')}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={dotsContainer}>
        {carouselItems.map((item, index) => (
          <View
            style={[
              dots,
              {
                width: activeIndex == index ? 32 : 10,
                backgroundColor:
                  activeIndex == index ? COLORS.orange : COLORS.orangeRgba(0.3),
              },
            ]}
          />
        ))}
      </View>
      <RegisterButtons />
    </ScrollView>
  );
};

export default Onboarding;
