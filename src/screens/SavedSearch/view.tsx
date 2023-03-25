import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, useEffect, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Pressable, View} from 'react-native';
import {Back} from '../../assets/svg';
import CustomText from '../../components/customText';
import Loader from '../../components/loader';
import LoaderJs from '../../components/LoaderJs';
import RenderVerticalItem from '../../components/renderFlatList/RenderVerticalItem';
import ViewShadow from '../../components/ViewShadow';
import {COLORS, sh, sw} from '../../constants/theme';
import {DATA} from '../../utils/constants';
import createStyles from './styles';
interface SavedSearchViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const SavedSearchView: FC<SavedSearchViewProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const {t} = useTranslation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: t('SavedSearch'),
      headerLeft: () => (
        <Pressable
          style={{marginHorizontal: 15, padding: 5}}
          onPress={() => navigation.goBack()}>
          <Back color={COLORS.primary} />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          style={{marginHorizontal: 15, padding: 5}}
          onPress={() => navigation.navigate('Compare')}>
          <CustomText
            text={t('Edit')}
            fontFamily={'regular'}
            color={'primary'}
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.keyboardAvoiding}>
      <FlatList
        data={[1, 1, 1, 1]}
        style={styles.flatList}
        renderItem={({item}) => (
          <RenderVerticalItem item={item} navigation={navigation} />
        )}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        ListFooterComponent={() => <View style={styles.footer} />}
      />
      <Pressable
        onPress={() => navigation.navigate('Map')}
        style={styles.bottom}>
        <CustomText text={t('Map')} color={'primary'} fontFamily={'regular'} />
      </Pressable>
    </View>
  );
};

export default SavedSearchView;
