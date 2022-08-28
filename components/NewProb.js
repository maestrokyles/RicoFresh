import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, ImageBackground } from 'react-native';
import React, {useState} from 'react'
import Icon from 'react-native-ico-material-design'
export default function NewProb() {
  const [probNo, setProbNo] = useState(0)
  const [name, setName] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [category, setCategory] = useState([])
  const [keypoints, setKeypoints] = useState('')
  const [solution, setSolution] = useState('')
  return (
  <SafeAreaView>
      <View style = {styles.managerTitle}>
        <Text style={styles.title}>Create New</Text>
        <Icon name="rounded-add-button" height={40} width={40} color={"gray"} style={{}}></Icon>
      </View>
      <View style={styles.signUpText}>
                        <TextInput placeholder='Leetcode No.'  style={styles.textinput1} value = {probNo} onChangeText={text=>setProbNo(text)}/>
                        <TextInput placeholder='Problem Name'  style={styles.textinput1} value = {name} onChangeText={text=>setName(text)}/>
                        <TextInput placeholder='Difficulty' style={styles.textinput2} value = {difficulty} onChangeText={text=>setDifficulty(text)}/>
                        <TextInput placeholder='Category' style={styles.textinput2} value = {category} onChangeText={text=>setCategory(text)}/>
                        <TextInput placeholder='Approach to Solutions' style={styles.textinput3} value = {keypoints} onChangeText={text=>setKeypoints(text)}  editable multiline numberOfLines={5}/>
                        <TextInput placeholder='Solution Code' style={styles.solution} value = {solution} onChangeText={text=>setSolution(text)} editable multiline numberOfLines={10}/>
                      </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({

  managerTitle: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingTop: '5%',
    paddingRight: '5%',
    paddingBottom: '2%',
    justifyContent:'space-between'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  },

  container: {
    // position: 'absolute',
    // marginTop: 0,
    // flex: 1,
    // flexDirection: '',
    height: '75%',
    // flex: 1,
    // width:"100%",
    // justifyContent: 'center',
    // alignItems: "center",
  },
  img: {
    // resizeMode: 'stretch',
    overflow: 'hidden',
    flex: 0.75,
    borderRadius: '20%',
    borderWidth: 2,
    position: 'relative',
    top: '-3%',
    // borderWidth: 0,
    // borderColor: "#E8E8E8",
    // justifyContent: "center",
    // backgroundColor: "pink",

  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  textinput1: {
    height: 40,
    fontSize: 20,
    borderLeftWidth: 15,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '1%',
    // marginBottom: '1%',
    // paddingLeft: '5%',
    borderColor: 'gray',
    // backgroundColor: 'pink'
    padding: '2%',
  },
  textinput2: {
    height: 40,
    fontSize: 20,
    borderLeftWidth: 15,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '1%',
    // marginBottom: '1%',
    // paddingLeft: '5%',
    borderColor: 'brown',
    // backgroundColor: 'pink'
    padding: '2%',
  },
  textinput3: {
    height: 100,
    fontSize: 20,
    borderLeftWidth: 15,
    // borderBottomWidth: 2,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '2%',
    padding: '2%',
    backgroundColor: 'white',
    borderColor: 'dodgerblue',
  },

  solution: {
    height: 300,
    fontSize: 20,
    borderLeftWidth: 15,
    // borderBottomWidth: 2,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '2%',
    padding: '2%',
    backgroundColor: 'white',
    borderColor: 'cadetblue',

  },
});