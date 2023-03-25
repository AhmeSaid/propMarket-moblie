import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {set} from 'immer/dist/internal';
import React, {FC, useMemo, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Pressable, View} from 'react-native';
import CompareBottomSheet from '../../components/CompareBottomSheet';
import CompareItem from '../../components/CompareItem';
import Absolute from '../../components/CustomAbsoluteView/Absolute';
import CustomText from '../../components/customText';
import Divider from '../../components/Divider';
import {sh} from '../../constants/theme';
import createStyles from './styles';

interface CompareViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Price (low to high)',
    img: require('../../../assets/image/landing.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Price (high to low)',
    img: require('../../../assets/image/landing.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a43f8-fbd91aa97f63',
    title: 'Bedrooms (low to high)',
    img: require('../../../assets/image/landing.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a74f8-fbd91aa97f63',
    title: 'Bedrooms (high to low)',
    img: require('../../../assets/image/landing.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd918aa97f63',
    title: 'Bathrooms (low to high)',
    img: require('../../../assets/image/landing.png'),
  },
];

const CompareView: FC<CompareViewProps> = ({navigation, route}) => {
  const styles = useMemo(() => createStyles(), []);
  const [compareData, setCompareData] = useState([]);
  const [bottomClose, setBottomClose] = useState(true);

  const bottom = useRef();
  const {t} = useTranslation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: t('Compare'),
      headerLeft: () => (
        <CustomText text="" fontFamily={'regular'} color={'primary'} />
      ),
      headerRight: () => (
        <Pressable
          style={{}}
          onPress={() => {
            // STOP
            // bottom.current.close();
            // setBottomClose(true);
          }}>
          <CustomText
            text={t('Close')}
            size={16}
            fontFamily={'regular'}
            color={'primary'}
          />
        </Pressable>
      ),
    });
  }, [navigation]);
  var add = item => {
    if (compareData.length != 5) {
      var data = [...compareData];
      data.push(item);
      setCompareData([...data]);
    }
  };
  var deleteItem = item => {
    var data = [...compareData];
    var result = data.filter(itemData => item != itemData);
    setCompareData(result);
    if (result.length == 0) {
      bottom.current.close();
      setBottomClose(true);
    }
  };

  return (
    <View style={styles.keyboardAvoiding}>
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
      {/* <Absolute style={styles.abs} />
      <FlatList
        // data={route?.params?.data ? route?.params?.data : [1, 1, 2, 4]}
        data={[1, 3, 2, 4]}
        renderItem={({item, index}) => (
          <CompareItem
            item={item}
            onPress={() => {
              var data = [...compareData];
              bottom.current.expand();
              setBottomClose(false);

              indexData = data?.findIndex((itemData: any) => itemData == item);
              if (indexData == -1) {
                add(item);
              } else {
                deleteItem(item);
              }
            }}
            data={compareData}
            index={index}
          />
        )}
        ListFooterComponent={() => (
          <>
            <Divider height={bottomClose ? sh(30) : sh(300)} />
          </>
        )}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      />
      <CompareBottomSheet
        closeBottom={res => {
          setBottomClose(true);
        }}
        bottom={bottom}
        compareData={compareData}
        onDelete={item => {
          deleteItem(item);
        }}
        navigation={navigation}
      /> */}
    </View>
  );
};

export default CompareView;
