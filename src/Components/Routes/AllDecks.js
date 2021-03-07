import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import Header from '../Layout/Header';
import Card from '../Layout/Card';
import { objectsToArray } from '../../Utils/helper';


const mapStateToProps = ({ decks }) => ({
  isLoaded: true,
  decks: objectsToArray(decks).sort((a, b) => b.createdAt - a.createdAt)
})


const AllDecks = (props) => {
  const deckRenderer = ({ item }) => {
    return (
      <Card
        cardNumber={item.questions.length}
        btnClickHandler={() => props.navigation.navigate("Deck", { id: item.id })}
        title={item.title} />
    )
  }
  return (
    <LinearGradient
      colors={['#65dfc9', '#6cdbeb']}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={{ flex: 1}}>
      <Header
        title="Decks" />
      <FlatList
        keyExtractor={deck => deck.id}
        renderItem={deckRenderer}
        data={props.decks} />
    </LinearGradient>
  )
}

export default connect(mapStateToProps)(AllDecks);
