import React, {FC, ReactNode, useMemo, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';

import {useTranslation} from 'react-i18next';
import Container from '../../components/container';
import {Pressable, View} from 'react-native';
import CustomText from '../../components/customText';
import ViewShadow from '../../components/ViewShadow';
import {COLORS, sh, sw} from '../../constants/theme';
import {Back, Pin, SmallBack} from '../../assets/svg';
import {FlatList} from 'react-native-gesture-handler';
import RenderVerticalItem from '../../components/renderFlatList/RenderVerticalItem';
import RenderhorizontalItem from '../../components/HorizontalFlatList/RenderHorizontalFlatList';
import ViewRowSpace from '../../components/ViewRowSpace';
import {ViewRow} from '../../components/ViewRow';
import DiscoverItem from '../../components/DiscoverItem';
import Divider from '../../components/Divider';

interface DiscoverViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const DiscoverView: FC<DiscoverViewProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const [update, setUpdate] = useState(false);
  const {t} = useTranslation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: t('Updates'),
      headerLeft: () =>
        !update ? (
          <Pressable style={styles.back} onPress={() => navigation.goBack()}>
            <Back color={COLORS.primary} />
          </Pressable>
        ) : null,
      headerRight: () => (
        <Pressable
          style={styles.back}
          onPress={() => {
            setUpdate(!update);
          }}>
          {update ? (
            <CustomText color="primary" text={'Done'} />
          ) : (
            <Pin color={COLORS.primary} />
          )}
        </Pressable>
      ),
    });
  }, [update]);

  return (
    <Container style={styles.keyboardAvoiding}>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          marginTop: 200,
        }}>
        <CustomText
          size={20}
          color={'primary'}
          text={'coming soon...'}
          style={{alignSelf: 'center'}}
        />
      </View>
      {/* //stop */}
      {/* <ViewShadow>
        <CustomText
          text={'Saved Searches'}
          fontFamily={'bold'}
          containerStyle={styles.text}
          size={16}
        />
        <DiscoverItem update={update} />
        <Divider height={sh(22)} />
        <DiscoverItem update={update} />
        <Divider height={sh(14)} />
      </ViewShadow>
      <View style={styles.shadow} />

      <ViewShadow>
        <CustomText
          text={'Recommendations'}
          fontFamily={'bold'}
          containerStyle={styles.reco}
          size={16}
        />
        <DiscoverItem recommendations />
        <Divider height={sh(22)} />

        <DiscoverItem recommendations />
        <Divider height={sh(14)} />
      </ViewShadow> */}
    </Container>
  );
};

export default DiscoverView;
