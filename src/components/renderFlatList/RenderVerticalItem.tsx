import {NavigationProp, ParamListBase} from '@react-navigation/native';
import moment from 'moment';
import React, {FC, useMemo, useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {WidePng} from '../../assets/images';
import {RedHeart, Rooms, Shawr, Size} from '../../assets/svg';
import {COLORS, sw, width} from '../../constants/theme';
import {useAddAndRemoveFavMutation} from '../../services/propService';
import {setFavourites} from '../../store/slices/favSlice';
import CustomText from '../customText';
import LoaderJs from '../LoaderJs';
import createStyles from './styles';

interface VerticalProps {
  navigation?: NavigationProp<ParamListBase>;
  favScreen?: boolean;
  item?: object;
  icons?: any;
  onClick?: any;
}

const RenderVerticalItem: FC<VerticalProps> = ({
  navigation,
  favScreen,
  item,
  icons,
  onClick,
}) => {
  const styles = useMemo(() => createStyles(), []);
  const [fav, setFav] = useState(false);
  const [addAndRemove, {isLoading}] = useAddAndRemoveFavMutation();
  const dispatch = useDispatch();
  const FavouritesData = useSelector(state => state.Favourites.FavouritesData);
  var arr = [...FavouritesData];
  const searchIndex = FavouritesData?.findIndex(i => i == item?.id);
  const isSelected = searchIndex >= 0;

  return (
    <View style={styles.verticalViewContainer}>
      <Pressable
        onPress={() => {
          navigation &&
            navigation.navigate('Properity', {id: item?.id, favScreen});
        }}
        style={styles.flatListVertical}>
        <Image
          style={{width: width + 5, alignSelf: 'center'}}
          source={require('../../../assets/image/pro.png')}
        />
      </Pressable>
      {icons ? (
        <View style={styles.top}>{icons}</View>
      ) : (
        <Pressable
          onPress={() => {
            var id = {id: item?.id};
            addAndRemove({id}).then(res => {
              if (res.data) {
                // // FavouritesData.fil;

                if (isSelected) {
                  arr.splice(searchIndex, 1);
                  setFav(false);
                } else {
                  arr.push(item?.id);
                  setFav(true);
                }

                dispatch(setFavourites(arr));

                onClick && onClick(!fav);
              }
            });
          }}
          style={styles.top}>
          <RedHeart color={!isSelected ? COLORS.white : COLORS.orange} />
        </Pressable>
      )}

      <View style={styles.bottom}>
        <View style={styles.rowText}>
          <CustomText text={item?.price + ' SAR'} fontFamily="semiBold" />
          {item?.bedrooms_count && (
            <>
              <Rooms style={styles.icon} />
              <CustomText
                color="gray"
                size={12}
                text={item?.bedrooms_count}
                fontFamily={'regular'}
              />
            </>
          )}
          {item?.bathrooms_count && (
            <>
              <Shawr style={styles.icon} />
              <CustomText
                color="gray"
                size={12}
                text={item?.bathrooms_count}
                fontFamily={'regular'}
              />
            </>
          )}

          {item?.size && (
            <>
              <Image
                source={WidePng}
                style={{
                  height: 13,
                  width: 13,
                  marginLeft: sw(16),
                  marginRight: sw(4),
                }}
              />
              <CustomText
                color="gray"
                size={12}
                text={item?.size + ' sqm'}
                fontFamily={'regular'}
              />
            </>
          )}
        </View>

        <CustomText
          size={14}
          text={item?.address}
          fontFamily="medium"
          style={styles.text}
        />
        <CustomText
          fontFamily="regular"
          size={12}
          color={'gray'}
          text={moment(item?.createdAt, 'YYYYMMDD').fromNow()}
        />
      </View>
    </View>
  );
};
export default RenderVerticalItem;
