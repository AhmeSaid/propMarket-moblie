import React, {useEffect, useRef, memo} from 'react';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import Animated, {
  EasingNode,
  FadeIn,
  FadeInDown,
  FadeInLeft,
} from 'react-native-reanimated';
type FadingViewProps = {
  children: React.ReactNode;
  height?: number;
  style?: StyleProp<ViewStyle>;
  duration?: number;
  durationHieght?: number;
  inOrOut?: boolean;
};
export const FadingView = memo(
  ({
    children,
    height,
    durationHieght,
    style,
    duration,
    inOrOut,
  }: FadingViewProps) => {
    let opacity = useRef(new Animated.Value(0));
    let _height = useRef(new Animated.Value(0));

    useEffect(() => {
      Animated.timing(opacity.current, {
        toValue: 1,
        duration: duration || 1000,
        easing: EasingNode.cubic,
      }).start();
      if (height)
        Animated.timing(_height.current, {
          toValue: height,
          duration: durationHieght || 700,
          easing: EasingNode.elastic(),
        }).start();
    }, []);
    return (
      <Animated.View
        entering={
          inOrOut ? FadeIn.duration(duration) : FadeInDown.duration(duration)
        }
        style={[
          {
            // opacity: opacity.current,
            overflow: 'hidden',
          },
          style,
          height ? {height: _height.current} : null,
        ]}>
        {children}
      </Animated.View>
    );
  },
);
