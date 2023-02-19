import React from 'react';
export const stringToArray = (str: string): string[] => {
  let start = 0;
  let end = str.length;
  if (str[0] === '[') start++;
  if (str[end - 1] === ']') end--;
  return str.slice(start, end).split(',');
};
//create random array of values between 0 and len
//may contain duplicates
export function generateRandomArray(len: number) {
  const res = Array(len);
  for (let i = 0; i < len; i++) {
    res[i] = String(Math.floor(Math.random() * 2 * len + 1));
  }
  return res;
}

//basic error message handler
export function produceErrorMessage(err: unknown) {
  let message = 'Unknown Error';
  if (err instanceof Error) {
    message = err.message;
  }
  reportError({ message });
  return message;
}

export function enterKeyDown(e: KeyboardEvent, button: HTMLElement) {
  try {
    if (!button) throw new Error('no button');
    if (e.key === 'Enter') {
      button.click();
    }
  } catch (error) {
    produceErrorMessage;
  }
}
