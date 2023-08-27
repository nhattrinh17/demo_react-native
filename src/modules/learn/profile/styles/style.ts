import { StyleSheet } from "react-native";
import { frontSizes } from "~/contains";

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  boxAvatar: {
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    marginHorizontal: "auto",
    resizeMode: "cover",
    borderRadius: 120,
  },
  userInformation: {
    marginVertical: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  userInformationTitle: {
    color: "#000",
    fontSize: frontSizes.h4,
    fontWeight: "bold",
  },
  userInformationValue: {
    color: "#000",
    fontSize: frontSizes.h5,
  },
});

export default styles;
