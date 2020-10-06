import React from 'react';
import Footer from '../containers/Footer'
import {
  View,
  ScrollView,
} from 'react-native'
import List from '../components/List'

const NumberListScreen = ({navigation}) => {

  const handleClick = (item) => {
    console.log('handleClick');
    navigation.navigate('NumberItem', {
      itemNumber: item,
    });
  }

  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            padding: 20,
            flex: 1,
          }}>
          <List
            data={new Array(30).fill(0).map((item, index) => index + 1)}
            handleClick={handleClick}
          />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}

export default NumberListScreen