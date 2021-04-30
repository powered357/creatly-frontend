import escapeHtml from 'escape-html';
import { v4 as uuid } from 'uuid';
import { Text } from 'slate';

import { Element, Leaf } from '../components';

export const serialize = (node) => {
  if (Text.isText(node)) {
    const string = escapeHtml(node.text) || String.fromCharCode('U+FEFF');

    return (
      <Leaf key={uuid()} leaf={node}>
        {string}
      </Leaf>
    );
  }

  // TODO: parse code & use highlighting
  const children = node.children.map((item) => serialize(item));

  return (
    <Element key={uuid()} element={node}>
      {children}
    </Element>
  );
};
