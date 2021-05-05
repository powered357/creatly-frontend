import escapeHtml from 'escape-html';
import { v4 as uuid } from 'uuid';
import { Text } from 'slate';

import { CodeHighlight } from 'COMPONENTS/CodeHighlight';

import { Element, Leaf } from '../components';

export const serializeToJsx = (node) => {
  if (Text.isText(node)) {
    const string = escapeHtml(node.text) || String.fromCharCode('U+FEFF');

    return (
      <Leaf key={uuid()} leaf={node}>
        {string}
      </Leaf>
    );
  }

  const children = node.children.map((item) => serializeToJsx(item));

  if (node.type === 'code') {
    const codeString = node.children.map((item) => item.children[0].text).join('\n');

    return <CodeHighlight key={uuid()}>{codeString}</CodeHighlight>;
  }

  return (
    <Element key={uuid()} element={node}>
      {children}
    </Element>
  );
};
