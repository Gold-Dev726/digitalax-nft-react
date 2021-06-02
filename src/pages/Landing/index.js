import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Bar from '../../components/Bar';

function Landing(props) {

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="flex flex-col">
      <div className='flex items-center absolute z-50 l-8'>
        <p className="uppercase font-inter text-third bg-fourth text-5xl p-1 font-black">Open Gates For the metaverse</p>
        <img src="/images/arrow.svg" width="110px" height="110px" className="animate-horizonbounce" />
      </div>
      <div className="relative">
        <video width="100%" ref={videoEl} loop>
          <source src="/v1.mp4" type="video/mp4" />
        </video>

      </div>

      <div className="flex flex-col pt-20 pb-60 mb-80" style={{ backgroundImage: "url('/images/landing_bg.png')", backgroundRepeat: "repeat-y", backgroundPositionX: "172px" }}>
        <div className="mt-20 bg-black z-50 py-20 px-20">
          <p className="text-gray-50 uppercase font-inter font-black text-6xl whitespace-normal mt-32">Building The Open fabric of a New</p>
          <p className="text-gray-50 uppercase font-inter font-black text-100 whitespace-normal text-gradient mb-32">Digital Fashion movement</p>
        </div>

        <div className="flex pl-32 items-center">
          <img src="/images/enter.svg" width="1380px" className="scale-110" />
          <Link to="/enter">
            <img src="/images/arrow.svg" width="390px" className="ml-16 scale-110 transform animate-horizonbounce" />
          </Link>
        </div>

        <div className="bg-black z-50 py-20 px-20">
          <p className="text-gray-50 uppercase font-inter font-black whitespace-normal" style={{ fontSize: "76px" }}>Using web3, crypto, nfts, open </p>
          <p className="text-gray-50 uppercase font-inter font-black whitespace-normal" style={{ fontSize: "76px" }}>source </p>
          <p className="text-gray-50 uppercase font-inter font-black whitespace-normal text-gradient" style={{ fontSize: "110px" }}>To empower an entire</p>
          <p className="text-gray-50 uppercase font-inter font-black whitespace-normal text-gradient" style={{ fontSize: "110px" }}>Decentralised tribe of</p>
          <p className="text-gray-50 uppercase font-inter font-black whitespace-normal text-gradient" style={{ fontSize: "110px" }}>Creators Across The Realms</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
