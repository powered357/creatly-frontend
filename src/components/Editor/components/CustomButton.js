import PropTypes from 'prop-types';
import { useSlate } from 'slate-react';

import { ToolbarButtonStyled } from '../styles/EditorStyled';

export const CustomButton = ({ children, onClick, isActive }) => {
  const editor = useSlate();

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <ToolbarButtonStyled onMouseDown={handleClick} isActive={isActive?.(editor)}>
      {children}
    </ToolbarButtonStyled>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.func,
};

CustomButton.defaultProps = {
  isActive: null,
};
