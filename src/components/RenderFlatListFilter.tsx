import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, StyleSheet, View} from 'react-native';
import {CheckIcon} from '../assets/svg';
import {COLORS} from '../constants/theme';
import CustomText from './customText';


const RenderFlatListFilter = ({
  item,
  onSelect,
  value,
}: {
  item: string;
  onSelect: any;
  value?: any;
}) => {
  const [select, setSelect] = useState(
    value?.includes(item) ? value.includes(item) : false,
  );
  const {t} = useTranslation();
  return (
    <View style={styles.flatlistRender}>
      <Pressable
        style={{paddingVertical: 10}}
        onPress={() => {
          setSelect(!select);
          onSelect(item);
        }}>
        <CustomText
          text={t(item)}
          leftIcon={
            <View
              style={[
                styles.select,
                {backgroundColor: select ? COLORS.primary : COLORS.white},
              ]}>
              <CheckIcon />
            </View>
          }
          color="black"
          size={14}
          fontFamily="regular"
          containerStyle={styles.text}
        />
      </Pressable>
    </View>
  );
};

export default React.memo(RenderFlatListFilter);
const styles = StyleSheet.create({
  flatlistRender: {
    flex: 1,
  },
  text: {
    flex: 1,
  },
  select: {
    height: 18,
    width: 18,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: COLORS.inactive,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
