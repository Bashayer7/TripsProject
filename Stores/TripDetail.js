import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "native-base";
import { Image } from "react-native";
import tripStore from "./tripStore";

const TripDetail = ({ navigation, route }) => {
  const trip = route.params.trip;
  // const types = trip..map((type) => <Type key={type} type={type} />);
  return (
    <SafeAreaView>
      <View>
        <Text>{trip.title}</Text>
        <Text>{trip.discription}</Text>
        {/* <Image source={{ uri: trip.image }} style={styles.tripImage} /> */}
        <Text>{trip.image}</Text>
        <Button onPress={() => navigation.goBack()}>Back</Button>
      </View>
    </SafeAreaView>
  );
};

export default TripDetail;

const styles = StyleSheet.create({});
