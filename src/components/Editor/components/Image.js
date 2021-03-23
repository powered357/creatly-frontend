import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useSelected, useFocused } from 'slate-react';

import { ImageStyled } from '../styles/EditorStyled';

export const Image = forwardRef(({ src, attributes, children }, ref) => {
  const selected = useSelected();
  const focused = useFocused();

  return (
    <div ref={ref} {...attributes}>
      <div contentEditable={false}>
        <ImageStyled src={src} isFocused={selected && focused} alt={src} />
      </div>
      {children}
    </div>
  );
});

Image.propTypes = {
  src: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Image.defaultProps = {
  attributes: {},
};
