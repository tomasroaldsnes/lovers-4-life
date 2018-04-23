import React from 'react';
import { Parallax } from 'react-spring';
import { Header, Icon, Grid, Segment, Card, Image, Container, Button, Divider } from 'semantic-ui-react';
import Form from './Form';
import Join from './Join';

import { Router, Link } from '../routes';

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

const CardMetamask = () => (
    
    <Card>
      <Image src='https://yt3.ggpht.com/a-/AJLlDp29i67qzhS1E46MPzrY0Q9ZGurI8zEAc_ITBQ=s900-mo-c-c0xffffffff-rj-k-no' />
      <Card.Content>
        <Card.Header>
          Install Meta Mask
        </Card.Header>
        
        <Card.Description>
          Download Meta Mask from their website <a href="https://metamask.io/">here.</a>
        </Card.Description>
      </Card.Content>
      
    </Card>
    
  );



const CardForm = () => (
    
    <Card>
      <Image src='https://www.shareicon.net/data/2015/08/20/87939_add_512x512.png' />
      <Card.Content>
        <Card.Header>
          Fill out the form below
        </Card.Header>
        
        <Card.Description>
          Put in your name, your partners name and why you love them.
        </Card.Description>
      </Card.Content>
      
    </Card>
    
  );

  const CardPay = () => (
    
    <Card>
      <Image src='https://www.shareicon.net/download/2015/10/03/111192_money_512x512.png' />
      <Card.Content>
        <Card.Header>
          Accept the Transaction
        </Card.Header>
        
        <Card.Description>
          It costs 0.009 ETH to proclaim your love forever.
        </Card.Description>
      </Card.Content>
      
    </Card>
    
  );

  const GridStuff = () => (
      <Container>
      <div>
        <Header as='h1' textAlign='center' inverted>How It Works</Header>
        <Grid columns='equal' divided inverted padded>
                <Grid.Row color='#909090' textAlign='center'>
                <Grid.Column>
                    {CardMetamask()}
                </Grid.Column>
                <Grid.Column>
                    {CardForm()}
                </Grid.Column>
                <Grid.Column>
                    {CardPay()}
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        </Container>

  );

const Header1 = () => (
    <Header as='h2' icon inverted>
          <Icon name='heart' color='red' />
          Blockchain is forever. Love should be too.
          <Header.Subheader>
            Proclaim your love for your partner on the Ethereum Blockchain.
          </Header.Subheader>
        </Header>
);



export default () =>{


    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={4}>
        <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#390044' }} />
        <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <Parallax.Layer offset={0} speed={0} factor={4} style={{ backgroundColor: '#390044', backgroundSize: 'cover' }} />

        <Parallax.Layer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </Parallax.Layer>

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

        <Parallax.Layer offset={0.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </Parallax.Layer>

        <Parallax.Layer offset={1.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </Parallax.Layer>

        <Parallax.Layer offset={2} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </Parallax.Layer>

        <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </Parallax.Layer>

        <Parallax.Layer offset={3} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </Parallax.Layer>

        

        

        <Parallax.Layer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Header1()}
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={0.3}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {GridStuff()}
        </Parallax.Layer>

        
       <Parallax.Layer
          offset={2}
          speed={0.3}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
          <div>
          <Join/>
          <Divider hidden />
          <Divider hidden />
          <Form/>
          </div>
        </Parallax.Layer>

        

      </Parallax>
    )
  
}

