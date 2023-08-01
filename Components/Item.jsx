import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Item({ item, onRemove }) {
  return (
    <View style={styles.goals}>
      <View style={styles.item}>
        <Text style={styles.textitem}>{item}</Text>
        <View>
          <MaterialIcons name="delete" size={20} color="white" onPress={onRemove} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goals: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 30,
  },
  textitem: {
    fontSize: 25,
    color:"#fff"
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    height: 40,
    width: '100%',
    backgroundColor: '#5e0acc',
    color: '#fff',
    fontSize: 25,
  },
});

export default Item;
