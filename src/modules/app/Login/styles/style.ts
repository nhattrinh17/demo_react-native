import { frontSizes } from "@contains/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#036BB9",
    overflow: "scroll",
  },
  backgroundTop: {
    color: "#000",
    alignItems: "center",
    zIndex: 1,
    marginHorizontal: 10,
  },

  textWelcome: {
    fontSize: frontSizes.h1,
    color: "#000",
    textAlign: "center",
    fontWeight: "400",
  },

  textWelcomeDesc: {
    fontSize: frontSizes.h4,
    color: "#6B5E5E",
    marginVertical: 4,
  },

  textPolicy: {
    fontSize: frontSizes.h4,
    color: "#0386D0",
    textAlign: "center",
    textDecorationLine: "underline",
    marginBottom: 4,
  },

  imageLogin: {
    width: "100%",
    top: 46,
    left: 4,
    right: 4,
  },

  textBeforeLogin: {
    marginTop: 44,
    marginBottom: 12,
  },

  checkBox: {
    left: -50,
  },

  backgroundBottom: {
    position: "relative",
    transform: [{ rotate: "-1deg" }],
    bottom: 175,
    flexDirection: "column",
  },

  textForgetPass: {
    color: "#0386D0",
    fontSize: frontSizes.h4,
    fontWeight: "500",
    textAlign: "right",
    marginRight: 28,
  },

  boxLoginAndRegister: {
    height: 70,
    marginHorizontal: 40,
    marginTop: 20,
    flexDirection: "row",
  },

  boxLoginTouchID: {
    marginVertical: 4,
    marginHorizontal: 40,
    flexDirection: "column",
    alignItems: "center",
  },

  textLoginTouch: {
    color: "#6B5E5E",
    textAlign: "center",
  },

  boxIonTouch: {
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#0386D0",
    marginVertical: 16,
  },

  loginSocialNetwork: {
    marginTop: 16,
    flexDirection: "row",
  },

  iconSocialNetwork: {
    marginHorizontal: 4,
  },
});

export default styles;
