import { MyTextNode } from '../types';

export const filterTextNodes = (textNodes: MyTextNode[], maxFontSize: number) => {
  return textNodes.filter((textNode) => {
    if (typeof textNode.fontSize === 'number') {
      const fontSize = textNode.fontSize;
      return fontSize < maxFontSize;
    }
    return false;
  });
};
