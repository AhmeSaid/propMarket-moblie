import React, {FC, useMemo, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {_retrieveData} from '../../utils/storageController';
import createStyles from './style';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import StepsBar from '../../components/StepsBar';
import CustomInput from '../../components/customInput';
import {boxShadow, COLORS} from '../../constants/theme';
import {SearchIcon} from '../../assets/svg';
import CustomButton from '../../components/customButton';
import {useDispatch} from 'react-redux';
import {setMoving} from '../../store/slices/movingSlice';

interface LocationSelectProps {
  navigation: NavigationProp<ParamListBase>;
}

const LocationSelect: FC<LocationSelectProps> = ({navigation}) => {
  const totalSteps = 5;

  const styles = useMemo(() => createStyles(), []);

  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [isCircle, setIsCircle] = useState(true);

  const {
    container,
    locationInputsContainer,
    fromToView,
    circleView,
    lineView,
    squareView,
    inputs,
    input,
    fromInput,
    resultContainer,
    nextBtn,
  } = styles;

  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  return (
    <View style={container}>
      <StepsBar
        title={t('selectYourLocation')}
        totalSteps={totalSteps}
        currentStep={1}
      />

      <View style={[locationInputsContainer, boxShadow()]}>
        <View style={fromToView}>
          <View
            style={[
              circleView,
              {backgroundColor: isCircle ? COLORS.black : 'transparent'},
            ]}
          />
          <View style={lineView} />
          <View
            style={[
              squareView,
              {backgroundColor: isCircle ? 'transparent' : COLORS.black},
            ]}
          />
        </View>
        <View style={inputs}>
          <CustomInput
            inputStyle={[input, fromInput]}
            onFocus={() => {
              setIsCircle(true);
            }}
            placeholder={t('locationFrom')}
            leftIcon={<SearchIcon />}
            onChangeText={text => {
              setFrom(text);
            }}
            maxLength={50}
          />
          <CustomInput
            inputStyle={input}
            onFocus={() => {
              setIsCircle(false);
            }}
            placeholder={t('locationTo')}
            leftIcon={<SearchIcon />}
            onChangeText={text => {
              setTo(text);
            }}
            maxLength={50}
          />
        </View>
      </View>

      <View style={resultContainer}>
        <CustomButton
          disabled={from == '' || to == ''}
          text={t('next')}
          containerStyle={nextBtn}
          onPress={() => {
            dispatch(setMoving({fromLocation: from, toLocation: to}));
            navigation.navigate('PropTypeSelect');
          }}
          activeColor={COLORS.primary}
        />
      </View>
    </View>
  );
};

export default LocationSelect;
