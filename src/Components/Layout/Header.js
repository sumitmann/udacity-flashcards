import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View>
      <Text
        style={{
          color: "#426696",
          fontSize: 30,
          fontWeight: "bold",
          marginVertical: 30,
          textAlign: "center"
        }}>
        {title}
      </Text>
    </View>
  )
}

export default Header