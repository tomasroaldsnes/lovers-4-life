import React, {Component} from 'react';
import { Parallax } from 'react-spring';
import { Header, Icon, Grid, Segment, Card, Image, Container } from 'semantic-ui-react';
import lover from '../../ethereum/lover';
import web3 from '../../ethereum/web3';


// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


export default class LoverAll extends Component{
    state = {
        amountOfLovers: undefined,
        all: []
    }
    async componentWillMount() {
        
        

       
        //const lover = Campaign(props.query.address);
        const amountOfLovers = await lover.methods.amountOfLovers().call();
        //const loverobj = await lover.methods.loverList(3).call();
        //this.setState({amountOfLovers: amountOfLovers, firstLover: { yourName: loverobj[0], loversName: loverobj[1], message: loverobj[2]} });
        
        let all = [];
        
        let i;
        for (i = 0; i < amountOfLovers; i++) {
            const loverobj = await lover.methods.loverList(i).call();
            all.push({ yn: loverobj[0], ln: loverobj[1], messages: loverobj[2] });

            //loverList.push({ yourName: loverobj[0], loversName: loverobj[1], message: loverobj[2] });
        }; 
        
        this.setState({amountOfLovers: amountOfLovers, all: all });
        
        //const summary = await campaign.methods.getSummary().call();
        //console.log(loverList[0].yourName);
        
        
    }

    listRender(){
        const items = this.state.all.map(all => {
            return{
                header: (all.yn + ' + ' + all.ln),
                description: all.messages,
                
            };
        });
        return <div>
        <Container>
        <Header as='h1'>All lovers on blockchain!</Header>
            <Card.Group items={items}/>
        </Container>
        </div>;
         
           

    };
   

    render(){
        
       
        return (
            <div>
            
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
               
           
            
       
            <Parallax ref={ref => (this.parallax = ref)} pages={2}>
              
      
              <Parallax.Layer offset={0} speed={0} factor={3} style={{ backgroundColor: '#57C7FF', backgroundSize: 'cover' }} />
      
              
      
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
                
                {this.listRender()}
                
                
              </Parallax.Layer>

              <Parallax.Layer
              offset={1}
              speed={0.3}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              
              
              
            </Parallax.Layer>
      
              
            </Parallax>
            </div>
          )
    }
}