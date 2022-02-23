import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FacebookSocialButton,
  TwitterSocialButton,
  InstagramSocialButton,
} from "react-native-social-buttons";

const AboutUs = () => {
  return (
    <View style={styles.ab}>
      <Text style={styles.bb}>AboutUs</Text>
      <Text style={styles.p}>
        Trip Application allows you to discover the world from one click!!
      </Text>
      <View style={styles.nn}>
        <FacebookSocialButton
          onPress={() => {
            alert("Are you sure ,you want to open FACEBOOK");
          }}
        />
        <InstagramSocialButton
          onPress={() => {
            alert("Are you sure ,you want to open TWITTER");
          }}
        />
        <TwitterSocialButton
          onPress={() => {
            alert("Are you sure ,you want to open INSTAGRAM");
          }}
        />
      </View>
    </View>
  );
};

// export default class App extends React.Component {
// render() {
//   return (
//     <View>
//       <FacebookSocialButton onPress={() => {alert('Are you sure ,you want to open FACEBOOK')}}
//        />
//        <InstagramSocialButton onPress={() => {alert('Are you sure ,you want to open TWITTER')}}
//        />
//        <TwitterSocialButton onPress={()=>{alert('Are you sure ,you want to open INSTAGRAM')}}/>
//     </View>
//   );
// }

export default AboutUs;

const styles = StyleSheet.create({
  ab: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "orange",
    height: "100%",
  },
  bb: {
    textAlign: "center",
    margin: 20,
    marginBottom: 30,
    fontSize: 50,
  },
  p: {
    textAlign: "center",
    fontSize: 18,
  },
  nn: {
    margin: 50,
    paddingRight: 40,
    marginEnd: 20,
    marginRight: 100,
  },
});
