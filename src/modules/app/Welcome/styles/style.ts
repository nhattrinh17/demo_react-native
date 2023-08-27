import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 100,
    width: "100%",
    height: 200,
  },
  image: {
    flex: 100,
    zIndex: 100,
  },
  flex1: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    paddingStart: 10,
    paddingEnd: 10,
    flex: 10,
  },
  text: {
    color: "white",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  iconFire: {
    marginHorizontal: 10,
  },
  iconQuestion: {
    fontSize: 20,
    color: "white",
  },
  icon: {
    width: 24,
    height: 24,
  },
  emptyBox: {
    flex: 15,
  },
  contentWelcome: {
    flex: 20,
    alignItems: "center",
    paddingTop: 35,
    justifyContent: "center",
  },
  optionHome: {
    flex: 40,
  },
  nextHome: {
    flex: 15,
  },
  descHome: {
    flex: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textDesc: {
    fontSize: 14,
    color: "white",
    marginBottom: 20,
  },
  textName: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: "row",
    alignContent: "center",
  },
  textButton: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
    flex: 1,
    position: "absolute",
    left: "48%",
  },
  textRegister: {
    color: "#0DD795",
    textDecorationLine: "underline",
  },
});

export default styles;
