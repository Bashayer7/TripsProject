import { Wrap } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // background: { flex: 1, width: "100%", height: "100%" },
  // title: { color: "#000", fontSize: "30", textAlign: "center" },
  button: {
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "orange",
    color: "black",
    height: 50,
    fontSize: 20,
    margin: 15,
    width: 100,
    textAlign: "center",
  },
  buttonT: {
    color: "black",
    fontSize: 20,
    width: 100,
    textAlign: "center",
  },
  buttonWrapper: {
    marginTop: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    height: "50%",
    padding: 20,
    margin: 30,
  },
  twoRows: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  tripImage: {
    height: 150,
    width: 150,
  },
  title: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  ab: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "orange",
  },
});

export default styles;
