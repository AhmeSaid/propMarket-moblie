import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS, sh, sw} from '../constants/theme';
import {Daily} from '../utils/constants';
import Border from './Border';
import Absolute from './CustomAbsoluteView/Absolute';
import CustomBottomSheet from './CustomBottomSheet';
import CustomText from './customText';
import SortingComponent from './Sorting/SortingHome';

// import { Container } from './styles';

const SavedSearch: React.FC = ({
  bottomSheetRef,
  bottomSheetRefHeart,
  setClose,
}: {
  bottomSheetRef: any;
  bottomSheetRefHeart: any;
  setClose: any;
}) => {
  const {t} = useTranslation();
  const [daily, setDaily] = useState(false);
  const onClose = () => {
    setClose(true);
  };
  return (
    <CustomBottomSheet bottomSheetRef={bottomSheetRef}>
      <View style={styles.bottomSheet}>
        <View>
          <CustomText
            text={t('SavedSearch')}
            size={16}
            fontFamily={'bold'}
            style={styles.search}
          />
          <View style={styles.saved}>
            <View style={styles.nameView}>
              <CustomText
                text={t('Name')}
                size={14}
                fontFamily={'regular'}
                containerStyle={styles.name}
                // style={{flex: 1}}
              />
              <BottomSheetTextInput
                placeholder={t('Enter')}
                placeholderTextColor={COLORS.gray}
                style={styles.input}
              />
            </View>
            <Border style={styles.border} />

            <View style={styles.receive}>
              <CustomText
                text={t('ReceiveUpdates')}
                size={14}
                fontFamily={'regular'}
              />
              <Pressable onPress={() => setDaily(!daily)}>
                <CustomText
                  text={t('Daily')}
                  color={'primary'}
                  size={14}
                  fontFamily={'regular'}
                />
                {daily && (
                  <Absolute
                    style={{right: -sh(14), top: sh(40), width: sw(190)}}
                    children={
                      <ScrollView horizontal>
                        <FlatList
                          data={Daily}
                          renderItem={({item}) => (
                            <SortingComponent
                              style={{width: sw(190)}}
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
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          <Border style={styles.border} />
          <Pressable
            style={styles.button}
            onPress={() => {
              onClose();
              bottomSheetRef.current?.close();
              bottomSheetRefHeart.current.collapse();
            }}>
            <CustomText
              text={t('SaveSearch')}
              size={14}
              color={'primary'}
              fontFamily={'medium'}
            />
          </Pressable>
        </View>
      </View>
    </CustomBottomSheet>
  );
};

export default SavedSearch;
const styles = StyleSheet.create({
  bottomSheet: {
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 40,
  },
  abslute: {bottom: sh(45), width: sw(190)},
  sorting: {width: sw(190)},
  border: {width: '100%', marginBottom: sh(20)},
  border2: {width: '100%'},
  saved: {
    borderRadius: 3,
    borderWidth: 0.5,
    paddingHorizontal: sh(14),
    borderColor: COLORS.border,
    marginTop: sh(12),
  },
  nameView: {
    flexDirection: 'row',
    marginVertical: sh(12),
  },
  receive: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: sh(12),
  },
  button: {justifyContent: 'flex-end', alignItems: 'center'},
  input: {
    flex: 1,
    height: sh(20),
    padding: 0,
    textAlign: 'right',
    color: COLORS.primary,
  },
  search: {marginTop: sh(24)},
  name: {flex: 1},
});
