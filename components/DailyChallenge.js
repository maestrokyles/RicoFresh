import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, ImageBackground, Pressable, ScrollView } from 'react-native';
import React, {useState} from 'react'

export default function DailyChallenge(props) {
  var timer = 20
  if (props.prob.difficulty ==='Medium') {
    timer = 30
  } else if (props.prob.difficulty === 'Hard') {
    timer = 45
  }
  return (
  <SafeAreaView style={{flexDirection:'col'}}>
      <View style = {styles.managerTitle}>
        <Text style={styles.title}>Daily Challenge</Text>
      </View>
      <Text style={{fontSize: 20, padding: '5%', textAlign:'left'}}>Solve this problem in <Text style={{color:'red', fontWeight: 'bold'}}>{timer}</Text> minutes</Text>
      {/* <View style={{flex:1}}> */}

      <View style={styles.probPool}>

      <ImageBackground source={{uri: props.prob.image}} resizeMode='stretch' style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <View style={{position:'relative',borderBottomWidth: 0, flexDirection: 'row', alignItems:'center', opacity: 1, backgroundColor: 'white'}}>
          <Text style={{fontSize: 30,position:'relative', flex: 2.7, textAlign:'center', paddingLeft:'5%', color:'color'}}>{props.prob.probNo}</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', flex: 9, padding: '2%', textAlign:'left'}}>{props.prob.name}</Text>
        </View>
        <View style={{position:'relative',backgroundColor: 'white', opacity: 1,flexDirection: 'row', alignItems:'center'}}>
          <Text style={{fontSize: 25, flex: 9, padding: '5%', textAlign:'center',color:'black'}}>{props.prob.description}</Text>
        </View>
      </ImageBackground>
      </View>

      {/* </View> */}







    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  managerTitle: {
    width: '100%',
    flexDirection: 'col',
    paddingLeft: '5%',
    paddingTop: '5%',
    paddingRight: '5%',
    paddingBottom: '2%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  },

  img: {
    resizeMode: 'stretch',
    overflow: 'hidden',
    // flex: 10,
    borderRadius: '20%',
    borderWidth: 2,
    position: 'relative',
    top: 700,
    left:'5%',
    width: '90%',
    // height: '100%',
    // borderWidth: 0,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    // backgroundColor: "pink",

  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  probPool: {
    // marginTop: '0%',
    // position: 'absolute',
    // flex:1,
    left: '5%',
    height: "75%",
    width: '90%',
    // flex: 1,
    // backgroundColor:'pink',
    justifyContent:'center',
    alighItems: 'center',
    // flexDirection:'col',
    borderWidth: 1,

  }
});
