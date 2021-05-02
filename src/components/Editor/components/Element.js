import PropTypes from 'prop-types';

import { Link } from 'UI-KIT';

import { Code, Heading1, Heading2, Blockquote, BulletedList, NumberedList, EditorText } from '../styles/EditorStyled';

import { Image } from './Image';

export const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'code':
      return <Code {...attributes}>{children}</Code>;
    case 'code-item':
      return <div {...attributes}>{children}</div>;
    case 'link':
      return (
        <Link {...attributes} to={element.url} external>
          {children}
        </Link>
      );
    case 'image':
      return (
        <Image attributes={attributes} src={element.url}>
          {children}
        </Image>
      );
    case 'heading-one':
      return <Heading1 {...attributes}>{children}</Heading1>;
    case 'heading-two':
      return <Heading2 {...attributes}>{children}</Heading2>;
    case 'block-quote':
      return <Blockquote {...attributes}>{children}</Blockquote>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'numbered-list':
      return <NumberedList {...attributes}>{children}</NumberedList>;
    case 'bulleted-list':
      return <BulletedList {...attributes}>{children}</BulletedList>;
    default:
      return <EditorText {...attributes}>{children}</EditorText>;
  }
};

Element.propTypes = {
  attributes: PropTypes.object,
  children: PropTypes.node.isRequired,
  element: PropTypes.object.isRequired,
};

Element.defaultProps = {
  attributes: {},
};
