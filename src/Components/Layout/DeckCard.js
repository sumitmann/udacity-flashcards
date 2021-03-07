import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  Card: {
    borderRadius: 6,
    backgroundColor: "#ffffff",
    marginBottom: 20,
    marginHorizontal: 18,
    padding: 18
  },
  cardNumber: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8
  },
  cardNumberText: {
    marginLeft: 9,
    fontWeight: "bold",
    fontSize: 19
  },
  DateWrapper: {
    alignItems: "center",
    flexDirection: "row"
  },
  dateText: {
    fontSize: 18,
    marginLeft: 9
  }
})

const DeckCard = ({ createdAt, cardNumber }) => {
  return (
    <View
      style={styles.Card}>
      <View
        style={styles.DateWrapper}>
        <Text
          style={styles.dateText}>
          {new Date(`${createdAt}`).toDateString()}
        </Text>
      </View>
      <View
        style={styles.cardNumber}>
        <Text
          style={styles.cardNumberText}>
          {cardNumber} Cards
        </Text>
      </View>
    </View>
  )
}

export default DeckCard
