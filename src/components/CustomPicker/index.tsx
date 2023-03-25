import {Picker} from '@react-native-picker/picker';
import {t} from 'i18next';
import React, {useMemo, useState} from 'react';
import {Pressable, View} from 'react-native';
import CustomText from '../customText';
import createStyles from './styles';

const CustomPicker = ({
  list,
  onClose,
  onDone
}: {
  list: Array<string>;
  onClose: () => void;
  onDone: () => void
}) => {
  const styles = useMemo(() => createStyles(), []);

  const [selectedValue, setSelectedValue] = useState(list[0]);
  const {container, picker, doneContainer, doneBtn} = styles;

  return (
    <Pressable onPress={onClose} style={container}>
      <Pressable>
        <View style={doneContainer}>
          <Pressable onPress={() => {onDone(selectedValue)}} style={doneBtn}>
            <CustomText
              size={14}
              fontFamily={'bold'}
              color={'primary'}
              text={t('done')}
            />
          </Pressable>
        </View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={picker}>
          {list.map(item => {
            return <Picker.Item label={item} value={item} />;
          })}
        </Picker>
      </Pressable>
    </Pressable>
  );
};

export default CustomPicker;
