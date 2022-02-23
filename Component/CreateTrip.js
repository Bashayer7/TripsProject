import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CreateTrip = () => {
  const [trip, setTrip] = useState({
    title: "",
    discription: "",
    image: "",
  });
  const handleSubmit = () => {
    console.log(trip);
  };

  const handleAdd = () => {
    const newtrip = {
      trip: trip,
    };
    tripStore.addNewTrip(newtrip);
  };
  return (
    <View>
      <Text>CreateTrip</Text>
    </View>
  );
};

export default CreateTrip;

const styles = StyleSheet.create({});
