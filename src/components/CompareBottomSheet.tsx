import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Delete} from '../assets/svg';
import {COLORS, sh, sw} from '../constants/theme';
import CustomBottomSheet from './CustomBottomSheet';
import CustomButton from './customButton';
import CustomText from './customText';

// import { Container } from './styles';

const CompareBottomSheet: React.FC = ({
  bottom,
  compareData,
  onDelete,
  navigation,
  closeBottom,
}) => {
  const [data, setData] = useState(compareData);
  useEffect(() => {
    setData(compareData);
  }, [compareData]);

  return (
    <CustomBottomSheet
      bottomSheetRef={bottom}
      onClose={() => closeBottom(true)}
      height={Platform.OS == 'android' ? 330 : 280}>
      <SafeAreaView>
        <View style={styles.textAndButton}>
          <CustomText
            text={'Select 2-5 homes to compare'}
            size={14}
            color="semiBlock"
          />
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.imgView}>
              <Image
                style={styles.img}
                source={require('../../assets/image/landing.png')}
              />
              <Pressable onPress={() => onDelete(item)} style={styles.icon}>
                <Delete />
              </Pressable>
            </View>
          )}
          horizontal
          alwaysBounceHorizontal={false}
          showsVerticalScrollIndicator={false}
        />
        <CustomButton
          onPress={() => {
            navigation.navigate('CompareDetails');
          }}
          disabled={compareData.length > 1 ? false : true}
          text="Compare"
          textColor="white"
          containerStyle={styles.button}
        />
      </SafeAreaView>
    </CustomBottomSheet>
  );
};

export default CompareBottomSheet;
const styles = StyleSheet.create({
  textAndButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: sh(16),
  },
  icon: {position: 'absolute', top: -20},
  button: {
    width: sw(135),
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    borderRadius: 10,
    marginTop: sh(19),
    alignSelf: 'center',
  },
  img: {
    width: sw(100),
    height: sw(100),
    marginHorizontal: 5,
    borderRadius: 10,
    alignSelf: 'center',
  },
  imgView: {marginTop: sh(13)},
});
