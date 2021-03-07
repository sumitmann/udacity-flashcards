import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DeckNav } from './DeckNav';
import { HomeNav } from './HomeNav';

const StackNavigation = createStackNavigator();
export const StackNavigationNavigator = () => {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        options={{ headerShown: false }}
        name="Decks"
        component={HomeNav} />
      <StackNavigation.Screen
        options={{ headerShown: false }}
        name="Deck"
        component={DeckNav} />
    </StackNavigation.Navigator>
  )
}