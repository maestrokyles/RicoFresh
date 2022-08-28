import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, SafeAreaView, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html'
import React, {useState} from 'react'
import { collection, getDocs ,doc, setDoc, query, where } from "firebase/firestore";
import {db} from "../firebase.js"

export default class ProbDetailPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={probDetail:{}}
  }

  componentDidMount() {
    this.getData()
  }

  goBack = () => {
    console.log('go back');
    this.props.goBack()
  }

  getData = async () => {
    var data = {}
    try {
      // console.log("***2Try to get data***",this.props.probNo)
      const q1 = query(collection(db, "probOverview"), where("probNo", "==", this.props.probNo));
      const q2 = query(collection(db, "problems"), where("probNo", "==", this.props.probNo));

      const querySnapshot1 = await getDocs(q1);
      querySnapshot1.forEach((doc) => {
        data = {...doc.data()}
      });
      const querySnapshot2 = await getDocs(q2);
      querySnapshot2.forEach((doc) => {
        data = {...data, ...doc.data()}
      });
      this.setState({probDetail:{...data}})
      // console.log(data)

    } catch(err) {
      console.log("*****Error getting data",error)
    }
  }
  render() {
    var color;
    switch (this.state.probDetail.difficulty) {
      case 'Easy':
        color = 'green';
      case 'Medium':
        color = 'yellow';
      case 'Hard':
        color = 'red'
    }
    console.log(color)

    var category = ''
    if (this.state.probDetail.category !== undefined) {
      for (var i = 0; i < this.state.probDetail.category.length; i++) {
        category += this.state.probDetail.category[i] + ' '
      }
    }

    var solution = ' '
    if (this.state.probDetail.solution !== undefined) {
      solution = '```Python' + this.state.probDetail.solution + '```'
    } else {
      solution = '```Python\n```'
    }



    return (
      <SafeAreaView>

        <View style={styles.goBack}>
          <Button onPress={this.goBack} title="Back" color="gray" style={{backgroundColor: 'pink'}}/>
        </View>

        <View style = {styles.managerTitle}>
          <Text style={styles.title}>{this.state.probDetail.probNo}. {this.state.probDetail.name}</Text>
          <View style={{flexDirection:'row', alignItems: 'center'}}>
            <Text style={{color:color, fontSize: 25}}>{this.state.probDetail.difficulty}</Text>
          </View>
        </View>
        <ScrollView style={{height: '70%'}}>
        <View style = {styles.sectionTitle}>
          <Text style={{fontSize: 20}}>Descriptions</Text>
          <View style={{borderLeftWidth: 15, borderLeftColor: 'gray'}}>
            <Text style={{fontSize: 20, padding: '5%', color: 'gray'}}>{this.state.probDetail.description}</Text>
          </View>
        </View>
        <View style = {styles.sectionTitle}>
          <Text style={{fontSize: 20}}>Examples</Text>
          <View style={{borderLeftWidth: 15, borderLeftColor: 'gray'}}>
            <Text style={{fontSize: 20, padding: '5%', color: 'gray'}}>{this.state.probDetail.example}</Text>
          </View>
        </View>

        <View style = {styles.sectionTitle}>
          <Text style={{fontSize: 20, color: 'dodgerblue'}}>Through Process</Text>
          <View style={{borderLeftWidth: 15, borderLeftColor: 'dodgerblue'}}>
            <Text style={{fontSize: 20, padding: '5%', color: 'dodgerblue'}}>{this.state.probDetail.keypoint}</Text>
          </View>
        </View>
        <View style = {styles.sectionTitle}>
          <Text style={{fontSize: 20, color: 'cadetblue'}}>Solution</Text>
          <View style={{borderLeftWidth: 15, borderLeftColor: 'cadetblue'}}>
          <Text style={{fontSize: 20, padding: '5%', color: 'cadetblue'}}>{this.state.probDetail.solution}</Text>

          </View>
        </View>

        </ScrollView>


      </SafeAreaView>
)
  }

}

const styles = StyleSheet.create({
  managerTitle: {
    width: '100%',
    flexDirection: 'col',
    marginLeft: '5%',
    paddingTop: '0%',
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
    backgroundColor: 'pink',
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
  goBack:{
    // backgroundColor: 'pink',
    alignItems: 'left',
    margin: '4%'
  },
  sectionTitle: {
    // width: '100%',
    // backgroundColor:'green',
    flexDirection: 'col',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '3%',
  },
});