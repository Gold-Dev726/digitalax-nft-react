import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

function Designers(props) {

  return (
    <div>
      <div className="flex flex-col pt-20 mb-40 mx-12 pr-20" style={{ backgroundImage: "url('/images/fractional_bg.png')", backgroundRepeat: "repeat-y", backgroundPositionX: "right" }}>
        <div className="flex flex-col w-full bg-black">
          <div>
            <img src="/images/fractional.png" className="w-2/3 ml-16" />
            <img src="/images/garment.png" className="w-2/3 ml-64 my-8" />
            <img src="/images/ownership.png" className="w-2/3 ml-16" />
          </div>

          <div className="mt-12 bg-black z-50 pt-20 px-20">
            <p className="font-inter font-normal text-3xl text-gray-50">
              Fractional Garment Ownership (FGO) sets forth the standard and dress code for the manufacture of digital fashion along the digital content supply chain. FGO leverages ERC Protocol standards across the Ethereum Blockchain and Polygon (Matic Network) for breaking down a master ERC-721 digital garment into its programmable and composable ERC-1155 elements of materials, patterns and textures.
          </p>
            <p className="font-inter font-normal text-3xl text-gray-50 mt-16">
              Here, we are using a variant on the ERC-998 standard, where each ERC-721 token can hold a balance of ERC-1155 NFTs. We coin this respectively the Parent and Child NFTs. This allows for other designers to leverage off of the open source digital libraries, incorporating the patterns, materials and textures into their master garments, whilst still ensuring that all original contributors to the digital fashion item can have their IP authenticated and effectively traced across the entire journey through the digital fashion supply chain.
          </p>
            <p className="font-inter font-normal text-3xl text-gray-50 mt-16">
              FGO directly enables individual artists, designers to create and issue the modular building blocks and components to a master digital fashion garment, with complete on-chain verification. This directly allows for;
          </p>
            <div className="font-inter font-normal text-3xl text-gray-50 pl-12">
              <ul className="list-disc">
                <li>
                  Completely new models of monetisation
              </li>
                <li>
                  An Open Source spirit injection
              </li>
                <li>
                  Authenticated and transparent tracking at each stage of the supply chain
              </li>
                <li>
                  A more complete framework for valuing and assessing native digital goods
              </li>
              </ul>
            </div>

            <p className="font-inter font-normal text-3xl text-gray-50 mt-16">
              These NFTs can be programmable, tradable, interoperable and composable. This composable approach towards fashion, verified by the blockchain, is a major leap in digital materials and design ownership, digital supply chain management, process automation, efficacy management.
          </p>
            <p className="font-inter font-normal text-3xl text-gray-50 mt-16">
              FGO also promotes the broader mission for enabling gatemakers of the metaverse. Modding the Metaverse. The metaverse is nothing more than a radical reduction in the barriers between us. As these barriers come down, as the gates minaturise, the friction that might stop us normally from any given choice dissipates, allowing for new modes of interaction that are inherently fluid and liberating. And, with that said, modding is the fundamental practice that drives growth and change in fashion, gaming, mechanics… everything. The methodology behind modding and the byproducts that come from it are what actually build the metaverse. And, not just build the metaverse but also ensure that it will be kept open, vital and continuously unique to each personal experience.
          </p>
          <div className="flex justify-between items-center mt-12">
            <img src="/images/subpro1.png" className="box-shadow" style={{width: "29%"}}/>
            <img src="/images/subpro2.png" className="box-shadow" style={{width: "29%"}}/>
            <img src="/images/subpro3.png" className="box-shadow" style={{width: "29%"}}/>
          </div>
            <p className="font-inter font-normal text-3xl text-gray-50 mt-16">
              FGO is built native to web3. DIGITALAX leverages both the Ethereum blockchain and Polygon Network. Since we have integrated to Polygon all of our NFTs are minted on this chain, ensuring 99% more energy efficiency than Ethereum network, whilst still ensuring that we are not removed from the Ethereum ecosystem— where through our custom engineered MultiToken bridge our NFTs can be bridged between Ethereum and Polygon seamlessly (Compatible for our 721s, 1155s, and 998 NFTs).
          </p>
            <p className="font-inter font-normal text-3xl text-gray-50 mt-16">
              Through FGO we are building out an entire Global Designer Network of creators that align with our mission of decentralisation and open source for the fashion industry. We are here to revolutionise the entire industry and do it right; overturning gatekeepers that have become comfortable with closed, exploitative, predatory, unsustainable and studio dominant bullshit. This is just the start, where eventually, our designer network and on-chain libraries will open up points of entry and capacity for anyone to engage fully in dynamic decentralised commerce, driven by ubiquitous digital fashion and cross digital-physical realms.
          </p>
            <p className="font-inter font-black text-3xl text-gray-50 mt-16">
              See our full FGO Standard Releases below and stay up to date across our discord and medium for more updates on how this ecosystem is continuing to scale and evolve.
          </p>
            <p className="font-inter font-bold text-5xl text-gray-50 mt-16 text-center underline">
              <a className="mr-16 underline" href="https://digitalax.xyz/fgo">FGO-0001</a>
              <span>|</span>
              <a className="ml-16 underline" href="https://digitalax.xyz/fgo-2">FGO-0001_2</a>
            </p>
          </div>
        </div>
      </div >

      <div>
        <video width="100%" loop>
          <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Designers;
