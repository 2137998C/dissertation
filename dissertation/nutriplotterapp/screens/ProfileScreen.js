import { ExpoConfigView } from "@expo/samples";
import React, { Component } from "react";
//import { createStackNavigator, createAppContainer } from "react-navigation";

import Timeline from "react-native-timeline-listview";



import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from "react-native";

import {styles} from '../assets/stylesheets/ProfileScreenStyle';
import StatsScreen from "../screens/StatsScreen";

/*const statsStack = createStackNavigator({
  Stats: { screen: StatsScreen }
}); */

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: "My Profile"
  };

  constructor() {
    super();
    this.data = [
      {
        time: "🥇",
        title: "Points",
        description: "You have earned a total of 890 points"
      },
      {
        time: "🍽️",
        title: "Plates",
        description: "You've made a total of 69 plates"
      },
      {
        time: "🏆",
        title: "Score",
        description: "Your overrall score is 65"
      }
    ];
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={require("../assets/images/avatar.png")}
        />

        <View style={styles.body}>
          <Text style={styles.name}>John James</Text>
          <Text style={styles.info}>Student / Healthy Eater</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>
          <Text style={styles.userstats}>User Stats</Text>
          <View style={styles.container}>
            <Timeline style={styles.list} data={this.data} />
          </View>
          <Text style={styles.favouritefoods}>Your Favourite Foods</Text>
          <View style={styles.grid}>
            <Image
              style={styles.icon}
              source={require("../assets/images/apple.png")}
            />
            <Image
              style={styles.icon}
              source={require("../assets/images/meat.png")}
            />
            <Image
              style={styles.icon}
              source={require("../assets/images/banana.png")}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

//code for text that is not needed
/* <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text>
*/

//code for buttons that are not needed just now

/* <TouchableOpacity style={styles.buttonContainer}>
<Text>Shopping List</Text>
</TouchableOpacity>
<TouchableOpacity
style={styles.buttonContainer}
onPress={() => navigate("Stats")}
>
<Text>User Stats</Text>
</TouchableOpacity> */

