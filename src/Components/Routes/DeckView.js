import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Layout/Header';
import DeckCard from '../Layout/DeckCard';
import QuestionCard from '../Layout/QuestionCard';

const mapStateToProps = ({ decks }, { id }) => ({
  deck: decks[id],
  isLoaded: true
})

class DeckView extends Component {
  render() {
    const { deck, isLoaded } = this.props;
    return (
      <LinearGradient
        colors={['#65dfc9', '#6cdbeb']}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
        style={{ flex: 1 }}>
        {isLoaded && <Fragment>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15 }}>
            <MaterialIcons
              name="keyboard-backspace"
              onPress={() => this.props.navigation.navigate("AllDecks")}
              size={30}
              color={"#426696"}
              style={{marginRight: 20}}/>
            <Header
              title={deck.title}/>
          </View>
          <DeckCard
            createdAt={deck.createdAt}
            cardNumber={deck.questions.length} />
          <FlatList
            data={deck.questions}
            renderItem={({ item }) => <QuestionCard question={item.question} answer={item.answer} />}
            keyExtractor={(question) => question.question.substr(8)}
          />
        </Fragment>}
      </LinearGradient>
    )
  }
}

export default connect(mapStateToProps)(DeckView)