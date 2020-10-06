import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';


const List: () => React$Node = ({data, handleClick}) => {
  return (
    <View
      style={{
        paddingTop: 20,
        width: '100%',
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              borderBottomWidth: 1,
              padding: 3,
            }}>
            <Button
              onPress={() => handleClick(item)}
              title={item.toString()}              
            />
          </View>
        )}
      />
    </View>
  );
};

export default List;
