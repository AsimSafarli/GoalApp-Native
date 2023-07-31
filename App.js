import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Item from "./Components/Item";
import Add from "./Components/Add";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  function textChange(e) {
    setText(e);
  }

  function addText() {
    setGoals((e) => [...goals, text]);
  }

  function removeText(id){
    setGoals((goals) =>
      goals.filter((goal) => goal.id !== id)
    );
  }
  return (
    <View style={styles.container}>
      <Add addText={addText} textChange={textChange} />
        <View>
          {/*{goals.map((goal)=>
     <View  style={styles.goals}>
     <Text key={goal} style={styles.textitem}>{goal}</Text>
     </View>
     )} */}
          <FlatList
            data={goals}
            renderItem={({ item }) => <Item item={item} onRemove={removeText}/>}
            keyExtractor={(item, id) => id.toString()}
            alwaysBounceVertical={false}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    columnGap: 10,
    padding: 20,
  },
  goal: {
    flex: 3,
  },
});
