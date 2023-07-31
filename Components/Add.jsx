import React from 'react'
import { View ,Button,TextInput,StyleSheet} from 'react-native'

function Add({textChange,addText}) {
  return (
    <View style={styles.containerapp}>
    <TextInput  placeholder="add to goal" style={styles.textInput} onChangeText={textChange}/>
      <Button title="Click Me" color='green' onPress={addText}/>
    </View>
  )
}
const styles =StyleSheet.create({
    containerapp:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginRight:30,
        borderBottomWidth:1,
        borderBottomColor:"#333"
      },
      textInput :{
        width:'80%',
        borderColor:'#000',
        borderWidth:2,
        margin:8,
        padding:8,
        borderRadius:8
      },
})
export default Add