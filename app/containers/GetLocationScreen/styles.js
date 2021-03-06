import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C4866"
  },

  text: {
    color: "white"
  },
  buttonContainer: {
    backgroundColor: "#000",
    paddingVertical: 15,
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 320
    //alignSelf: "center"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
}));
