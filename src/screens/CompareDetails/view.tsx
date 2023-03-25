import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, ScrollView, View} from 'react-native';
import CustomTable from '../../components/CustomTable/CustomTable';
import CustomText from '../../components/customText';
import Row from '../../components/Row';
import RowWithImage from '../../components/RowWithImage';
import {
  Back,
  GoDown,
  GoRight,
  PrimaryPin,
  PrimaryShare,
} from '../../assets/svg';
import createStyles from './styles';
import {COLORS, sh, sw} from '../../constants/theme';

interface CompareDetailsViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const CompareDetailsView: FC<CompareDetailsViewProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const [select, setSelect] = useState<number>(0);
  const [priceCol, setPriceCol] = useState<boolean>(true);

  const {t} = useTranslation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: t('PropertyComparison'),
      headerLeft: () => (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Back color={COLORS.primary} />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable style={{}} onPress={() => {}}>
          <PrimaryPin />
        </Pressable>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.keyboardAvoiding}>
      <View
        style={{
          paddingVertical: sh(10),
          backgroundColor: COLORS.flbg,
          paddingHorizontal: sw(20),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <CustomText fontFamily="bold" size={14} text={'Price'} />
        <Pressable style={{paddingHorizontal: sh(5)}}>
          <Back color={COLORS.primary} />
        </Pressable>
      </View>
      <View
        style={{
          paddingVertical: sh(10),
          paddingHorizontal: sw(20),
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderColor: COLORS.inactiveBtn,
        }}>
        <CustomText
          containerStyle={{flex: 1.2}}
          fontFamily="regular"
          size={14}
          text={'Property Price'}
        />
        <CustomText
          containerStyle={{flex: 2}}
          fontFamily="regular"
          size={14}
          text={'4000.000 SAR'}
        />
        <CustomText
          containerStyle={{flex: 2}}
          fontFamily="regular"
          size={14}
          text={'4000.000 SAR'}
        />
      </View>
    </View>
  );
};

export default CompareDetailsView;
//  <View style={styles.over}>
//    {/* <RowWithImage
//       firstText={''}
//       secText={'155X Ahmed St Oman, KSA 11213'}
//       thirdText={'155X Ahmed St Oman, KSA 11213'}
//     /> */}
//    <Row
//      firstText={'Tags'}
//      // secText={'Single Family'}
//      secComponent={
//        <CustomText size={14} containerStyle={styles.sec} text={'Price'} />
//      }
//      thirdComponent={
//        <CustomText
//          size={14}
//          containerStyle={styles.third}
//          text={'+ Add my tags'}
//        />
//      }
//      // thirdText={'Single Family'}
//    />
//  </View>;
