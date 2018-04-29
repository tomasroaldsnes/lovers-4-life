import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Paralax from './Paralax';

export default (props) =>{
    return(
        <div>
            
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                <link rel="icon" href="https://freeiconshop.com/wp-content/uploads/edd/heart-flat.png" />

                <meta charset="utf-8"/>

                <title>Proclaim your love on the blockchain</title>

                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimal-ui"/>

                <meta name="mobile-web-app-capable" content="yes"/>

                <meta name="apple-mobile-web-app-capable" content="yes"/>

                <meta name="format-detection" content="telephone=no"/>

                <meta name="theme-color" content="#673AB8"/>

                


                
            </Head>    
           <Paralax/>
            
        </div>
    );
};