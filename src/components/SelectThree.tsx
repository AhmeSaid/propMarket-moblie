import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, StyleSheet, View} from 'react-native';
import {COLORS, sh} from './../constants/theme';
import CustomText from './customText';

const SelectThree = ({
  onSelect,
  first,
  sec,
  thr,
  value,
}: {
  onSelect?: any;
  first: string;
  sec: string;
  thr: string;
  value?: number;
}) => {
  const [tabState, setTabState] = useState(value ?? 0);
  const {t} = useTranslation();

  return (
    <View style={styles.tabsContainer}>
      <Pressable
        disabled={tabState == 0}
        onPress={() => {
          setTabState(0);
          onSelect(0);
        }}
        style={[
          styles.tab,
          {backgroundColor: !tabState ? COLORS.primary : 'transparent'},
        ]}>
        <CustomText
          text={first}
          color={!tabState ? 'white' : 'black'}
          fontFamily={!tabState ? 'medium' : 'regular'}
        />
      </Pressable>

      <Pressable
        disabled={tabState == 1}
        onPress={() => {
          setTabState(1);
          onSelect(1);
        }}
        style={[
          styles.tab,
          {backgroundColor: tabState == 1 ? COLORS.primary : 'transparent'},
        ]}>
        <CustomText
          text={sec}
          color={tabState == 1 ? 'white' : 'black'}
          fontFamily={tabState == 1 ? 'medium' : 'regular'}
        />
      </Pressable>
      <Pressable
        disabled={tabState == 2}
        onPress={() => {
          setTabState(2);
          onSelect(2);
        }}
        style={[
          styles.tab,
          {backgroundColor: tabState == 2 ? COLORS.primary : 'transparent'},
        ]}>
        <CustomText
          text={thr}
          color={tabState == 2 ? 'white' : 'black'}
          fontFamily={tabState == 2 ? 'medium' : 'regular'}
        />
      </Pressable>
    </View>
  );
};
export default SelectThree;

const styles = StyleSheet.create({
  tabsContainer: {
    // width: 214,
    flex: 1,
    height: 40,
    backgroundColor: COLORS.inactiveBtn,
    alignSelf: 'center',
    borderRadius: 22,
    padding: 5,
    flexDirection: 'row',
    marginBottom: sh(10),
  },
  tab: {
    width: '30%',
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
