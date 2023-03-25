import React, {FC, useMemo, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';

import {useTranslation} from 'react-i18next';
import Container from '../../components/container';
import {FlatList, Image, View, Pressable, ScrollView} from 'react-native';
import CustomText from '../../components/customText';
import {COLORS, sh} from '../../constants/theme';
import {ArrowDown, Back, CheckBox, Saved, Search} from '../../assets/svg';
import CustomButton from '../../components/customButton';
import RenderVerticalItem from '../../components/renderFlatList/RenderVerticalItem';
import {DATA} from '../../utils/constants';
import SortingComponent from '../../components/Sorting/SortingHome';
interface SavedViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const SavedView: FC<SavedViewProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const [show, setShow] = useState(false);

  const {t} = useTranslation();

  return (
    <View style={styles.keyboardAvoiding}>
      <Container>
        <View style={styles.rowView}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Back />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('MapView');
            }}
            style={styles.map}>
            <CustomText color={'primary'} containerStyle={styles.mapText}>
              {'Map'}
            </CustomText>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate('Compare');
            }}
            style={styles.map}>
            <CustomText color={'primary'} containerStyle={styles.mapText}>
              {'Compare'}
            </CustomText>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            setShow(!show);
          }}
          style={styles.row}>
          <CustomText color={'semiBlock'} containerStyle={styles.shortText}>
            {'Sorting by'}
          </CustomText>
          <ArrowDown style={styles.arrowDown} />
        </Pressable>
        <ScrollView horizontal style={{alignSelf: 'center'}}>
          <FlatList
            data={DATA}
            renderItem={() => <RenderVerticalItem navigation={navigation} />}
            style={{width: '100%'}}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>

        <View style={styles.button}>
          <CustomButton containerStyle={styles.seeMore} text={t('See More')} />
        </View>

        {show && (
          <View style={styles.sortView}>
            <ScrollView horizontal>
              <FlatList
                data={DATA}
                renderItem={item => <SortingComponent item={item.item} />}
                style={styles.flatlist}
                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}
              />
            </ScrollView>
          </View>
        )}
      </Container>
    </View>
  );
};

export default SavedView;
