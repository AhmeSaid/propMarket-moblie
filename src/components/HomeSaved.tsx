import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {RedHeart} from '../assets/svg';
import {COLORS, sh, sw} from '../constants/theme';
import Absolute from './CustomAbsoluteView/Absolute';
import CustomBottomSheet from './CustomBottomSheet';
import CustomText from './customText';
import RenderTags from './Tags';

// import { Container } from './styles';
const TagsArr = [
  'price',
  'House size',
  'Style of home',
  'Layout',
  'Living room',
  'Bedrooms',
  'Kitchen',
  'Bathrooms',
  'Backyard',
  'Location',
  'Commute',
  'Schools',
  'Basment',
];

const HomeSaved: React.FC = ({bottomSheetRefHeart, onClose, closeData}) => {
  const {t} = useTranslation();
  const [close, setClose] = useState(closeData);
  const [tagArr, setTagsArr] = useState(TagsArr);
  const [tage, setTage] = useState('');

  return (
    <CustomBottomSheet
      onClose={res => {
        setClose(res);
      }}
      bottomSheetRef={bottomSheetRefHeart}>
      <Absolute
        style={[
          styles.red,
          {
            top: closeData ? 0 : -sh(60),
          },
        ]}
        children={<RedHeart color={COLORS.white} />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomText
          text={t('HomeSaved')}
          size={16}
          fontFamily={'bold'}
          containerStyle={styles.home}
        />

        <CustomText
          text={t('like')}
          size={14}
          color={'primary'}
          fontFamily={'regular'}
          style={{marginBottom: sh(17)}}
        />
        <View style={styles.tagView}>
          {tagArr.map(item => {
            return <RenderTags item={item} />;
          })}

          <BottomSheetTextInput
            style={[
              {
                height: 27,
              },
              styles.tags,
              {
                color: 'grey',
                fontSize: 12,
              },
            ]}
            value={tage}
            placeholder="+ Add tage"
            onChangeText={setTage}
          />
        </View>

        <Pressable
          onPress={() => {
            if (tage != '') {
              setTagsArr([...tagArr, tage]);
              setTage('');
            }
          }}>
          <CustomText
            text={t('Savemytags')}
            size={14}
            color={'primary'}
            fontFamily={'medium'}
            containerStyle={[styles.home, {marginTop: sh(14)}]}
          />
        </Pressable>
      </ScrollView>
    </CustomBottomSheet>
  );
};

export default HomeSaved;
const styles = StyleSheet.create({
  tags: {
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingHorizontal: sw(15),
    paddingVertical: sw(6),
    borderColor: COLORS.inactive,
    borderRadius: 17,
    marginRight: sw(8),
    marginBottom: sw(8),
  },
  tagView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    paddingBottom: sw(10),
    borderColor: COLORS.shadow,
  },
  selected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  saved: {
    borderRadius: 3,
    borderWidth: 0.5,
    paddingHorizontal: sh(14),
    borderColor: COLORS.border,
    marginTop: sh(12),
  },
  show: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: sh(7),
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  search: {
    flex: 1,
    paddingVertical: sh(7),
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
  },
  home: {
    alignSelf: 'center',
    marginTop: sh(10),
    marginBottom: sh(25),
  },
  red: {
    height: sw(55),
    width: sw(55),
    backgroundColor: COLORS.orange,
    borderRadius: sw(27.5),
    alignItems: 'center',
    justifyContent: 'center',
    top: -sh(65),
    zIndex: 100,
  },
});
