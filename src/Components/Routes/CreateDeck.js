import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard, View } from 'react-native';
import { addDeckEvent } from '../../Actions/deck';
import { saveDeckTitleEvent } from '../../Utils/api';
import Header from '../Layout/Header';
import InputField from '../Layout/InputField';
import CreateDeckBtn from '../Layout/CreateDeckBtn';
import { LinearGradient } from 'expo-linear-gradient';

class CreateDeck extends Component {
  state = { deckTitle: '' }
  
  answerSubmitEvent = () => {
    saveDeckTitleEvent(this.state.deckTitle)
    .then(CreateDeck => {
      this.props.dispatch(addDeckEvent(CreateDeck))
      Keyboard.dismiss();
      this.setState({deckTitle: ''}, () => {
        this.props.navigation.navigate("Deck", {id: CreateDeck.id})
      })
    });
  }

  changeEvent = (text) => this.setState({deckTitle: text});

  render() {
    const {deckTitle} = this.state;
    return (
      <LinearGradient
      colors={['#65dfc9', '#6cdbeb']}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={{ flex: 1}}>
        <Header
          title="Create new Deck" />
        <View
          style={{margin: 28}}>
          <InputField
            placeholder="Enter deck title" 
            value={deckTitle}
            handleChange={this.changeEvent}/>
          <CreateDeckBtn 
            title="Create"
            handleClick={this.answerSubmitEvent}
            color={"#199d9f"} />
        </View>
      </LinearGradient>
    )
  }
}

export default connect()(CreateDeck)