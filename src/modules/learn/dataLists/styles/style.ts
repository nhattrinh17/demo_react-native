import { StyleSheet, Dimensions } from "react-native";

const widthImage = 160;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: "white",
  },
  wrapper: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  image: {
    width: widthImage,
    height: 170,
    borderRadius: 10,
  },
  content: {
    width: width - widthImage,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    borderBottomWidth: 1.2,
    borderBottomColor: "black",
  },
  textStatus: {
    color: "#f5cf4e",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  socialNetwork: {
    marginTop: 8,
    flexDirection: "row",
  },
  iconSocialNetwork: {
    marginHorizontal: 4,
    color: "#666",
  },
  listDataHorizontal: {
    flexDirection: "row",
    marginVertical: 4,
    // marginHorizontal: 8,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  wrapperHorizontal: {
    marginHorizontal: 4,
  },
  imageDemo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "#666",
    borderWidth: 1,
  },
  textDemo: {
    color: "#666",
    fontSize: 12,
  },

  header: {
    margin: 8,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },

  inputSearch: {
    width: "86%",
  },

  iconNav: {
    color: "#000",
    marginLeft: 10,
  },
});

export default styles;
