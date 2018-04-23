import React, {Component} from 'react';
import { Parallax } from 'react-spring';
import { Header, Icon, Grid, Segment, Card, Image, Container, Loader } from 'semantic-ui-react';
import lover from '../../ethereum/lover';
import web3 from '../../ethereum/web3';


// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


export default class LoverAll extends Component{
    state = {
        amountOfLovers: undefined,
        all: [],
        isLoading: false
    }
    async componentWillMount() {
        
        
        this.setState({ isLoading: true });
       
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
        
        this.setState({ isLoading: false });
        
        
    }

    listRender(){
        const items = this.state.all.map(all => {
            return{
                header: (all.yn + ' + ' + all.ln),
                description: all.messages,
                
            };
        });
        return <div>
        
        {this.state.isLoading && <Header as='h1' inverted textAlign='center'> Loading all lovers on the blockchain!</Header>}
        <Loader active={this.state.isLoading} inline='centered' />
            <Card.Group items={items}/>
        
        </div>;
         
           

    };
   

    render(){
        
       
        return (
            <div>
            
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
               
           
            
       
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
              
      
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
                factor={1.2}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container>
                    {this.listRender()}
                </Container>
                
              </Parallax.Layer>

              
      
              
            </Parallax>
            </div>
          )
    }
}