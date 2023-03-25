/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react";
import { View } from "react-native";
interface DividerProps {
  width?: any;
  height?: any;
  color?: any;
  margin?: any;
}

const Divider: FC<DividerProps> = ({ width, height, color, margin }) => {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: color,
        alignSelf: "center",
        marginVertical: margin,
      }}
    />
  );
};

export default Divider;
