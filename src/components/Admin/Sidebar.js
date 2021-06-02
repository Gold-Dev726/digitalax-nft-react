import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

import {
  HomeOutlined, 
  WhatshotOutlined,
  AccountBalanceWalletOutlined,
  FolderOutlined,
  RestorePageOutlined,
  AlarmOutlined,
  FavoriteBorderOutlined,
  MusicNoteOutlined,
  SportsEsportsOutlined,
  ExpandMoreOutlined
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  selected: {
    color: "red",
    background: "transparent"
  },
}));

const MenuList = [
  {
    icon: <HomeOutlined />,
    label: 'Home',
    path: 'home'
  },
  {
    icon: <WhatshotOutlined />,
    label: 'Top Creators',
    path: 'top-creators'
  },
  {
    icon: <AccountBalanceWalletOutlined />,
    label: 'Wallet',
    path: 'wallet'
  },
  {
    icon: <AccountBalanceWalletOutlined />,
    label: 'Ethereum Wallets',
    path: 'eth-wallets'
  },
  {
    icon: <FolderOutlined />,
    label: 'Saved',
    path: 'saved'
  },
  {
    icon: <RestorePageOutlined />,
    label: 'History',
    path: 'history'
  },
  {
    icon: <AlarmOutlined />,
    label: 'Watch later',
    path: 'watch-later'
  },
  {
    icon: <FavoriteBorderOutlined />,
    label: 'Liked Creators',
    path: 'liked-creators'
  },
  {
    icon: <MusicNoteOutlined />,
    label: 'Music Creators',
    path: 'music-creators'
  },
  {
    icon: (<SportsEsportsOutlined />),
    label: 'Game Creators',
    path: 'game-creators'
  },
  {
    icon: <ExpandMoreOutlined />,
    label: 'Show more',
    // path: 'home'
  },
]

function Sidebar() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="w-52 bg-white shadow-md">
      <div className="h-16 text-center text-xl my-auto">Rose</div>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        {MenuList.map((listItem, index) => (
          <ListItem
          classes={{selected: "bg-transparent text-red-500"}}
            className="pl-6"
            button
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
          >
            <ListItemIcon className={`min-w-max mr-2.5 text-gray-400 ${selectedIndex === index && "text-red-500"}`}>
              {listItem.icon}
            </ListItemIcon>
            <ListItemText primary={listItem.label} className="text-sm" />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItem>
      </List> */}
    </div>
  );
}

export default Sidebar;
