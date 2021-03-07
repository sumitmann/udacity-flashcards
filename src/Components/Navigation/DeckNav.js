import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QuizView from '../Routes/QuizView';
import DeckView from '../Routes/DeckView';
import CreateCard from '../Routes/CreateCard';

const styles = StyleSheet.create({
  tabBar: {
    height: 40,
    paddingBottom: 15
  }
});

const DeckNavItem = createBottomTabNavigator();
export const DeckNav = (props) => {
  const deckNavItemId = props.route.params.id;
  return (
    <DeckNavItem.Navigator
      tabBarOptions={{
        showLabel: true,
        style: styles.tabBar,
      }}>
      <DeckNavItem.Screen
        name="DeckView"
        options={{ title: "Cards" }}>
        {(props) => <DeckView {...props} id={deckNavItemId} />
        }</DeckNavItem.Screen>
      <DeckNavItem.Screen
        name="CreateCard"
        options={{ title: "Add card" }}>
        {(props) => <CreateCard {...props} id={deckNavItemId} />
        }</DeckNavItem.Screen>
      <DeckNavItem.Screen
        name="QuizView"
        options={{ title: "Start quiz" }}>
        {(props) => <QuizView {...props} id={deckNavItemId} />
        }</DeckNavItem.Screen>
    </DeckNavItem.Navigator>
  )
}
