import { StyleSheet } from "react-native";
import { frontSizes } from "@contains/index";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapperProduct: {
    flex: 0.5,
  },
  product: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    paddingVertical: 7,
    paddingHorizontal: 7,
  },
  headerProduct: {
    flexDirection: "row",
  },
  imageProduct: {
    width: "60%",
    height: 100,
  },
  priceProduct: {
    color: "black",
    fontSize: frontSizes.h2,
    marginLeft: 10,
  },
  nameProduce: {
    color: "#195dea",
    fontSize: frontSizes.h4,
  },
  specification: {
    marginLeft: 4,
    color: "#000",
  },
  footerProduct: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  boxSaveProduct: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxStars: {
    flexDirection: "row",
  },
  iconStar: {
    marginHorizontal: 1,
  },
  textReview: {
    color: "#3ea6ff",
  },
});

export default styles;
