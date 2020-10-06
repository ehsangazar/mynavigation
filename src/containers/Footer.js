import React from 'react';
import { View, Button } from 'react-native';

const Footer = ({navigation}) => {
  return (
    <View
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Button
        title="Go to Numbers"
        onPress={() => navigation.navigate('NumberList')}
      />
      <Button
        title="Go to Alphabets"
        onPress={() => navigation.navigate('AlphabeticList')}
      />
    </View>
  );
}

export default Footer