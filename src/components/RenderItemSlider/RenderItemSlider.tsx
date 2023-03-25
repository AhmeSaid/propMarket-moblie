import {useMemo, useState} from 'react';
import {Pressable, View} from 'react-native';
import {CheckBox, EmptyBox} from '../../assets/svg';
import CustomText from '../customText';
import createStyles from './styles';

const RenderItemSlider = ({item, index}) => {
  const styles = useMemo(() => createStyles(), []);

  const [icons, setIcons] = useState(true);

  return (
    <View style={styles.rowShow}>
      <Pressable
        onPress={() => {
          setIcons(!icons);
        }}>
        {icons ? <CheckBox /> : <EmptyBox />}
      </Pressable>
      <CustomText color={'black'} containerStyle={styles.flatListText}>
        {item.title}
      </CustomText>
    </View>
  );
};

export default RenderItemSlider;
