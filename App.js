import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  View,
  Platform, 
  NativeModules,
  SafeAreaView
} from "react-native";
import GeneralStatusBarColor from "react-native-general-statusbar";

import Item from "./Components/Item";
import Add from "./Components/Add";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  const [modal,setModal] =useState(false)
    function handleCancelModal(){
      setModal(false)
    }
  function showModal(){
    setModal(true)
  }

  function textChange(e) {
    setText(e);
  }
  function addText() {
    setGoals((e) => [...goals, text]);
  }

  function removeText(index) {
    setGoals((goals) =>
      goals.filter((_, id) => id !== index)
    );
  }
  const { StatusBarManager } = NativeModules;

  return (
    <View style={styles.container}>
    <GeneralStatusBarColor
				barStyle="light-content"
			/>
    <SafeAreaView style={{ 
  flex: 1, 
  paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
 }}>

 
    <Button title="Add New Goal" color='#5e0acc' onPress={showModal} />
      <Add addText={addText} textChange={textChange} modal={modal} onCancel={handleCancelModal} />
        <View>
          {/*{goals.map((goal)=>
     <View  style={styles.goals}>
     <Text key={goal} style={styles.textitem}>{goal}</Text>
     </View>
     )} */}
     <FlatList
  data={goals}
  renderItem={({ item, index }) => <Item item={item} onRemove={() => removeText(index)} />}
  keyExtractor={(item, index) => index.toString()}
  alwaysBounceVertical={false}
/>

        </View>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#e11d48",
    flexDirection: "column",
    columnGap: 10,
    padding: 20,
  },
  goal: {
    flex: 2,
  },
  status:{
    flex:1,
    backgroundColor:"#e11d48",
    color:"#fff"
  }
});
