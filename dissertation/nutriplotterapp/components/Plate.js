import React, {Component} from 'react';

import {
    TouchableOpacity,
    Image,
    View,
    StyleSheet
} from 'react-native';

export default class Plate extends Component {
    state = {}

    render (){
        return (
            <TouchableOpacity activeOpacity = { .5 } onPress={ this.plateClicked } style={styles.container}>
                <Image style={styles.image} source={require('../assets/images/plate.png')}/>
            </TouchableOpacity>
        );
    }

    private 
    plateClicked() {
        alert("Plate clicked");
    }
}

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
