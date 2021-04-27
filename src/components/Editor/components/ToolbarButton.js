import PropTypes from 'prop-types';
import { useSlate } from 'slate-react';

import { Icon } from 'UI-KIT';

import { useEditor } from '../hooks/useEditor';
import { ToolbarButtonStyled } from '../styles/EditorStyled';

export const ToolbarButton = ({ format, children, icon, isMark }) => {
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

  const handleToggle = isMark ? handleToggleMark : handleToggleBlock;

  const isActive = isMark ? isMarkActive : isBlockActive;

  return (
    <ToolbarButtonStyled onMouseDown={handleToggle(format)} isActive={isActive(format)}>
      {icon && <Icon name={icon} color={isActive(format) ? 'black' : 'grey'} />}
      {children}
    </ToolbarButtonStyled>
  );
};

ToolbarButton.propTypes = {
  format: PropTypes.string.isRequired,
  children: PropTypes.node,
  icon: PropTypes.string,
  isMark: PropTypes.bool,
};

ToolbarButton.defaultProps = {
  children: null,
  icon: null,
  isMark: false,
};
