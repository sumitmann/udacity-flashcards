import React, { Component, Fragment } from 'react';
import { Keyboard, View } from 'react-native';
import { connect } from 'react-redux';
import { addNewCardToDeck } from '../../Utils/api';
import Header from '../Layout/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { addNewQuestionEvent } from '../../Actions/deck';
import CreateDeckBtn from '../Layout/CreateDeckBtn';
import InputField from '../Layout/InputField';

class CreateCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  answerSubmitEvent = () => {
    const { question, answer } = this.state;
    const { id, dispatch } = this.props;
    addNewCardToDeck({ deckId: id, question, answer })
      .then(CreateDeck => {
        dispatch(addNewQuestionEvent(CreateDeck));
        Keyboard.dismiss();
        this.setState({ question: '', answer: '' });
        this.props.navigation.navigate("DeckView");
      })
  }

  answerChangeEvent = (ans) => this.setState({ answer: ans });
  questionChangeEvent = (que) => this.setState({ question: que });

  render() {
    const { isLoaded, deckTitle } = this.props;
    const { question, answer } = this.state;
    return (
      <LinearGradient
        colors={['#65dfc9', '#6cdbeb']}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
        style={{ flex: 1 }}>
        {isLoaded && <Fragment>
          <Header
            title={`Add card - ${deckTitle}`} />
          <View
            style={{ marginTop: 28, marginHorizontal: 28 }}>
            <InputField
              placeholder="Enter question"
              value={question}
              handleChange={this.questionChangeEvent} />
            <View
              style={{ marginTop: 14 }}>
              <InputField
                placeholder="Enter answer"
                value={answer}
                handleChange={this.answerChangeEvent} />
            </View>
          </View>
          <CreateDeckBtn
            color={"#199d9f"}
            title="Add"
            handleClick={this.answerSubmitEvent} />
        </Fragment>}
      </LinearGradient>
    )
  }
}

const mapStateToProps = ({ decks }, { id }) => {
  return {
    isLoaded: true,
    deckTitle: decks[id].title
  }
}


export default connect(mapStateToProps)(CreateCard)