import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
  },
  cardStyle: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 15,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  cardSubtitleWrapper: {
    alignItems: "center",
    flex: 1,
    marginTop: 5,
    flexDirection: "row"
  },
  cardSubtitle: {
    color: "#9595B0",
    fontSize: 18,
  }
})

const Card = ({ title, btnClickHandler, cardNumber }) => {
  return (
    <TouchableOpacity onPress={btnClickHandler}>
      <View
        style={styles.cardStyle}>
        <View
          style={styles.cardWrapper}>
          <Text
            style={styles.cardTitle}>
            {title}
          </Text>
          <View
            style={styles.cardSubtitleWrapper}>
            <Text
              style={styles.cardSubtitle}>
              {cardNumber} cards
          </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card
