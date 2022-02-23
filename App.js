import { StyleSheet, Text, View } from "react-native";

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import StackNavi from "./Navigation/StackNavi";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavi />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
