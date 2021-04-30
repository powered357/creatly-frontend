import PropTypes from 'prop-types';

import { Code } from '../styles/EditorStyled';

export const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <Code>{children}</Code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

Leaf.propTypes = {
  attributes: PropTypes.object,
  children: PropTypes.node.isRequired,
  leaf: PropTypes.object.isRequired,
};

Leaf.defaultProps = {
  attributes: {},
};
