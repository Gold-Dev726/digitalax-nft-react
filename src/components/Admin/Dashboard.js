import React from 'react';
import { InputBase, IconButton, Icon, Paper, Avatar, Typography } from '@material-ui/core';
import DefaultAvatar from "../../images/default_avatar.jpg"
import Product1 from "../../images/product1.gif"
import Product2 from "../../images/product2.gif"
import Product5 from "../../images/product5.png"


function Dashboard() {
  return (
    <div className="px-6 py-8 flex-col">
      <div className="w-full pr-6 flex justify-between items-center">
        <Paper component="form" elevation={2} color="primary" className="px-2 py-0.5 flex items-center w-1/2 rounded-3xl">
          <InputBase
            className="ml-2.5 flex-1 text-xs"
            placeholder="Search Creators NFTs"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton className="p-2" aria-label="search">
            <Icon color="action" className="text-md">search</Icon>
          </IconButton>
        </Paper>
        <Avatar alt="Gold Dev" src={DefaultAvatar} className="w-12 h-12" />
      </div>
      <div className="w-full pr-6 flex justify-between items-center">
        <Paper elevation={3} color="primary" className="p-0 m-0 rounded-2xl w-56">
          <img src={Product5} className="w-full rounded-xl" />
          <div className="flex py-1 pl-2.5 justify-between items-center">
            <Typography>1 Ethereum</Typography>
            <IconButton>
            <Icon className="text-xl leading-none text-red-600">favorite</Icon>
            </IconButton>
          </div>
          <div className="flex pb-5 px-2.5 justify-between items-center">
            <span className="text-xs">80k views · 3 days ago</span>
            <span className="text-xs">Pierce</span>
          </div>
        </Paper>

        <Paper elevation={3} color="primary" className="p-0 m-0 rounded-2xl w-56">
          <img src={Product1} className="w-full rounded-xl" />
          <div className="flex py-1 pl-2.5 justify-between items-center">
            <Typography>1 Ethereum</Typography>
            <IconButton>
            <Icon className="text-xl leading-none text-red-300">favorite</Icon>
            </IconButton>
          </div>
          <div className="flex pb-5 px-2.5 justify-between items-center">
            <span className="text-xs">80k views · 3 days ago</span>
            <span className="text-xs">Pierce</span>
          </div>
        </Paper>

        <Paper elevation={3} color="primary" className="p-0 m-0 rounded-2xl w-56">
          <img src={Product2} className="w-full rounded-xl" />
          <div className="flex py-1 pl-2.5 justify-between items-center">
            <Typography>1 Ethereum</Typography>
            <IconButton>
            <Icon className="text-xl leading-none text-red-300">favorite</Icon>
            </IconButton>
          </div>
          <div className="flex pb-5 px-2.5 justify-between items-center">
            <span className="text-xs">80k views · 3 days ago</span>
            <span className="text-xs">Pierce</span>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Dashboard;
