import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, StyleSheet, View} from 'react-native';
import {COLORS, sh} from '../../constants/theme';
import CustomText from '../customText';

const Select = ({
  onSelect,
  first,
  sec,
  def,
  containerStyle
}: {
  onSelect: any;
  first: string;
  sec: string;
  def?: any;
  containerStyle?: object
}) => {
  const [tabState, setTabState] = useState(def ? def : 0);
  const {t} = useTranslation();
  useEffect(() => {
    setTabState(def);
  }, [def]);
  return (
    <View style={[styles.tabsContainer, containerStyle]}>
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
          color={!tabState ? 'white' : 'primary'}
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
          {backgroundColor: tabState ? COLORS.primary : 'transparent'},
        ]}>
        <CustomText
          text={sec}
          color={tabState ? 'white' : 'primary'}
          fontFamily={tabState ? 'medium' : 'regular'}
        />
      </Pressable>
    </View>
  );
};
export default Select;

const styles = StyleSheet.create({
  tabsContainer: {
    width: 214,
    height: sh(44),
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderRadius: 22,
    padding: 5,
    flexDirection: 'row',
    marginBottom: sh(10),
  },
  tab: {
    width: '50%',
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
