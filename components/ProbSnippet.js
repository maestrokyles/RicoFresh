import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react'


export default function ProbSnippet(props) {
  // console.log(props.prob.image)
  var difficulty = 'green'
  if (props.prob.difficulty === 'Medium') {
    difficulty = 'yellow'
  }
  if (props.prob.difficulty === 'Hard') {
    difficulty = 'red'
  }
  const passBackID = () => {
    props.seeDetails(props.prob.probNo)
  }
  return (
    <TouchableOpacity onPress={passBackID}>
      <View style={styles.imageContainer}>
        <Image source={{url: props.prob.image}} style={styles.image}/>
        <Text style={{color:'white', fontWeight: 'bold',fontSize: '30',position:'absolute', top: '0%', left: '3%',textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10}}>#{props.prob.probNo}</Text>
        <Text style={{color:'white', fontWeight: 'bold',fontSize: '30',position:'absolute', bottom: '0%', margin: '5%' ,textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10}}>{props.prob.name}</Text>
        {/* <Text style={{color: difficulty, fontWeight: 'bold',fontSize: '30',position:'absolute', top: '0%', right: '5%',textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10}}>{props.prob.difficulty[0]}</Text> */}
      </View>


    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink'
  },

  imageContainer: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%'

  },
  image: {
    height: 200,
    width: '100%',
  },
});