import React from 'react';

import '../scss/components/section.scss';
import '../scss/components/box.scss';
import Slider from '../components/slider';
import dataSlider from '../assets/fake-data/data-slider';
import About from '../features/about';
import Project from '../features/project';
import dataProject from '../assets/fake-data/dataProject';
import dataAbout from '../assets/fake-data/data-about';
import RoadMap from '../features/roadmap';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import Work from '../features/work';
import dataWork from '../assets/fake-data/data-work';
import Team from '../features/team';
import dataTeam from '../assets/fake-data/data-team';
import Blog from '../features/blog';
import dataBlog from '../assets/fake-data/data-blog';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import FAQ from '../features/faq';
import dataFaq from '../assets/fake-data/data-faq';
import NftItem from './NftItem';


function HomeOne(props) {

    return (
        <div className='home-1'>
        <Slider data={dataSlider} />
        <div className="md:w-4/4 mx-auto h-auto md:flex">
        <div className="md:w-4/4 p-2 w-full text-white">
          <div className="md:w-5/6 w-full  h-full mx-auto border-4 border-white rounded-md p-6 z-50">
            <p className="text-xl mb-5 rougue letter tracking-[0.3rem] text-center">
              
            </p>
            {/* <Web3Button
            className=""
            contractAddress={CONTRACT}
            action = {
              async (contract) => contract.claimTo(address, 1)
            }
            > {translate("mintnow")} </Web3Button> */}
 <iframe
             src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0x72cCB5A5b434d54084012b59191556D3EfBd0670&chainId=1"
              width="100%"
              height="700px"
              className="max-width:100%;"
              frameBorder="0"
            ></iframe>
            <iframe
              src="https://gateway.ipfscdn.io/ipfs/QmPaVYdGue8zEXFKqrtVHpvzBvufM1DYzw5n1of3KVPG88/signature-drop.html?contract=0x0046AC5AD2De7d5c9aeBeCf67751cB7e0865a0EB&chainId=1&theme=dark&primaryColor=cyan"
              width="100%"
              height="700px"
              className="max-width:100%;"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
        <About data={dataAbout} />

        {/* <Project data={dataProject} /> */}

        <RoadMap data={dataRoadmap} />

        <Team data={dataTeam} />

        {/* <Partner data={dataPartner} /> */}

        <NftItem/>

        <FAQ data={dataFaq} />
        
        </div>
    );
}

export default HomeOne;