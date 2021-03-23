import PropTypes from 'prop-types';

import { Link } from 'UI-KIT';

import { Heading1, Heading2, Blockquote, BulletedList, NumberedList, EditorText } from '../styles/EditorStyled';

import { Image } from './Image';

export const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'image':
      return (
        <Image attributes={attributes} src={element.url}>
          {children}
        </Image>
      );
    case 'link':
      return (
        <Link {...attributes} to={element.url} external>
          {children}
        </Link>
      );
    case 'block-quote':
      return <Blockquote {...attributes}>{children}</Blockquote>;
    case 'bulleted-list':
      return <BulletedList {...attributes}>{children}</BulletedList>;
    case 'heading-one':
      return <Heading1 {...attributes}>{children}</Heading1>;
    case 'heading-two':
      return <Heading2 {...attributes}>{children}</Heading2>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'numbered-list':
      return <NumberedList {...attributes}>{children}</NumberedList>;
    default:
      return <EditorText {...attributes}>{children}</EditorText>;
  }
};

Element.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.object.isRequired,
};
