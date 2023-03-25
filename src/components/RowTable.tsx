import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {COLORS, sh, sw} from '../constants/theme';
import CustomText from './customText';

// import { Container } from './styles';

const RowTable: React.FC = ({
  Data,
  style,
  onChange,
  value,
}: {
  Data: object;
  style: any;
  onChange: any;
  value: any;
}) => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState(value ?? []);
  const [color, setColor] = useState(value ?? null);

  const {t} = useTranslation();
  useEffect(() => {
    onChange(color);
  }, [color]);

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          if (color == item) {
            setColor(-1);
          } else {
            setColor(item);
          }
        }}
        style={[
          styles.render,
          {
            backgroundColor: color == item ? COLORS.primary : null,
            borderRightWidth: index == Data.length - 1 ? 0 : 0.5,
            borderColor: color == item ? COLORS.primary : COLORS.gray,
          },
          style,
        ]}>
        <CustomText
          color={color == item ? COLORS.white : COLORS.gray}
          text={t(item)}
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        key={'*'}
        horizontal
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={renderItem}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default React.memo(RowTable);
const styles = StyleSheet.create({
  render: {
    paddingVertical: sh(10),

    paddingHorizontal: sw(10),
  },
  container: {
    marginTop: sh(20),
    borderWidth: 0.5,
    alignItems: 'center',
    marginBottom: sh(15),
    flex: 1,
    alignSelf: 'flex-start',
    borderRadius: 3,
    borderColor: 'gray',
    marginHorizontal: sw(1),
  },
});
