import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, ImageBackground, ScrollView, FlatList } from 'react-native';
import React, {useState} from 'react'
import { collection, getDocs ,doc, setDoc } from "firebase/firestore";
import {db} from "../firebase.js"
import ProbSnippet from "./ProbSnippet.js"
import ProbDetailPage from "./ProbDetailPage.js"

const filterList = ['All', 'Two Pointer', "Tree", "DFS", "Binary Search Tree"]
export default class ProblemManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
      probID: 0,
      probPool: [],
      view: 'main'
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      console.log("***Try to get data***")
      const querySnapshot = await getDocs(collection(db, "probOverview"));

      querySnapshot.forEach((doc) => {
        this.setState({probPool: [...this.state.probPool, doc.data()]})
      });



    } catch(err) {
      console.log("*****Error getting data",error)
    }
  }

 applyFilter = (event,word) => {
  this.setState({filter: word})
  }

  generateButtons = () => {
    return <>
            <View style={this.state.filter === "All" ? styles.filterButtonSelected:styles.filterButton}>
              <Button
                  onPress={(event) => {this.applyFilter(event,  "All")}}
                  title= "All"
                  color={this.state.filter === "All" ? 'white':'black'}
              />
            </View>
            <View style={this.state.filter === filterList[1] ? styles.filterButtonSelected:styles.filterButton}>
              <Button
                  onPress={(event) => {this.applyFilter(event,  filterList[1])}}
                  title= {filterList[1]}
                  color={this.state.filter === filterList[1] ? 'white':'black'}
              />
            </View>
            <View style={this.state.filter === filterList[2] ? styles.filterButtonSelected:styles.filterButton}>
              <Button
                  onPress={(event) => {this.applyFilter(event,  filterList[2])}}
                  title= {filterList[2]}
                  color={this.state.filter === filterList[2] ? 'white':'black'}
              />
            </View>
            <View style={this.state.filter === filterList[3] ? styles.filterButtonSelected:styles.filterButton}>
              <Button
                  onPress={(event) => {this.applyFilter(event,  filterList[3])}}
                  title= {filterList[3]}
                  color={this.state.filter === filterList[3] ? 'white':'black'}
              />
            </View>
            <View style={this.state.filter === filterList[4] ? styles.filterButtonSelected:styles.filterButton}>
              <Button
                  onPress={(event) => {this.applyFilter(event,  filterList[4])}}
                  title= {filterList[4]}
                  color={this.state.filter === filterList[4] ? 'white':'black'}
              />
            </View>
  </>
  }
  seeDetails = (probNo) => {
    console.log(probNo)
    this.setState({probID: probNo, view: 'details'})
  }
  generateProblemList = (filter) => {
    var probList = []
    if (filter === 'All') {
      for (var i = 0; i < this.state.probPool.length; i++) {
        probList.push(<View><ProbSnippet prob={this.state.probPool[i]} seeDetails={this.seeDetails}/></View>)
      }
    } else {
      for (var i = 0; i < this.state.probPool.length; i++) {
        if (this.state.probPool[i].category.indexOf(filter) > -1) {
          probList.push(<View><ProbSnippet prob={this.state.probPool[i]} seeDetails={this.seeDetails}/></View>)
        }
      }
    }
    return probList
  }

  generateMainView = () => {
    var scrollButtons = this.generateButtons();
    var listOfProblems = this.generateProblemList(this.state.filter);
    console.log("Get to this point")
    return <SafeAreaView>
            <View style = {styles.managerTitle}>
              <Text style={styles.title}>Manager</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style = {styles.filter}>
              {scrollButtons}
            </ScrollView>
            <ScrollView style = {styles.probPool}>
              {listOfProblems}
            </ScrollView>
          </SafeAreaView>
  }

  goBack = () => {
    this.setState({view: 'main', probNo: 0})
  }

  generateDetailView = () => {
    return <ProbDetailPage probNo={this.state.probID} goBack={this.goBack}/>
  }

  generateView = (view) => {
    switch (view) {
      case 'main':
        console.log('Current view:', view)
        return this.generateMainView();
      case 'details':
        return this.generateDetailView();
    }
  }

  render() {
    var problemManagerPage = this.generateView(this.state.view)
    return (
      <>
            {problemManagerPage}
      </>
    );
  }
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
  filter: {
    flexDirection: 'row',
  },
  filterButton: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    marginLeft: 10,
    borderRadius: '20%'
  },
  filterButtonSelected: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    marginLeft: 10,
    borderRadius: '20%'
  },
  probPool: {
    marginTop: -15,
    position: 'relative',
    height: '75%',
  },
  flatlist: {
    backgroundColor: 'pink',
    width: "100%",
    height: "77%",
    marginTop: -25,
    flexDirection: 'col',
  }
});