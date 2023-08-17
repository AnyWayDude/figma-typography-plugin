import { getAllTextNodes } from '../app/helpers/getAllTextNodes';

figma.showUI(__html__);
figma.ui.resize(500, 500);

figma.on('selectionchange', () => {
  const selectedObjects = figma.currentPage.selection;

  const textNodes = selectedObjects.reduce((acc: TextNode[], object) => {
    acc.push(...getAllTextNodes(object));
    return acc;
  }, []);

  const frameName = selectedObjects && selectedObjects[0] ? selectedObjects[0].name : null;

  figma.ui.postMessage({
    //send message to UI
    type: 'display-text-nodes',
    frameName: frameName,
    textNodes: textNodes.map(({ id, name, characters, fontSize }) => {
      return { id, name, text: characters, fontSize };
    }),
  });
});
