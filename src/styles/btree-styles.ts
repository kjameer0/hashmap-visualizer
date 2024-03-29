import * as CSS from 'csstype';
export function nodeStyleGenerator(
  selected: number | null,
  leftChild: number,
  rightChild: number,
  parent: number,
  idx: number
) {
  if (selected === null) return {};
  const [selectBGColor, childBGColor, defaultBGColor, parentBGColor] = [
    '#6200ee',
    'skyblue',
    'transparent',
    'skyblue',
  ];
  const [selectBorderColor, childBorderColor, defaultBorderColor, parentBorderColor] = [
    'white',
    'skyblue',
    'red',
    'skyblue',
  ];
  const conditionalStyles = {
    borderColor: defaultBorderColor,
    backgroundColor: defaultBGColor,
  };
  if (idx === selected) {
    conditionalStyles.borderColor = selectBorderColor;
    conditionalStyles.backgroundColor = selectBGColor;
  } else if (idx === parent) {
    conditionalStyles.borderColor = parentBorderColor;
    conditionalStyles.backgroundColor = parentBGColor;
  } else if (idx === leftChild || idx === rightChild) {
    conditionalStyles.borderColor = childBorderColor;
    conditionalStyles.backgroundColor = childBGColor;
  }
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid red',
    borderRadius: '50%',
    padding: '1%',
    margin: '1% auto',
    overflow: 'hidden',
    ...conditionalStyles,
  };
  return styles;
}

export function outputDivStyles() {
  return {
    border: `1px solid gray`,
    display: 'flex',
  };
}
export const bTreeInputStyles = {
  display: 'inline-block',
  fontSize: '1.2rem',
  backgroundColor: 'transparent',
  border: '0px solid red',
  paddingTop: '.9rem',
  paddingBottom: '.9rem',
  borderTop: '1px solid gray',
  borderBottom: '1px solid gray',
  color: 'white',
};
export const bTreeInputDivStyles: CSS.Properties = {
  display: 'flex',
  flexBasis: '50%',
  flexDirection: 'column',
};
export const bTreeButtonStyles: CSS.Properties = { margin: '1% auto' };
