import React, { useEffect } from "react";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Fa500Px } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

function Footer(props) {
  
  return (
    <div className="flex flex-col px-72 my-20 overflow-visible">
      <p className="text-gray-50 uppercase font-inter font-black text-4xl">Get In touch</p>
      <p className="text-gray-50 font-inter font-black text-2xl whitespace-nowrap ">Contact us through contact@digitalax.xyz or reach out on any of our social media channels. We would love to hear from you.</p>
      <p className="text-gray-50 uppercase font-inter font-black text-xl text-center mt-6"><span>About digitalax</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>Documentation</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>Read about Espa</span></p>
      <p className="text-gray-50 font-rainbow text-52 my-3 text-center">x</p>
      <div className="flex justify-center">
        <SocialIcon url="https://jaketrent.com" fgColor="#FFFFFF" bgColor="transparent" network="facebook" />
        <SocialIcon url="https://jaketrent.com" fgColor="#FFFFFF" bgColor="transparent" network="twitter" />
        <SocialIcon url="https://jaketrent.com" fgColor="#FFFFFF" bgColor="transparent" network="instagram" />
        <SocialIcon url="https://jaketrent.com" fgColor="#FFFFFF" bgColor="#000000" network="tiktok" className="border-none"/>
        <SocialIcon url="https://jaketrent.com" fgColor="#FFFFFF" bgColor="transparent" network="twitch" />
        <SocialIcon url="https://jaketrent.com" fgColor="#FFFFFF" bgColor="#000000" network="discord" className="border-none" />
        <SocialIcon url="https://jaketrent.com" fgColor="#FFFFFF" bgColor="transparent" network="reddit" />
        <SocialIcon url="https://jaketrent.com" fgColor="#FFFFFF" bgColor="transparent" network="youtube" />
        <SocialIcon url="https://jaketrent.com" fgColor="#FFFFFF" bgColor="transparent" network="medium" />
      </div>
      <div className="text-gray-50 text-center text-xl font-black font-inter underline">
        <a>FAQs</a>
        <a className="mx-4">Digital Fashion Auctions</a>
        <a>Staking</a>
      </div>
    </div>
  );
}

export default Footer;
