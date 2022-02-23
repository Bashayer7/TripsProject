import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack } from "native-base";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Item = ({ trip, navigation }) => {
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        <HStack w="100%" justifyContent="space-between" alignItems="center">
          <View>
            <Image source={{ uri: trip.image }} style={styles.tripImage} />
            <Text>{trip.title}</Text>
            <Text>{trip.discription}</Text>
          </View>
        </HStack>
      </Pressable>
    </SafeAreaView>
  );
};

export default Item;

const styles = StyleSheet.create({
  tripImage: {
    height: 100,
    width: 100,
  },
});
