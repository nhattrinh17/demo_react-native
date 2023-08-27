import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Grid from "@modules/learn/grid/main";
import DataList from "@modules/learn/dataLists/main";
import Setting from "@modules/learn/settings/main";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconIonicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function GetIconTabBar(nameTab: string, focused: boolean): JSX.Element {
  switch (nameTab) {
    case "Grid":
      return (
        <IconEntypo
          name="grid"
          size={20}
          color={focused ? "#ff4216" : "#333"}
        />
      );
    case "DataList":
      return (
        <IconIonicons
          name="fast-food"
          size={20}
          color={focused ? "#ff4216" : "#333"}
        />
      );
    case "Setting":
      return (
        <IconIonicons
          name="settings"
          size={20}
          color={focused ? "#ff4216" : "#333"}
        />
      );
    default:
      return (
        <IconIonicons
          name="settings"
          size={20}
          color={focused ? "#ff4216" : "#333"}
        />
      );
  }
}

function Navigation(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarActiveTintColor: "#ff4216",
          tabBarIcon: ({ focused }) => {
            return GetIconTabBar(route.name, focused);
          },
        };
      }}
    >
      <Tab.Screen name={"Grid"} component={Grid} />
      <Tab.Screen name={"DataList"} component={DataList} />
      <Tab.Screen name={"Setting"} component={Setting} />
    </Tab.Navigator>
  );
}

export default Navigation;
