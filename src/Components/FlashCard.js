import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { View } from 'react-native';
import StatusBar from './Layout/Status';
import { getQuizs, initData, setupNotification } from '../Utils/api';
import { StackNavigationNavigator } from './Navigation/BottomBar';
import { handleReceiveData } from '../Actions/deck';


class FlashCard extends Component {
  state = { storeReady : false }
  componentDidMount(){
    initData()
    .then(decks => this.props.dispatch(handleReceiveData(decks)))
    .then(() => this.setState({storeReady: true}))

    getQuizs()
    .then(data => {
      if(data !== null){
        const {deckLastAttemptedAt} = data;
        if(new Date(deckLastAttemptedAt).toDateString() === new Date().toDateString())
          setupNotification(false);
        else
          setupNotification(true);  
      }else{
        setupNotification(true);
      }
    })
  }
  render() {
    return (
      <View
        style={{flex: 1}}>
        <StatusBar />
        {this.state.storeReady &&
          <NavigationContainer>
            <StackNavigationNavigator />
          </NavigationContainer>}
      </View>
    )
  }
}

export default connect()(FlashCard)