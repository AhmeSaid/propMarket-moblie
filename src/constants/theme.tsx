import {Dimensions, NativeModules} from 'react-native';

export const {width, height} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
export const StatusHeight = StatusBarManager.HEIGHT;
export const COLORS = {
  black: '#000000',
  white: '#ffffff',
  primary: '#123972',
  background: '#FFFFFF',
  secondary: '#223549',
  gray: '#707070',
  semiGray: '#D2d2d2',
  semiBlock: '#041631',
  inactive: '#CFCFCF',
  border: '#9B9B9B',
  inactiveBtn: '#EFEFEF',
  orange: '#D64100',
  shadow: '#0000000D',
  flbg: '#FAFAFA',
  red: '#D64100',
  lightBlue: '#E4F2FB',
  grayBackground: '#F0F4F7',
  lightGray: '#B9B9B9',
  blue: '#007DFD',
  inActive2: '#FBFBFB',
  lightBlue2: '#375888',
  green: '#02B561',
  

  whiteRgba: (opacity: number) => 'rgba(255, 255, 255,' + opacity + ' )',
  blackRgba: (opacity: number) => 'rgba(0, 0, 0,' + opacity + ' )',
  orangeRgba: (opacity: number) => 'rgba(214, 65, 0, ' + opacity + ' )'
};

export const SIZES = {
  base: 8,
  font: 14,
  smallRadius: 8,
  bigRadius: 3,
  padding: 30,
  smallPadding: 16,
  paddingTop: 16,
  paddingBottom: 36,

  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,

  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  width,
  height,
};

const guidelindeBaseWidth = 428;
const guidelindeBaseHeight = 926;

type WidthTypes = (size: number) => number;

export const sw: WidthTypes = size =>
  (SIZES.width / guidelindeBaseWidth) * size;
export const sh: WidthTypes = size =>
  (SIZES.height / guidelindeBaseHeight) * size;

type BoxShadowTypes = (
  radius?: number,
  color?: string,
  offset?: {height?: number; width?: number},
  opacity?: number,
) => object;

export const boxShadow: BoxShadowTypes = (
  radius = 13,
  color = COLORS.shadow,
  offset = {height: 3, width: 3},
  opacity = .8,
) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
};

const appTheme = {COLORS, SIZES, sh, sw, boxShadow};
export default appTheme;
