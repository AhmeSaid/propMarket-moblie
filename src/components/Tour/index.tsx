import {t} from 'i18next';
import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Pressable, View} from 'react-native';
import CustomText from '../customText';
import createStyles from './styles';
import Carousel from 'react-native-snap-carousel';
import {COLORS, width} from '../../constants/theme';
import AvailableDateItem from '../AvailableDateItem';
import CustomButton from '../customButton';
import reactotron from 'reactotron-react-native';
import moment from 'moment';
import {useReservePropertyMutation} from '../../services/propService';

const Tour = ({data, onBookPress}: {data: any; onBookPress: () => void}) => {
  const styles = useMemo(() => createStyles(), []);

  const {
    container,
    line,
    title,
    visitText,
    timeContainer,
    timeItemContainer,
    confirmBtn,
    bottom,
    separate,
  } = styles;

  const [availableTime, setAvailableTime] = useState([]);
  const [selectedTimeId, setSelectedTimeId] = useState(-1);

  const [reserve] = useReservePropertyMutation();

  moment.locale();
  return (
    <View style={container}>
      <CustomText text={t('bookAndReceive')} size={16} fontFamily="regular" />
      <View style={line} />

      <CustomText
        text={t('chooseYourAppointment')}
        size={18}
        fontFamily="bold"
        containerStyle={title}
      />
      <View>
        <FlatList
          // layout="default"
          // inactiveSlideOpacity={1}
          // inactiveSlideScale={1}
          // onBeforeSnapToItem={(index: number) => {
          //   // setActiveIndex(index);
          // }}
          data={data}
          // sliderWidth={width}
          // itemWidth={104}
          renderItem={({item}: {item: any}) => (
            <AvailableDateItem
              item={item}
              onPress={() => {
                setSelectedTimeId(-1);
                setAvailableTime(item.slots);
              }}
            />
          )}
          horizontal
          ItemSeparatorComponent={() => <View style={separate} />}
        />
      </View>
      <CustomText
        text={t('timeSoltReservation')}
        size={13}
        fontFamily="regular"
        containerStyle={visitText}
      />

      {availableTime.length != 0 && (
        <>
          <CustomText
            text={availableTime.length + ' ' + t('availableSlots')}
            size={16}
            fontFamily="regular"
          />
          <View style={line} />

          <View style={bottom}>
            <View style={timeContainer}>
              {availableTime.map((item: any) => {
                return (
                  <Pressable
                    onPress={() => {
                      setSelectedTimeId(item.id);
                    }}
                    style={[
                      timeItemContainer,
                      {
                        backgroundColor:
                          selectedTimeId == item.id
                            ? COLORS.primary
                            : COLORS.lightBlue,
                      },
                    ]}>
                    <CustomText
                      text={moment(item?.start_date, 'HH:mm:ss').format(
                        'h:mm a',
                      )}
                      color={selectedTimeId == item.id ? 'white' : 'primary'}
                      size={14}
                      fontFamily="bold"
                    />
                  </Pressable>
                );
              })}
            </View>

            <CustomButton
              onPress={() => {
                reserve({slotId: selectedTimeId}).then(res => {});
                setSelectedTimeId(-1)
                setAvailableTime([])
                onBookPress();
              }}
              text={t('confirmBooking')}
              containerStyle={[
                confirmBtn,
                {
                  backgroundColor:
                    selectedTimeId == -1 ? COLORS.inactiveBtn : COLORS.primary,
                },
              ]}
              disabled={selectedTimeId == -1}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Tour;
