import React, {useState, useEffect} from "react";
import { View, Text,
 StatusBar, StyleSheet, TextInput, TouchableOpacity, FlatList, TouchableOpacityProps} from 'react-native'

import Button from "./src/button/Button";
interface SkillData{
  id:string;
  name:string;
 
}

interface Skill extends TouchableOpacityProps {
  skill: string;
}

export default function App(){
const [newSkill, setNewSkill] =useState('')
const [mySkills, setMySkills] = useState<SkillData[]>([])
const [gretting, setGrentting] = useState('')



function handleNewSkill(){

  const data={
    id: String(new Date().getTime()),
    name: newSkill
  }

      

  setMySkills(oldState => [ ...oldState, data]);
  setNewSkill(''); 
}

function handleRemoveSkill(id: string){
  setMySkills(oldState => oldState.filter(
    skill => skill.id !== id
  ));
}
useEffect(() => {
  const currentHour = new Date().getHours();

  if(currentHour < 12){
    setGrentting('Bom Dia');
  }
  else if(currentHour >= 12 && currentHour < 18 ){
    setGrentting('Boa Tarde')
  }else{
    setGrentting('Boa Noite')
  }
}, [])

  return(
    <View style={{ flex:1,  backgroundColor:'#131313'}}>
      <StatusBar backgroundColor='#131313' barStyle='light-content'/>
      <Text style={{color:'#fff', fontWeight:'bold', fontSize:25, marginLeft: 15, marginTop: 10}}>
       Welcome, Igor
      </Text>
      <Text style={{color:'#fff', marginLeft: 15, marginBottom:20}}>{gretting}</Text>
      <TextInput 
      placeholder="Insira"
      placeholderTextColor='#fff'
      style={styles.txtInput}
      onChangeText={setNewSkill}
      

     
    
      />
      <Button 
      title="Adicionar"
      onPress={handleNewSkill}/>
    
      <Text style={{color:'#fff', fontWeight:'bold', fontSize:25, textAlign:'center', marginTop:15,
    marginBottom: 15}}>
         My Skills
      </Text>
      
     
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
          style={styles.btn} 
          activeOpacity={0.7}
          onPress={() =>handleRemoveSkill(item.id)}>
            <Text style={styles.txt}>{item.name}</Text>
          </TouchableOpacity>
        )}
     />

      
    
  
    </View>
  )
}
const styles = StyleSheet.create({
  txtInput:{
    backgroundColor:'#555',
    width: '90%',
    padding: 12,
    marginLeft: 10,
    marginTop: 15,
    borderRadius: 7,
    color:'#fff'
  },
  btn:{
    backgroundColor:'#555',
     marginLeft: 50,
    width: '70%',
    padding: 12,
    
    marginTop: 15,
    borderRadius: 20
  },
  txt:{
    color:'#fff',
    textAlign:'center'
  }
  
})