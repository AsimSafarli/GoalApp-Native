import React from 'react'
import { View ,Button,TextInput,StyleSheet, Modal,Image} from 'react-native'

function Add({textChange,addText,modal,onCancel}) {
  return (
    <Modal visible={modal} animationType='slide' style={styles.bg}>
<View style={styles.containerapp}>
    <Image  source={require("../Image/logonative.png")} style={styles.img}/>
    <TextInput  placeholder="add to goal" style={styles.textInput} onChangeText={textChange}/>
    <View style={styles.buttons}>
    <Button title="Click Me" color='green' onPress={addText}/>
      <Button title='Cancel' color='blue' onPress={onCancel} />
    </View>
     
    </View>
    </Modal>
  )
}
const styles =StyleSheet.create({
    containerapp:{
        flex:1,
        flexDirection:'col',
        justifyContent:"center",
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
      img:{
        width:100,
        height:100
      },
      buttons:{
        flexDirection:'row'
      }
})
export default Add