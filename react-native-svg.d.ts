import {ImageSourcePropType} from 'react-native';
import 'react-native-svg';
declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
    xmlnsSvgjs?: string;
    paintOrder?: string;
    className?: string;
    style?: {enableBackground?: string; transform?: {rotate: string}[]};
    xmlSpace?: string;
  }

  export interface GProps {
    filter?: string;
  }

  export interface PathProps {
    paintOrder?: string;
  }

  export interface ImageProps {
    xlinkHref?: ImageSourcePropType;
  }
}
