import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, ReactNode, useMemo, useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {RedHeart, Rooms, Shawr} from '../../assets/svg';
import {COLORS, sh, sw} from '../../constants/theme';
import {useAddAndRemoveFavMutation} from '../../services/propService';
import CustomText from '../customText';
import {ViewRow} from '../ViewRow';
import createStyles from './styles';

interface HorizontalProps {
  navigation?: NavigationProp<ParamListBase>;
  imgStyle?: object;
  containerStyle?: object;
  overViewStyle?: object;
  num?: number;
  children?: ReactNode;
  leftIcon?: ReactNode;
  renderComponent?: ReactNode;
  item: object;
  favScreen: boolean;
}

const RenderhorizontalItem: FC<HorizontalProps> = ({
  navigation,
  containerStyle,
  imgStyle,
  overViewStyle,
  renderComponent,
  item,
  favScreen,
}) => {
  const styles = useMemo(() => createStyles(), []);
  const [addAndRemove] = useAddAndRemoveFavMutation();
  const [fav, setFav] = useState(favScreen ? false : true);

  return (
    <Pressable
      onPress={() => navigation && navigation.navigate('Properity')}
      style={[styles.horizontalView, {...containerStyle}]}>
      <Image
        style={[styles.horizontalImg, {...imgStyle}]}
        source={require('../../../assets/image/pro.png')}
      />
      <Pressable
        onPress={() => {
          // var id = {id: item?.id};
          // addAndRemove({id}).then(res => {
          //   if (res.data) {
          //     console.log(res.data);

          setFav(!fav);
          // }
          // });
        }}
        style={styles.top}>
        <RedHeart color={fav ? COLORS.white : COLORS.orange} />
      </Pressable>

      <View style={styles.bottom}>
        <View style={styles.rowText}>
          <CustomText text={'1350.000 SAR'} fontFamily="semiBold" />
          <CustomText
            size={12}
            text={'Ahmed St Oman, KSA 11213'}
            fontFamily="medium"
            style={{marginBottom: sh(8), marginTop: sh(8)}}
          />
          <ViewRow>
            <Rooms style={styles.icon} />
            <CustomText
              color="gray"
              size={12}
              text={'30'}
              fontFamily={'semiBold'}
            />
            <Shawr style={[styles.icon, {marginLeft: sw(10)}]} />
            <CustomText
              color="gray"
              size={12}
              text={'hi'}
              fontFamily="semiBold"
            />
            <Shawr style={styles.share} />
            <CustomText
              color="gray"
              size={12}
              text={'387 sqm'}
              fontFamily="semiBold"
            />
          </ViewRow>
        </View>
      </View>
    </Pressable>
  );
};
export default RenderhorizontalItem;
