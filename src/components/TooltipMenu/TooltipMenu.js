import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Icon } from 'UI-KIT';

import { StyledIcon } from './styles/TooltipMenuStyled';

export const TooltipMenu = ({ menuItems, moduleId, published, iconName, iconSize }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (action) => () => {
    if (action) action(moduleId);
    setAnchorEl(null);
  };

  const itemTitle = (title) => {
    if (title === 'Опубликовать' && published) {
      return 'Скрыть';
    }
    return title;
  };

  return (
    <>
      <StyledIcon onClick={handleClick}>
        <Icon size={iconSize} name={iconName} />
      </StyledIcon>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {menuItems.map(({ title, action }) => (
          <MenuItem key={title} onClick={handleItemClick(action)}>
            {itemTitle(title)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

TooltipMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func,
    }),
  ).isRequired,
  moduleId: PropTypes.string.isRequired,
  published: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
};

TooltipMenu.defaultProps = {
  published: false,
  iconSize: 16,
};
