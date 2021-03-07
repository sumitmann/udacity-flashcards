import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const InputField = ({ placeholder, value, handleChange }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      style={{
        borderRadius: 6,
        backgroundColor: "#ffffff",
        fontSize: 17,
        paddingHorizontal: 18,
        paddingVertical: 14
      }}
      onChangeText={handleChange} />
  )
}

export default InputField