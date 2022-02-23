import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { observer } from "mobx-react";
import authstore from "./authStore";
import tripStore from "./tripStore";
import { VStack, Button } from "native-base";
import TripItem from "./TripItem";
// import Item from "./TripItem";

const List = ({ navigation }) => {
  const triplist = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));
  console.log(triplist);

  const handleLogOut = () => {
    if (authstore.user) {
      tripStore.logOut();
    } else {
      alert("good bye");
    }
  };

  return (
    <View>
      <VStack space={3}>{TripItem}</VStack>
      <Button onPress={handleLogOut}>
        <Text style={styles.buttonR}>logOut</Text>
      </Button>
      <View>{triplist}</View>
      {/* <Button onPress={handleAdd}>
        <Text style={styles.buttonR}>create new Trip</Text>
      </Button> */}
      {/* 
      {/* <Button
        onPress={() => navigation.navigate("createTrip")}
        style={styles.button}
      >
        <Text style={styles.buttonT}>create new Trip</Text>
      </Button> */}
    </View>
  );
};

export default observer(List);

const styles = StyleSheet.create({
  buttonR: {
    color: "black",
    fontSize: 20,
    width: 100,
    textAlign: "center",
  },
});
