import { getAllTextNodes } from '../app/helpers/getAllTextNodes';

figma.showUI(__html__);
figma.ui.resize(500, 500);

figma.on('selectionchange', () => {
  const selectedObjects = figma.currentPage.selection;

  const textNodes = selectedObjects.reduce((acc: TextNode[], object) => {
    acc.push(...getAllTextNodes(object));

    return acc;
  }, []);

  // const textNodesMap = selectedObjects.map((item) => getAllTextNodes(item)).flat();

  if (textNodes.length > 0) {
    const filteredTextNodes = textNodes.filter((textNode) => {
      if (typeof textNode.fontSize === 'number') {
        const fontSize = textNode.fontSize;
        return fontSize < 10;
      }
      return false;
    });
    console.log('отфильтрованный', filteredTextNodes);
    console.log('нефильтрованный', textNodes);

    figma.ui.postMessage({
      type: 'display-text-nodes',
      frameName: selectedObjects[0].name,
      textNodes: filteredTextNodes.map(({ id, name, characters }) => {
        return { id, name, text: characters };
      }),
    });

    figma.ui.onmessage = (msg) => {
      if (msg.type === 'scanFrame') {
        filteredTextNodes.forEach(({ characters: text, name }) => {
          console.log(name);

          console.log('Text:', text);
        });
      } else {
        console.log('No text nodes selected');
      }
    };
  }
});
