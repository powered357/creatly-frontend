import PropTypes from 'prop-types';
import { useSlate } from 'slate-react';

import { useEditor } from '../hooks/useEditor';
import { ToolbarButtonStyled } from '../styles/EditorStyled';

export const ToolbarButton = ({ format, children, isMark }) => {
  const editor = useSlate();
  const { isBlockActive, isMarkActive, toggleBlock, toggleMark } = useEditor(editor);

  const handleToggleMark = (formatType) => (e) => {
    e.preventDefault();
    toggleMark(formatType);
  };

  const handleToggleBlock = (formatType) => (e) => {
    e.preventDefault();
    toggleBlock(formatType);
  };

  return (
    <ToolbarButtonStyled
      onMouseDown={isMark ? handleToggleMark(format) : handleToggleBlock(format)}
      isActive={isMark ? isMarkActive(format) : isBlockActive(format)}
    >
      {children}
    </ToolbarButtonStyled>
  );
};

ToolbarButton.propTypes = {
  format: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isMark: PropTypes.bool,
};

ToolbarButton.defaultProps = {
  isMark: false,
};
