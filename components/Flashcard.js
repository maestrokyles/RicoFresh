import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, ImageBackground, ScrollView, Image, Pressable } from 'react-native';
import React, {useState} from 'react'

import ProbSnippet from "./ProbSnippet.js"
import ProbDetailPage from "./ProbDetailPage.js"
import Swiper from 'react-native-deck-swiper'
import { collection, getDocs ,doc, setDoc,where, query, updateDoc } from "firebase/firestore";
import {db} from "../firebase.js"
export default class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'main',
    }
  }

  swipe = async (direction, id) => {
      try {
        // const ref = doc(db, "problemOverview", where('probNo', '==', this.props.flashcard[id].probNo));
        const q0 = query(collection(db, 'probOverview'), where('probNo', '==', this.props.flashcard[id].probNo))
        const querySnapshot = await getDocs(q0);
        querySnapshot.forEach(async (docu) => {
          // console.log('swipeLeft',docu.id)
          const q1 = doc(db, "probOverview", docu.id)
          if (direction ==='left') {
            await updateDoc(q1, {
              familarity: docu.data().familarity - 1
            });
          } else if (direction === 'right') {
            await updateDoc(q1, {
              familarity: docu.data().familarity + 1
            });
          } else {
            await updateDoc(q1, {
              reviewlist: false
            });
          }

        });

        // Set the "capital" field of the city 'DC'
      } catch (err) {
        console.log(err)
      }

  }


  generateMainView = () => {
       return <SafeAreaView>
      <View style = {styles.managerTitle}>
        <Text style={styles.title}>Flashcard</Text>
      </View>
      <View style={styles.container}>
        <Swiper
              cards= {this.props.flashcard}
              renderCard={(card) => {
                var color = 'lightgreen'
                if (card.difficulty ==='Medium') {
                  color = 'yellow'
                } else if (card.difficulty === 'Hard') {
                  color = 'pink'
                }
                  return (
                    <Pressable style={{flex:1}}>
                      <View style={{flex: 1}}>
                        <ImageBackground style={styles.img} source={{uri: card.image}}>
                          <View style={{flex: 0.2, position:'relative',backgroundColor: color, opacity: 1,borderBottomWidth: 2, flexDirection: 'row', alignItems:'center'}}>
                            <Text style={{fontSize: 30,position:'relative', flex: 2.7, textAlign:'center', paddingLeft:'5%', color:'color'}}>{card.probNo}</Text>
                            <Text style={{fontSize: 30, fontWeight: 'bold', flex: 9, padding: '2%', textAlign:'left'}}>{card.name}</Text>
                          </View>
                          <View style={{flex: 0.80, position:'relative',backgroundColor: 'white', opacity: 0.7,flexDirection: 'row', alignItems:'center'}}>
                            <Text style={{fontSize: 25, flex: 9, padding: '5%', textAlign:'center',color:'black'}}>{card.description}</Text>
                          </View>
                        </ImageBackground>

                      </View>

                    </Pressable>
                  )
              }}
              onSwiped={(cardIndex) => {console.log(cardIndex)}}
              onSwipedAll={() => {console.log('onSwipedAll')}}
              onSwipedLeft={(index) => {this.swipe('left',index)}}
              onSwipedTop={(index) => {this.swipe('up',index)}}
              onSwipedRight={(index) => {this.swipe('right',index)}}
              cardIndex={0}
              backgroundColor='transparent'
              stackSize= {3}
              disableBottomSwipe>

          </Swiper>
      </View>
    </SafeAreaView>

  }
  generateDetailView = () => {
    return <ProbDetailPage goBack={()=>{this.setState({view:'main'})}} probNo={this.props.probNo}/>
  }

  generateView = (view) => {
    switch (view) {
      case 'main':
        return this.generateMainView();
      case 'detail':
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
  }
});