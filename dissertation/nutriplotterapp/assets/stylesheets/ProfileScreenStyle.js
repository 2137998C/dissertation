import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
      backgroundColor: "#00BFFF",
      height: 200
    },
    icon: {
      flex:1,
      width: 120,
      height: 120,
      alignSelf: "center",
      borderColor: "black",
      resizeMode: "contain"
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom: 10,
      alignSelf: "center",
      position: "absolute",
      marginTop: 130
    },
    //name: {
    // fontSize: 22,
    //color: "#FFFFFF",
    // fontWeight: "600"
    //},
    userstats: {
      fontSize: 20,
      marginTop: 20,
      fontWeight: "600",
      textAlign: "center"
    },
    body: {
      marginTop: 40
    },
    bodyContent: {
      marginTop: 40,
      flex: 1,
      textAlign: "center",
      padding: 30
    },
    name: {
      fontSize: 28,
      marginTop: 40,
      //color: "#696969",
      textAlign: "center",
      fontWeight: "600"
    },
    info: {
      fontSize: 16,
      color: "#00BFFF",
      textAlign: "center",
      marginTop: 10
    },
    description: {
      fontSize: 16,
      //color: "#696969",
      marginTop: 10,
      textAlign: "center"
    },
    buttonContainer: {
      marginTop: 10,
      height: 45,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: "#00BFFF"
    },
    stage: {
      backgroundColor: "#EFEFF4",
      paddingTop: 20,
      paddingBottom: 20
    },
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 10
    },
    list: {
      flex: 1,
      marginTop: 10
    },
    favouritefoods: {
      fontSize: 20,
      padding: 10,
      fontWeight: "600",
      textAlign: "center"
    },
    grid: {
      flexDirection: "row"
    }
});
export {styles};