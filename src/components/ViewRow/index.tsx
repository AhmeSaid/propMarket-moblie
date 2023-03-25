
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import styles from './styles';
type GradientViewProps = {
    children: React.ReactNode,
    style?: StyleProp<ViewStyle> | undefined;
}
export const ViewRow = ({
    children,
    style
}: GradientViewProps) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}