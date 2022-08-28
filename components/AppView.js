import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, ImageBackground, Pressable } from 'react-native';
import React, {useState} from 'react'

import Icon from 'react-native-ico-material-design'

import Flashcard from "./Flashcard.js"
import DailyChallenge from "./DailyChallenge.js"
import ProblemManager from "./ProblemManager.js"
import NewProb from "./NewProb.js"
import { collection, getDocs ,doc, setDoc,where, query } from "firebase/firestore";
import {db} from "../firebase.js"

var iconHeight = 26;
var iconWidth = 26;


export default class AppView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'problemmanager', flashcard: [{image:'',name:'',probNo: '', description:'', difficulty: ''}], randomIndex: 0}
  }

  componentDidMount() {
    this.fetchData()
  }


  fetchData = async () => {
    try {
      console.log("***Try to get data***")
      const querySnapshot = await getDocs(query(collection(db, "probOverview"), where('reviewlist', '==', true)));
      var probPool = []
      querySnapshot.forEach((doc) => {
        probPool = [...probPool, doc.data()]
      });
      var randomIndex = Math.floor(Math.random() * probPool.length);
      this.setState({flashcard: [...probPool], randomIndex: randomIndex}, ()=>{console.log("what is state",Array.isArray(this.state.flashcard), this.state.flashcard.length, this.state.randomIndex)})
    } catch(err) {
      console.log("***Error getting data",error)
    }
  }

  viewList = (view) => {
    switch (view) {
      case 'dailychallenge':
        var randomIndex
        return <DailyChallenge prob={this.state.flashcard[this.state.randomIndex]}/>
      case 'flashcard':
        return <Flashcard flashcard={this.state.flashcard}/>
      case 'problemmanager':
        return <ProblemManager/>
      case 'createnewprob':
        return <NewProb/>
    }
  };


  generateNavBar = () => {
    var buttons = []
    var options = [
      ['dailychallenge', 'flash-on-indicator'],
      ['flashcard', "copy-content"],
      ['createnewprob', "rounded-add-button"],
      ['problemmanager', "view-list-button"]
    ]

    return <View style={styles.navContainer}>
            <View style={styles.navBar}>
            <Pressable onPress={()=>{this.setState({view:'problemmanager'})}} style={styles.IconBehave}>
                <Icon name="view-list-button" height={iconHeight} width={iconWidth} color={this.state.view==='problemmanager' ? "black":"gray"}></Icon>
              </Pressable>
              <Pressable onPress={()=>{this.setState({view:'flashcard'},()=>{this.fetchData()})}} style={styles.IconBehave}>
                <Icon name="copy-content" height={iconHeight} width={iconWidth} color={this.state.view==='flashcard' ? "black":"gray"}></Icon>
              </Pressable>
              <Pressable onPress={()=>{this.setState({view:options[0][0]})}} style={styles.IconBehave}>
                <Icon name="flash-on-indicator" height={iconHeight} width={iconWidth} color={this.state.view==='dailychallenge' ? "black":"gray"}></Icon>
              </Pressable>

              <Pressable onPress={()=>{this.setState({view:'createnewprob'})}} style={styles.IconBehave}>
              {({ pressed }) => (
                <Icon name="rounded-add-button" height={iconHeight} width={iconWidth} color={this.state.view==='createnewprob' ? "black":"gray"}></Icon>
          )}

              </Pressable>

            </View>
          </View>
  }



  render() {
    var navBar = this.generateNavBar();
    var display = this.viewList(this.state.view);
    return (
      <>
            {display}
            <View style={styles.container}>
              {navBar}
            </View>
      </>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  navContainer: {
    width: "100%",
    position: 'absolute',
    alignItems: 'center',
    bottom: 40,

  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    height: 50,
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: '50%',
    // borderWidth: 1,
  },
  IconBehave: {
    padding: 14,
  },

  selectedColor: {
    color: 'tomato'
  },
  unselectedColor: {
    color: 'gray'
  }
});
