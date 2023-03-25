import { t } from 'i18next';
import React, {useMemo} from 'react';
import {Text} from 'react-native';
import CustomText from '../customText';
import createStyles from './styles';

const LogoText = ({
  propColor='primary',
  marketColor = 'orange'
}: {
  propColor?: string;
  marketColor?: string;
}) => {
  const styles = useMemo(() => createStyles(), []);

  const {propMarketText} = styles;

  return (
    <Text style={propMarketText}>
          <CustomText
            size={18}
            text={t('prop')}
            color={propColor}
            fontFamily={'bold'}
          />
          <CustomText
            size={18}
            text={t('market')}
            color={marketColor}
            fontFamily={'bold'}
          />
        </Text>
  );
};

export default LogoText;
