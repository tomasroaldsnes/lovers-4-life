import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Paralax from './Paralax';

export default (props) =>{
    return(
        <div>
            
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
            </Head>    
           <Paralax/>
            
        </div>
    );
};