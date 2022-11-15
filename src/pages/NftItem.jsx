import React from 'react';
import dataProject from '../assets/fake-data/dataProject';
import PageTitle from '../components/pagetitle';
import Project from '../features/project/nftitem';
import { Network, Alchemy } from "alchemy-sdk";
import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function NftItem(pops) {
    const [datacollrection, Setdatacollection]=useState();
    const [t, i18n] = useTranslation("global")

    useEffect(()=>{
        fetch("https://eth-mainnet.g.alchemy.com/nft/v2/DaVXPztsrU8prbCt56HOAeQWsELaL7_P/getNFTsForCollection?contractAddress=0x0046ac5ad2de7d5c9aebecf67751cb7e0865a0eb&withMetadata=true").then(res=> res.json()).then((result)=>{
            Setdatacollection(result.nfts)
        })
        
             

    },[])
    //console.log(datacollrection[0]?.media.gateway)   
    return (
        <div className='page-nft' id='Nft'>
            {
            datacollrection !==undefined?
                <>
                    <PageTitle title={t("Nft.Tittle")} />
                    <Project BtnTxt={t("Nft.Btn")} data={datacollrection} />
                </>
            :null
            }
            
        </div>
    );
}

export default NftItem;