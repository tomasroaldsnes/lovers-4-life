import React, { Component } from 'react';
import { Button, Form, Input, Select, TextArea, Message, Divider , Icon, Header, Container} from 'semantic-ui-react';
import lover from '../ethereum/lover';
import web3 from '../ethereum/web3';
import { Router, Link } from '../routes';
// Using an ES6 transpiler like Babel
import PropTypes from 'prop-types';
import { Slider } from 'react-semantic-ui-range'





class FormLovers extends Component {
  state = {
      yourName: '',
      partnersName: '',
      why: '',
      isLoading: false,
      allClicked: false,
      error: false,
      errorMessage: '',
      sliderValue: 0.0550
  }

  handleSliderChange = (value) => {
    this.setState({
      sliderVolume: value
    })
  }
  //web3.utils.toWei(this.state.sliderValue, 'ether')
  onSubmit = async (event) => {
        event.preventDefault();
        try{
        this.setState({error: false});
        this.setState({isLoading: true});
        const payment = web3.utils.toWei(this.state.sliderValue.toString(), 'ether');
        console.log(payment);
        const accounts = await web3.eth.getAccounts();
        const newCampaign = await lover.methods
            .createLover(this.state.yourName, this.state.partnersName, this.state.why)
            .send({
                from: accounts[0],
                value: payment
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
      this.setState({allClicked: true});
      Router.pushRoute('/lovers/all');
  }

  render() {
    const { value } = this.state
    return (
        <div>
        <Container>
      <Form onSubmit={this.onSubmit} inverted>
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
            placeholder='The text will be displayed like this: *Your name* + *Partners name* and your message displayed below.'
            />
        
            <Container textAlign='center'>
            <Divider hidden/>
            <Divider hidden/>
            <Header as='h3' inverted>Decide how much your love is worth:</Header>
            <Slider color="yellow" inverted={true}
                settings={{
                start: 0.0550,
                min:0.0009,
                max:0.11,
                step:0.0001,
                onChange: (value) => {
                  this.setState({
                    sliderValue:value
                  })
                }
              }}/>
            <Header as='h2' inverted>{this.state.sliderValue.toFixed(4)} ETH</Header>
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
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
                <Form.Field control={Button} icon color='yellow' labelPosition='left' loading={this.state.isLoading}>
                <Icon name='heart' color='red'/>Submit to blockchain</Form.Field>
                
                
            </Container>
      </Form>
            
        </Container>
        <Container textAlign='center'>
            <Divider hidden />
            <Divider hidden />
            <Button tiny inverted color='gray' loading={this.state.allClicked} onClick={this.seeAllLovers} >See all Lovers</Button>
            <Divider hidden />
            <a href="https://github.com/tomasroaldsnes/lovers-4-life">GitHub</a>

        </Container>
        
      </div>
    )
  }
}

export default FormLovers