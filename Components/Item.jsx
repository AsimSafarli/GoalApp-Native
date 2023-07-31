import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Item({ item, onRemove }) {
  return (
    <View style={styles.goals}>
      <View style={styles.item}>
        <Text style={styles.textitem}>{item}</Text>
        <View>
          <MaterialIcons name="delete" size={24} color="white" onPress={onRemove} />
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
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: 40,
    width: '80%',
    backgroundColor: '#14b8a6',
    color: '#fff',
    fontSize: 25,
  },
});

export default Item;
