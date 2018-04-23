import React, { Component } from 'react';
import { Header, Container} from 'semantic-ui-react';
import lover from '../ethereum/lover';
import web3 from '../ethereum/web3';


class Join extends Component {
  state = {
      allLovers: undefined
  }

  
  async componentWillMount() {
        
        
    this.setState({ isLoading: true });
   
    //const lover = Campaign(props.query.address);
    const amountOfLovers = await lover.methods.amountOfLovers().call();

    this.setState({allLovers: amountOfLovers})

  }

  render() {
    const { value } = this.state
    return (
        <div>
        <Container>
        
        <Header as='h1' textAlign='center' inverted>Join the {this.state.allLovers} lovers that has already made their love public.</Header>
        
        </Container>
        
      </div>
    )
  }
}

export default Join