import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

function Item({item,onRemove}) {
  return (
    <View style={styles.goals} >
      <Text style={styles.textitem}>{item}</Text>
    </View>
  )
}
  const styles = StyleSheet.create({
    goals:{
        flex:2,
        flexDirection:'column',
        justifyContent:'flex-start',
       columnGap:20,
        alignItems:'center',
        margin:30
      },
      textitem:{
        height:40,
        width:'auto',
        backgroundColor:'#14b8a6',
        color:'#fff'
      }
  })
export default Item