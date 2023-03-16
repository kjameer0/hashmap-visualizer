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
export function treeInputStyles() {
  return {};
}
