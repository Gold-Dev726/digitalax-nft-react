import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Input from '../../components/Input';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';


function Landing(props) {

  return (
    <div className="flex flex-col pt-20 pb-16 mb-10 ml-16 pl-2" style={{ backgroundImage: "url('/images/minting_bg.png')", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
      <div className="bg-black pl-16 pr-24 pb-16" style={{ width: "73.5%" }}>
        <div className="mt-10">
          <p className="font-inter font-black text-100 whitespace-normal text-gradient">Contribute to Open</p>
          <p className="font-inter font-black text-100 whitespace-normal text-gradient">Source On-Chain</p>
          <p className="font-inter font-black text-100 whitespace-normal text-gradient">Libraries</p>
        </div>

        <div>
          <p className="font-inter font-normal text-base text-gray-50 mt-10">
            Enter the information in the fillout boxes below to mint your 1155 NFT and contribute to our open sourced material, pattern, texture on-chain libraries. Your contribution can be used in master garments by other designers, artists, creators— it is open sourced. Open source doesn’t mean without monetisation. Our infrastructure is being built to eventually support automated fractional royalties for any designer as they contribute to open source libraries that can be leveraged in both the digital and physical dimensions. A decentralised commercial model.
          </p>
          <p className="font-inter font-normal text-base text-gray-50 mt-8">
            Although we can’t automatically enforce in smart contract code this fractional cross-chain, cross-realm royalty distribution as of yet, we still are continuing to prove out the model and hope that those that use these open source prints contribute a fractional portion of the sales back to the DIGITALAX, as we have done and plan to do for anyone contributing to our on-chain libraries going forward. Your NFT is minted on Matic Network for 99% more energy efficiency than the Ethereum or Bitcoin blockchains. Through our MultiToken bridge these NFTs can be bridged back to Ethereum for additional interoperability and functionalities.
          </p>
        </div>

        <div className='flex flex-col w-1/2 mt-12 mb-20'>
          <div className="flex justify-center">
            <div className="w-1/2 flex flex-col mr-10">
              <Input label="Designer ID" />
              <Input label="Pattern, Material, Texture Name" />
              <Input label="Degree of Exclusivity" />
            </div>
            <div className="w-1/2 flex flex-col">
              <Input label="Issue No." />
              <Input label="Unique Traits" />
              <div className="flex flex-col mt-10">
                <span className="font-inter font-extrabold text-gray-50 text-sm mb-2">File Upload</span>
                <label for="file" className="border-2 border-third bg-white rounded-2xl p-2 px-6 max-w-max font-inter text-xs font-medium">Choose File</label>
                <InputBase type="file" id="file" className="border-1 w-180 border-third bg-white h-9 w-2/3 hidden " />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col mt-16">
              <span className="font-inter font-extrabold text-gray-50 text-sm mb-2">Description</span>
              <InputBase className="text-black border-1 border-third bg-white" rows={5} multiline></InputBase>
            </div>
          </div>

          <span className="font-black text-base font-inter p-2 px-4 bg-fourth rounded-xl mt-12 max-w-min" style={{ color: "#DB00FF" }}>
            Contribute
          </span>
        </div>
      </div>

    </div>
  );
}

export default Landing;
