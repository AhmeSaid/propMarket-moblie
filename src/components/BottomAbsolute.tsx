import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS, sh, sw, width} from '../constants/theme';
import {Daily, DATA, sortData} from '../utils/constants';
import Absolute from './CustomAbsoluteView/Absolute';
import CustomText from './customText';
import SortingComponent from './Sorting/SortingHome';

// import { Container } from './styles';

const BottomAbsolute: React.FC = ({
  bottomSheetRef,
  onSort,
}: {
  bottomSheetRef: object;
  onSort?: any;
}) => {
  const {t} = useTranslation();
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState('');
  const navigation = useNavigation();
  // useEffect(() => {
  //   navigation.setOptions({
  //     tabBarStyle: {
  //       display: 'none',
  //     },
  //   });
  //   return () =>
  //     navigation.getParent()?.setOptions({
  //       tabBarStyle: undefined,
  //     });
  // }, [navigation]);
  return (
    <View style={styles.bottom}>
      <Pressable
        style={styles.show}
        onPress={() => {
          // stop
          setShow(!show);
        }}>
        <CustomText
          fontFamily="regular"
          color="primary"
          text={t('Sort')}
          size={14}
        />
      </Pressable>
      <Pressable
        style={styles.search}
        onPress={() => {
          // navigation.setOptions({
          //   tabBarStyle: {
          //     display: 'none',
          //   },
          // });
          // bottomSheetRef.current.collapse();
        }}>
        <CustomText
          fontFamily="regular"
          color="primary"
          size={14}
          text={t('SaveSearch')}
        />
      </Pressable>
      {show && (
        <Absolute
          style={styles.abslute}
          children={
            <ScrollView scrollEnabled={false} horizontal>
              <FlatList
                data={sortData}
                renderItem={({item, index}) => (
                  <SortingComponent
                    clicked={clicked}
                    onClick={res => {
                      setClicked(res);
                      setShow(false);

                      // onSort(res.subTitle);
                    }}
                    onSelected={res => {
                      onSort(res.subTitle);
                    }}
                    style={styles.sorting}
                    item={item}
                  />
                )}
                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}
              />
            </ScrollView>
          }
        />
      )}
    </View>
  );
};

export default BottomAbsolute;
const styles = StyleSheet.create({
  bottom: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'space-between',
    bottom: sh(6),
    width: width - sw(36),
    flexDirection: 'row',
    borderRadius: 7,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.84,
    elevation: 2,
  },
  show: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: sh(7),
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingRight: sw(80),
    paddingLeft: sw(88),
  },
  search: {
    paddingLeft: sw(30),
    paddingRight: sw(88),
    paddingVertical: sh(7),
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  abslute: {bottom: sh(45), width: sw(190), overflow: 'hidden'},
  sorting: {width: sw(190)},
  border: {width: '100%', marginBottom: sh(20)},
});
