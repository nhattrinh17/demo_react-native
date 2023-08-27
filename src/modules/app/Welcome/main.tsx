import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles/style";
import constantsAssets from "@assets/index";
import { UiButton } from "@uiCore/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "@contains/index";
// import { Alert } from "react-native";

function Welcome(props: any): JSX.Element {
  const { navigation } = props;
  const dataButton = ["Influencer", "Business", "Individual"];
  const [accountType, setAccountType] = useState("Influencer");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={constantsAssets.background}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.header}>
          <Image
            source={constantsAssets.iconLogo}
            style={[styles.icon, styles.iconFire]}
          />
          <Text style={styles.text}>TestApp.org</Text>
          <View style={styles.flex1}></View>
          <Icon
            name="question-circle"
            style={[styles.icon, styles.iconQuestion]}
          />
        </View>
        <View style={styles.emptyBox}></View>
        <View style={styles.contentWelcome}>
          <Text style={styles.textDesc}>Welcome to</Text>
          <Text style={styles.textName}>TestApp.org!</Text>
          <Text style={styles.textDesc}>Please select your account type</Text>
        </View>
        <View style={styles.optionHome}>
          {dataButton.map((value, index) =>
            accountType === value ? (
              <UiButton
                content={value}
                iconName="check-circle"
                backgroundColor="white"
                textColor={colors.primary}
                iconColor="#0DD795"
                key={index}
                handlePerss={() => setAccountType(value)}
              />
            ) : (
              <UiButton
                content={value}
                key={index}
                height={50}
                handlePerss={() => setAccountType(value)}
              />
            )
          )}
        </View>
        <View style={styles.emptyBox}></View>
        <View style={styles.nextHome}>
          <UiButton
            content="Login"
            height={50}
            handlePerss={() => navigation.navigate("Login")}
          />
        </View>
        <View style={styles.descHome}>
          <Text style={styles.textDesc}>Warn to register new Account?</Text>
          <Text style={[styles.textDesc, styles.textRegister]}>Register!</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;
