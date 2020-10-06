import React from 'react';
import Footer from '../containers/Footer';
import {View, ScrollView} from 'react-native';
import List from '../components/List';

const AlphabeticListScreen = ({navigation}) => {
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
            flexGrow: 1,
          }}>
          <List data={[...'abcdefghijklmnopqrstuvwxyz'].map((item) => item)} />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

export default AlphabeticListScreen;
