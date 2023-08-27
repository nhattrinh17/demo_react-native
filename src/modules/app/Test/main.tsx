import React from "react";
import { Text, View, StyleSheet, SectionList } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
    color: "pink",
  },
  item: {
    color: "#000",
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

function TestNative(props: any) {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: "D", data: ["Devin", "Dan", "Dominic"] },
          { title: "J", data: ["Java", "JavaScript"] },
          {
            title: "J",
            data: [
              "Jackson",
              "James",
              "Jillian",
              "Jimmy",
              "Joel",
              "John",
              "Julie",
            ],
          },
          {
            title: "J",
            data: [
              "Jackson",
              "James",
              "Jillian",
              "Jimmy",
              "Joel",
              "John",
              "Julie",
            ],
          },
        ]}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        // keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
}

export default TestNative;
