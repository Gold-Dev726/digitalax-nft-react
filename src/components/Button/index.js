import React, { useEffect } from "react";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

function Button(props) {
  
  return (
    <IconButton aria-label="dark-light theme" onClick={switchTheme}>
      <Icon color="action" className="dark:text-yellow-200 text-green-400">brightness_medium</Icon>
    </IconButton>
  );
}

export default Button;
