import React from "react";
import { ImageBackground, Text, View, _View } from "react-native";
import { Button } from "native-base";
import styles from "./Styles";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>TRIPS</Text>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: "https://images.idgesg.net/images/article/2018/02/best_places_smart_cities_world_globe_thinkstock_469235498-100749511-large.jpg",
        }}
      >
        <View style={styles.twoRows}>
          <View style={styles.buttonWrapper}>
            <Button
              onPress={() => navigation.navigate("Trips")}
              style={styles.button}
            >
              <Text style={styles.buttonT}>Explore</Text>
            </Button>
            <Button
              onPress={() => navigation.navigate("aboutUs")}
              style={styles.button}
            >
              <Text style={styles.buttonT}>About Us</Text>
            </Button>

            <Button
              onPress={() => navigation.navigate("signin")}
              style={styles.button}
            >
              <Text style={styles.button}>Sign in</Text>
            </Button>
            <Button
              onPress={() => navigation.navigate("signup")}
              style={styles.button}
            >
              <Text style={styles.button}>Sign up</Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Home;
