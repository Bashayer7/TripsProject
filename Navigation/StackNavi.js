import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Auth/SignIn";
import Signup from "../Auth/SignUp";
import Home from "../Component/Home";
import List from "../Stores/List";
import TripDetail from "../Stores/TripDetail";
import AboutUs from "../Component/AboutUs";
import CreateTrip from "../Component/CreateTrip";

const StackNavi = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouterName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "grey",
          },
          headerTintColor: "orange",
        }}
      />
      <Screen
        name="Trips"
        component={List}
        options={{ headerTitle: "All Trips" }}
      />

      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route }) => ({
          title: route.params.trip.name,
        })}
      />
      <Screen name="signin" component={Signin} />
      <Screen name="signup" component={Signup} />
      <Screen name="aboutUs" component={AboutUs} />
      <Screen name="createTrip" component={CreateTrip} />
    </Navigator>
  );
};

export default StackNavi;

const styles = StyleSheet.create({});
