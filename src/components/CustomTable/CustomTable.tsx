import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, ReactNode, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, View} from 'react-native';
import CustomText from '../customText';
import {COLORS, sh, sw, width} from '../../constants/theme';
import createStyles from './styles';
import Row from '../Row';
import RowWithImage from '../RowWithImage';

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
interface CustomTableProps {
  row?: ReactNode;
  header?: any;
  data?: [];
}

const CustomTable: FC<CustomTableProps> = ({row, header, data}) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <FlatList
      data={data ? data : DATA}
      ListHeaderComponent={
        header && (
          <View style={styles.headerStyle}>
            <CustomText size={20} text={'Interior'} color={'semiBlock'} />
          </View>
        )
      }
      renderItem={() => (
        <View style={styles.container}>
          {row ? (
            <Row
              firstText={'Home Type'}
              secText={'155X Ahmed St Oman, KSA 11213'}
              thirdText={'155X Ahmed St Oman, KSA 11213'}
            />
          ) : (
            <RowWithImage
              firstText={'Home Type'}
              secText={'155X Ahmed St Oman, KSA 11213'}
              thirdText={'155X Ahmed St Oman, KSA 11213'}
            />
          )}
        </View>
      )}
      alwaysBounceHorizontal={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CustomTable;
