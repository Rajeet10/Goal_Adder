import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
   View,
  FlatList,
  Button
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = goalTitle => {
    // console.log(enteredGoal);
    setCourseGoals((currentGoals) => [...currentGoals, 
      {id:Math.random().toString(),value:goalTitle}]);
      setIsAddMode(false);
  };

const removeGoal=(goalID)=>{
  setCourseGoals(currentGoals=>{
    return currentGoals.filter((goal)=>goal.id!==goalID);
  });
}
const cancelGoalAddidtionhandler=()=>{
  setIsAddMode(false);
};

  return (
    <View style={styles.screen}>
      <Button  title="ADD NEW GOAL" onPress={()=>setIsAddMode(true)}/>
     <GoalInput 
     visible={isAddMode}  
     onaddGoal={addGoalHandler} 
     onCancel={cancelGoalAddidtionhandler}/>
      <FlatList
      keyExtractor={(item,index)=>item.id}
        data={courseGoals}
        renderItem={itemData =>
        <GoalItem 
        id={itemData.item.id}
        onDelete={removeGoal}
          title={itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
 
});
