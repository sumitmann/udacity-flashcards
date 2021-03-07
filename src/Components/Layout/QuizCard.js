import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    flexDirection: "column",
    marginHorizontal: 28,
    marginTop: 32,
    padding: 18
  },
  spacer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    marginBottom: 8,
    marginTop: 10
  }
})

const QuizCard = ({ question, answer }) => {
  const showMessage = () => {
    return Alert.alert(
      question,
      answer,
      [{ text: "Dismiss" }]
    );
  }
  return (
    <View
      style={{ ...styles.cardStyle, }}>
      <Text
        style={{ fontSize: 18, fontWeight: "bold" }}>
        Question
      </Text>
      <View
        style={styles.spacer} />
      <Text
        style={{ fontSize: 18, lineHeight: 28 }}>
        {question}
      </Text>
      <View
        style={{ alignItems: "center", marginTop: 16 }}>
        <TouchableOpacity
          style={{ paddingVertical: 6 }}
          onPress={showMessage}>
          <Text
            style={{ textAlign: "center", fontSize: 18, color: "#e91e63" }}>
            Show Answer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default QuizCard