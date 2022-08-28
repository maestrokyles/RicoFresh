import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, ImageBackground, WebView } from 'react-native';
import {auth} from './firebase.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import React, {useState} from 'react'
import AppView from "./components/AppView.js"
export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [view, setView] = useState('default');

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((res)=>{
        console.log("Success in Create NewUser");
        setView('signin');
      }).catch((res)=>console.log('error'))
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password).then((res)=> {
      console.log("Success: Signed in");
      setEmail(email);
      setView('loggedin');
    }).catch((res)=> console.log("Fail: Cannot sign in"))
  }

  const signUpView = () => {
    return <ImageBackground style={styles.background} source={require('./assets/welcome.jpeg')}>
              <View style={styles.container}>
                <View style = {styles.signUpView}>
                      <View style={styles.signUpText}>
                        <TextInput placeholder='Username'  style={styles.textinput} value = {username} onChangeText={text=>setUsername(text)}/>
                        <TextInput placeholder='Email'  style={styles.textinput} value = {email} onChangeText={text=>setEmail(text)}/>
                        <TextInput placeholder='Password' secureTextEntry = {true} style={styles.textinput} value = {password} onChangeText={text=>setPassword(text)}/>
                      </View>
                      <View style={styles.signUpButtons}>
                        <View style={styles.signupPageSignUp}>
                          <Button color="black" title='Register' onPress = {signUpUser}/>
                        </View>
                        <View style={styles.signupPageSignUp}>
                          <Button color="black" title='Back' onPress = {()=>{setView('default')}}/>
                        </View>
                      </View>
                  </View>
              </View>
            </ImageBackground>
  }
  const signInView = () => {
    return <ImageBackground style={styles.background} source={require('./assets/welcome.jpeg')}>
            <View style={styles.container}>
              <View style = {styles.signInView}>
                  <View style={styles.signInText}>
                    <TextInput placeholder='Email'  style={styles.textinput} value = {email} onChangeText={text=>setEmail(text)}/>
                    <TextInput placeholder='Password' secureTextEntry = {true} style={styles.textinput} value = {password} onChangeText={text=>setPassword(text)}/>
                  </View>
                  <View style={styles.signInButtons}>
                    <View  style={styles.signinPageSignIn}>
                      <Button color="black" title='Sign In' onPress = {signInUser}/>
                    </View>
                    <View style={styles.signinPageBack}>
                      <Button color="black" title='Back' onPress = {()=>{setView('default')}}/>
                    </View>
                  </View>
              </View>
            </View>
          </ImageBackground>

  }
  const defaultView = () => {
    return <ImageBackground style={styles.background} source={require('./assets/welcome.jpeg')}>
            <View style={styles.container}>
                <View style = {styles.defaultView}>
                <View style={styles.defaultsignin}>
                  <Button color='black' title='Sign In' onPress={()=>{setView('signin')}} ></Button>
                </View>
                <View style={styles.defaultsignup}>
                  <Button color='black' title='Register' onPress={()=>{setView('signup')}}></Button>
                </View>
              </View>
            </View>
          </ImageBackground>
  }

  const loggedInView = () => {
    return <AppView/>
    // <View style={styles.container}>
    //         <AppView/>

    //        </View>
  }

  var viewList = (view) => {
    switch (view) {
      case 'default':
        return defaultView()
      case 'signin':
        return signInView();
      case 'signup':
        return signUpView();
      case 'loggedin':
        return loggedInView();
    }
  };

  var display = viewList(view);

  return (
    <>
      {display}
    </>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink'
  },
  defaultsignin: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: "white",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: '5%'
  },
  defaultsignup: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: "white",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: '5%'
  },
  defaultView: {
    flex: 0.2,
    flexDirection: 'col',
    width: '70%',
    justifyContent: 'center',
    justifyContent: "center",
    padding: '0%',
    margin: '0%',
    position: 'relative',
    top: '23%'
  },
  textinput: {
    height: 50,
    fontSize: 20,
    borderBottomWidth: 3,
    margin: '5%',

  },
  signInView: {
    flex: 1,
    flexDirection: 'col',
    width: '70%',
    justifyContent: 'center',
    margin: '0%',
  },
  signInText: {
    width: '100%',
    backgroundColor: 'white',
  },
  signInButtons: {
    flex: 0.2455,
    position: 'relative',
    flexDirection: 'col',
    justifyContent: 'center',
    top: '13.84%'
  },
  signinPageSignIn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: '5%'
  },
  signinPageBack: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: '5%',
  },

  signUpView: {
    flex: 1,
    flexDirection: 'col',
    width: '70%',
    justifyContent: 'center',
    margin: '0%',
  },
  signUpText: {
    width: '100%',
    backgroundColor: 'white',
  },
  signUpButtons: {
    flex: 0.276,
    position: 'relative',
    flexDirection: 'col',
    justifyContent: 'center',
    top: '9.25%'
  },
  signupPageSignUp: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: '5%'
  },
  signupPageBack: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: '5%',
  },
});
