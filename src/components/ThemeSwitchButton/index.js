import React, { useEffect } from "react";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

function ThemeSwitchButton(props) {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark')
    } else if (localStorage.theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })
  const switchTheme = () => {
    let htmlClasses = document.documentElement.classList;
    if (localStorage.theme == 'dark') {
      htmlClasses.remove('dark');
      localStorage.removeItem('theme')
    } else {
      htmlClasses.add('dark');
      localStorage.theme = 'dark';
    }
  }
  return (
    <IconButton aria-label="dark-light theme" onClick={switchTheme}>
      <Icon color="action" className="dark:text-yellow-200 text-green-400">brightness_medium</Icon>
    </IconButton>
  );
}

export default ThemeSwitchButton;
