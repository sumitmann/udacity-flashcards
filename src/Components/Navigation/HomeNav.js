import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native'
import AllDecks from '../Routes/AllDecks';
import CreateDeck from '../Routes/CreateDeck';
import QuizDetail from '../Routes/QuizDetail';


const styles = StyleSheet.create({
  tabBar: {
    height: 40,
    paddingBottom: 15
  },
});


const HomeNavItem = createBottomTabNavigator();
export const HomeNav = () => {
  return (
    <HomeNavItem.Navigator
      tabBarOptions={{
        showLabel: true,
        style: styles.tabBar,
      }}>
      <HomeNavItem.Screen
        name="AllDecks"
        options={{ title: "Decks" }}
        component={AllDecks} />
      <HomeNavItem.Screen
        name="CreateDeck"
        options={{ title: "Create Deck" }}
        component={CreateDeck} />
      <HomeNavItem.Screen
        name="QuizDetail"
        options={{ title: "Quiz Info" }}
        component={QuizDetail} />
    </HomeNavItem.Navigator>
  )
}
