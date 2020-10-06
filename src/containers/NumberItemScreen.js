import React from 'react';
import Footer from '../containers/Footer';
import {View, ScrollView, Text} from 'react-native';

const NumberItemScreen = ({navigation, route}) => {
  const {itemNumber } = route.params;
  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center'
          }}
        >NumberItemScreen</Text>
        <Text style={{
          fontSize: 150,
          textAlign: 'center',
          paddingTop: 50,
        }}>{itemNumber}</Text>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

export default NumberItemScreen;
