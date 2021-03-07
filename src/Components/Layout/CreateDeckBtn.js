import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 30,
    alignItems: "center"
  },
  buttonStyle: {
    borderRadius: 3,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 15,
    marginHorizontal: 5,
    paddingVertical: 2,
    fontWeight: "bold",
    color: "#ffffff"
  }
})

const CreateDeckBtn = ({ title, paddingHorizontal, color, handleClick }) => {
  paddingHorizontal = paddingHorizontal ? paddingHorizontal : 32
  return (
    <View
      style={styles.buttonWrapper}>
      <TouchableOpacity
        style={{ ...styles.buttonStyle, paddingHorizontal, backgroundColor: color, }}
        onPress={handleClick}>
        <Text
          style={styles.buttonText}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateDeckBtn
