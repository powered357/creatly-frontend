import PropTypes from 'prop-types';
import { useSlate } from 'slate-react';

import { Icon } from 'UI-KIT';

import { ToolbarButtonStyled } from '../styles/EditorStyled';

export const CustomButton = ({ children, icon, onClick, isActive }) => {
  const editor = useSlate();

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <ToolbarButtonStyled onMouseDown={handleClick} isActive={isActive?.(editor)}>
      {icon && <Icon name={icon} color={isActive?.(editor) ? 'black' : 'grey'} />}
      {children}
    </ToolbarButtonStyled>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.func,
};

CustomButton.defaultProps = {
  children: null,
  icon: null,
  isActive: null,
};
