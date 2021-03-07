import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert, StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
  cardStyle: {
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    marginHorizontal: 18,
    marginBottom: 12,
    padding: 18
  },
  questionText: {
    lineHeight: 26,
    paddingRight: 8,
    flex: 1,
    fontSize: 16,
    fontWeight: "600"
  }
})

const QuestionCard = ({ question, answer }) => {
  const showMessage = () => {
    return Alert.alert(
      question,
      answer,
      [{ text: "Learnt" }]
    );
  }
  return (
    <View
      style={styles.cardStyle}>
      <Text
        textBreakStrategy="simple"
        style={styles.questionText}>
        {question}
      </Text>
      <TouchableOpacity
        onPress={showMessage}>
        <Feather
          name="info"
          size={22}
          color={"#426696"} />
      </TouchableOpacity>
    </View>
  )
}

export default QuestionCard
