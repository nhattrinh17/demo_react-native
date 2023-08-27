import { StyleSheet, Platform } from "react-native";
import { frontSizes } from "~/contains";

const styles = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: "row",
  },
  header: {
    height: 50,
    backgroundColor: "#ff4216",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: Platform.OS === "ios" ? "center" : "flex-start",
  },
  textHeader: {
    color: "white",
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "500",
  },
  body: {
    backgroundColor: Platform.OS === "android" ? "#f0eff4" : "#f3effd",
    height: "100%",
  },
  setting: {
    marginTop: 20,
  },
  titleSetting: {
    color: Platform.OS === "android" ? "#ff4216" : "#c4c0cc",
    fontWeight: Platform.OS === "android" ? "600" : "400",
    marginBottom: Platform.OS === "android" ? 20 : 0,
    marginLeft: 20,
  },
  settingBody: {
    backgroundColor: Platform.OS === "android" ? "#f0eff4" : "white",
  },
  settingCommon: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: Platform.OS === "ios" ? "space-between" : "flex-start",
  },
  iconSetting: {
    color: "#8a8990",
    marginRight: 20,
  },
  iconArrowRight: {
    color: "#8a8990",
    marginLeft: 4,
  },
  contentSettingCommon: {},
  textLanguageSetting: {
    color: "#000",
    fontSize: frontSizes.h4,
  },
  currentLanguageSetting: {
    color: "#c0bec0",
  },
  settingAccount: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textAccountSetting: {
    color: "#000",
    fontSize: frontSizes.h4,
  },
  settingSecurity: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  textSecuritySetting: {
    color: "#000",
    fontSize: frontSizes.h4,
  },
  switchSecurity: {
    position: "absolute",
    right: 20,
  },
});

export default styles;
