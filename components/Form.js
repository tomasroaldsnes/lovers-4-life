import React, { Component } from 'react';
import { Button, Form, Input, Select, TextArea, Message, Divider , Icon, Header, Container} from 'semantic-ui-react';
import lover from '../ethereum/lover';
import web3 from '../ethereum/web3';
import { Router, Link } from '../routes';


class FormLovers extends Component {
  state = {
      yourName: '',
      partnersName: '',
      why: '',
      isLoading: false,
      payment: 9000000000000000,
      error: false,
      errorMessage: ''
  }

  onSubmit = async (event) => {
        event.preventDefault();
        try{
        this.setState({error: false});
        this.setState({isLoading: true});
        const accounts = await web3.eth.getAccounts();
        const newCampaign = await lover.methods
            .createLover(this.state.yourName, this.state.partnersName, this.state.why)
            .send({
                from: accounts[0],
                value: this.state.payment
            });
        Router.pushRoute(`/lovers/${accounts[0]}`);
        
        //this.setState({isLoading: false});

        } catch (error){
            this.setState({
                error: true,
                isLoading: false,
                errorMessage: error.message
            });
        }

  }

  seeAllLovers = () => {
      Router.pushRoute('/lovers/all');
  }

  render() {
    const { value } = this.state
    return (
        <div>
        <Container>
        <Header as='h1' textAlign='center'>Love Is Forever!</Header>
      <Form onSubmit={this.onSubmit}>
        <Form.Group widths='equal'>
          <Form.Field control={Input}
            value={this.state.yourName}
            label='Your name' 
            onChange = {event => this.setState({ yourName: event.target.value })}
            placeholder='Your name' />

          <Form.Field control={Input}
            value={this.state.partnersName}
            label='Partners name' 
            onChange = {event => this.setState({ partnersName: event.target.value })}
            placeholder='Partners name' />
          
        </Form.Group>
        
        <Form.Field control={TextArea}
            value={this.state.why}
            transparent={true}
            label='Why do you love your partner?'
            onChange = {event => this.setState({ why: event.target.value })}
            placeholder='Proclaim your love!' />
        
            <Container textAlign='center'>
                <Form.Field control={Button} icon labelPosition='left' primary>
                <Icon name='heart' color='red' loading={this.state.isLoading}/>Submit</Form.Field>
            </Container>
      </Form>
      <Message hidden={!this.state.isLoading}>
                <Message.Content>
                <Message.Header>Just one second</Message.Header>
                Foreverizing your love. Please accept the transaction in the MetaMask plugin.
                </Message.Content>
        </Message>
        <Message hidden={!this.state.error} negative={this.state.error}>
                <Message.Content>
                <Message.Header>Oops!</Message.Header>
                    Something went wrong here. Transaction was rejected. Do you have sufficient funds in your Meta Mask account?
                </Message.Content>
        </Message>
        </Container>
        
      </div>
    )
  }
}

export default FormLovers