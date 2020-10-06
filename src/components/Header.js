
import React from 'react';
import { Text, View } from 'react-native';

const Header: () => React$Node = () => {
  return (
    <View style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        padding: 20,
    }}>
      <Text
        style={{
          height: 40,
          fontSize: 30,
        }}>
        My Navigation 
      </Text>
    </View>
  );
}

export default Header;
