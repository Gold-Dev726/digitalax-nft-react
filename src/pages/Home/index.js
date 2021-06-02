import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Modal from '../../components/Modal';

function Home(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="flex flex-col">
      <div className="relative" style={{ height: "976px" }} id="parentCo">
        <img src="/images/banner.png" alt="banner" className="absolute w-full h-full" />
        <img src="/images/open.svg" alt="open" className="absolute t-20 l-0 " style={{ width: "948px" }} />
        <Modal open={open} handleClose={handleClose}/>
      </div>
      <div>
        <p className="font-inter text-3xl text-white w-1204 mx-auto text-center mt-12">
          It’s often the case that we have to conform to a framework set by gatekeepers in our society. These gatekeepers have been around in every society since the dawn of agriculture. It’s something that so many of us simply must accept with no plausible alternative. Our current centralised economies incentivise an all out war for whoever can control the chokepoints for value exchange — because the model is extractive at its root.
        </p>
        <p className="font-inter text-3xl text-white w-1204 mx-auto text-center mt-12">
          DIGITALAX is operating for a decentralised commercial environment where all players and creators have the ability to spin up a personal decentralised realm with dynamic access keys. We are growing out our ecosystem to continue to include more savvy doorways and access channels for more players and creators to leverage off of.
        </p>
      </div>
      <div className="mx-24 mt-10 pt-9 pb-16 pl-20 pr-12" style={{ background: "url('/images/background.png') no-repeat", backgroundSize: "100% 100%" }}>
        <div className="flex justify-between w-full">
          <div className="relative" style={{ width: "47%" }}>
            <img src="/images/product1.png" className="w-full" />
            <img src="/images/arrow.svg" className="cursor-pointer z-50 w-48 absolute t-9 r-8 animate-horizonbounce" onClick={handleClick} />
          </div>
          <div className="relative" style={{ width: "48%"  }}>
            <img src="/images/product2.png" className="w-full" />
            <img src="/images/arrow.svg" className="cursor-pointer z-50 w-48 absolute b-8 r-8 animate-horizonbounce" />
          </div>
        </div>

        <div className="flex justify-between w-full mt-12">
          <div className="relative" style={{ width: "47%" }}>
            <img src="/images/product3.png" className="w-full" />
            <img src="/images/arrow.svg" className="cursor-pointer z-50 w-48 absolute t-9 r-8 animate-horizonbounce" />
          </div>
          <div className="relative" style={{ width: "48%"  }}>
            <img src="/images/product4.png" className="w-full" />
            <img src="/images/arrow.svg" className="cursor-pointer z-50 w-48 absolute b-8 r-8 animate-horizonbounce" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
