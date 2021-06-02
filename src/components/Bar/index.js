import React, { useEffect } from "react";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

function Footer(props) {
  const { width, height, color } = props;
  return (
    <div className={color == "primary" ? "bg-third" : "bg-fourth"} style={{ width, height: height ? height : "100%", zIndex: '0' }}>

    </div>
  );
}

export default Footer;
