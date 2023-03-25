export const RemoveZero = numberSelected => {
  var numberWithoutZero = numberSelected;
  if (numberSelected[0] == 0) {
    numberWithoutZero = numberSelected.slice(1);
  }
  if (
    numberSelected[0] == 9 &&
    numberSelected[1] == 6 &&
    numberSelected[2] == 6
  ) {
    if (numberSelected[3] == 0) {
      numberWithoutZero = numberSelected.slice(4);
    } else {
      numberWithoutZero = numberSelected.slice(3);
    }
  }
  numberWithoutZero = '966' + numberWithoutZero;
  return numberWithoutZero;
};
