import React, {Component} from 'react';
import { Parallax } from 'react-spring';
import { Header, Button, Container, Divider } from 'semantic-ui-react';
import lover from '../../ethereum/lover';
import web3 from '../../ethereum/web3';
import { Router, Link } from '../../routes';


// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


export default class LoverForever extends Component{
    static async getInitialProps(props) {
            
        //const lover = Campaign(props.query.address);
        const loverAddress = props.query.address;

        const index = await lover.methods.findLover(loverAddress).call();

        const info = await lover.methods.loverList(index).call();

        //const summary = await campaign.methods.getSummary().call();
        console.log({info});
        
        return {
            yourName: info[0],
            loversName: info[1],
            message: info[2]
        }
    }

   seeAll() {
        Router.pushRoute('/lovers/all');
   }

    render(){
        

        return (
            <div>
            
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
               
           
            
       
            <Parallax ref={ref => (this.parallax = ref)} pages={1}>
              
      
              <Parallax.Layer offset={0} speed={0} factor={3} style={{ backgroundColor: '#390044', backgroundSize: 'cover' }} />
      
              
      
              <Parallax.Layer offset={0} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
              </Parallax.Layer>
      
              <Parallax.Layer offset={0.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
              </Parallax.Layer>
      
              <Parallax.Layer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
              </Parallax.Layer>
      
              
      
              <Parallax.Layer
                offset={0}
                speed={0.1}
                onClick={() => this.parallax.scrollTo(1)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container textAlign='center'>
                <div>
                <Header as='h1' inverted>It's official!</Header>
                <Header as='h2' inverted>{this.props.yourName} + {this.props.loversName} = TRUE </Header>
                <Header as='h3' inverted >{this.props.yourName} loves {this.props.loversName} because {this.props.message}</Header>
                <Header as='h4' inverted >Don't go ahead and break up now...</Header>
                <Divider hidden></Divider>
                <Button onClick={this.seeAll} inverted color='purple'>See All Lovers</Button>
                </div>
                </Container>
                
              </Parallax.Layer>
      
              
            </Parallax>
            </div>
          )
    }
}





