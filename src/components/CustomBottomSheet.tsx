import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
  FC,
} from 'react';
import {KeyboardAvoidingView, Pressable, ScrollView, View} from 'react-native';
import {X} from '../assets/svg';
import {sh, sw} from '../constants/theme';
import Container from './container';

// import { Container } from './styles';
interface PropSheet {
  children?: ReactNode;
  onChange?: any;
  bottomSheetRef: any;
  onClose?: any;
  height?: any;
}

const CustomBottomSheet: FC<PropSheet> = ({
  bottomSheetRef,
  onChange,
  children,
  onClose,
  height,
}) => {
  const [sheetState, setSheetState] = useState(0);
  const snapPoints = useMemo(() => (height ? ['48%'] : ['41.2%']));

  const handleSheetChanges = useCallback((index: number) => {
    setSheetState(index);
  }, []);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );
  const navigation = useNavigation();
  return (
    <BottomSheet
      ref={bottomSheetRef}
      keyboardBehavior={'interactive'}
      keyboardBlurBehavior={'restore'}
      android_keyboardInputMode={'adjustResize'}
      index={-1}
      animateOnMount={true}
      snapPoints={snapPoints}
      detached={true}
      backdropComponent={renderBackdrop}
      handleStyle={{opacity: 0}}
      backgroundStyle={{
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
      onChange={handleSheetChanges}>
      <View
        // showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: sw(17),
        }}>
        <Pressable
          style={{zIndex: 400, padding: 5}}
          onPress={() => {
            onClose && onClose(true);
            bottomSheetRef.current.close();
            navigation.setOptions({
              tabBarStyle: {
                display: undefined,
                height: sh(82),
              },
            });
          }}>
          <X style={{alignSelf: 'flex-end'}} />
        </Pressable>
        {children}
      </View>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
