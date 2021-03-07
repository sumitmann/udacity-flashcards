import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { addQuizData } from '../../Utils/api';
import Header from '../Layout/Header';
import { LinearGradient } from 'expo-linear-gradient';
import QuizCard from '../Layout/QuizCard';
import CreateDeckBtn from '../Layout/CreateDeckBtn';

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 3,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    marginHorizontal: 28,
    padding: 18,
  }
})

const mapStateToProps = ({ decks }, { id }) => {
  return {
    deck: decks[id],
    isLoaded: true
  }
}

class QuizView extends Component {
  state = {
    currentIndex: 0,
    score: 0,
    submittedAt: null,
  }
  answerEvent = (type) => {
    let latestScore = this.state.score;
    if (type === true) {
      latestScore += 1;
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      score: latestScore
    }, () => {
      if (this.state.currentIndex === this.props.deck.questions.length) {
        addQuizData({
          score: `${Math.floor((this.state.score * 100) / this.props.deck.questions.length)}%`,
          deckTitle: this.props.deck.title
        });
      }
    })
  }

  render() {
    const { currentIndex, score } = this.state;
    const { isLoaded, deck } = this.props;
    return (
      <LinearGradient
        colors={['#65dfc9', '#6cdbeb']}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
        style={{ flex: 1 }}>
        {isLoaded && <Fragment>
          <Header
            title={`Quiz - ${deck.title}`} />
          {currentIndex === deck.questions.length
            ? <View
              style={{ alignItems: "center", marginTop: 104 }}>
              <Text
                style={{ fontSize: 38 }}>
                {deck.questions.length === 0 ? "Please add cards first" : "Your Score"}
              </Text>
              {deck.questions.length !== 0 &&
                <Text style={{ fontSize: 54, color: "#426696", fontWeight: "bold", marginVertical: 4 }}>
                  {Math.floor((score * 100) / deck.questions.length)}%
            </Text>}
              {deck.questions.length !== 0 && <CreateDeckBtn
                title="Retake"
                color={"#199d9f"}
                iconName="reload1"
                handleClick={() => this.setState({ score: 0, currentIndex: 0 })} />}
            </View>
            : <Fragment>
              <View
                style={styles.cardWrapper}>
                <Text
                  style={{ fontSize: 18 }}>
                  Current question: &nbsp;
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold" }}>
                  {currentIndex + 1}/{deck.questions.length}
                </Text>
              </View>
              <QuizCard
                answer={deck.questions[currentIndex].answer}
                question={deck.questions[currentIndex].question} />
              <View
                style={{ marginTop: 42 }}>
                <CreateDeckBtn
                  paddingHorizontal={37}
                  color={"#199d9f"}
                  title="Mark correct"
                  handleClick={() => this.answerEvent(true)} />
                <CreateDeckBtn
                  color={"#e91e63"}
                  title="Mark incorrect"
                  handleClick={() => this.answerEvent(false)} />
              </View>
            </Fragment>}
        </Fragment>}
      </LinearGradient>
    )
  }
}

export default connect(mapStateToProps)(QuizView)