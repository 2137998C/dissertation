import React, {Component} from 'react';
import List from '../components/FoodList.js'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Plate from '../components/Plate';

export default class HomeScreen extends Component {
  static navigationOptions = {
	  title: 'Build A Plate',
  };
  
  state = { }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position" contentContainerStyle={styles.container}>
	    <Plate/>
	    <Text style={styles.title}>Enter a food:</Text> 
		<View style={styles.list}>
			<List style={styles.list}/>
		</View>
      </KeyboardAvoidingView>
	  );
  };
  
  
};

const offset = 24;
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  list: {
	flex:1
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'contain'
  },
});
