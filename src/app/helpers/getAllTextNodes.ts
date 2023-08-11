// here we expand the array, check the type, if this type is "TEXT" then put it in the array,
export const getAllTextNodes = (node: BaseNode, textNodes: TextNode[] = []) => {
  if (node.type === 'TEXT') {
    textNodes.push(node as TextNode);
  } else if ('children' in node) {
    //  and if there are children, then call the function again until we get all the text elements.
    //  This is the recursive function
    (node as FrameNode).children.forEach((child) => getAllTextNodes(child, textNodes));
  }
  return textNodes;
};
