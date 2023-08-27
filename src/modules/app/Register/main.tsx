import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import constantsAssets from "@assets/index";
import { BlockInputStyleOne, UiButton } from "@uiCore/index";
import { validateEmail } from "~/utils";
import styles from "./styles/style";

function Register(props: any): JSX.Element {
  const { navigation } = props;
  const win = Dimensions.get("window");
  const ratioBackgroundTop = (win.width - 20) / 374;
  const ratioBackgroundBottom = win.width / 374;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  //   const;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
        <ImageBackground
          source={constantsAssets.backgroundLoginTop}
          resizeMode="cover"
          style={[styles.backgroundTop, { height: ratioBackgroundTop * 558 }]}
        >
          {/* style={[styles.backgroundTop]}> */}
          <Image
            source={constantsAssets.imageLogin}
            style={styles.imageLogin}
            resizeMode="contain"
          />
          <View style={styles.textBeforeLogin}>
            <Text style={styles.textWelcome}>Welcome</Text>
            <Text
              style={styles.textPolicy}
              onPress={() => Alert.alert("Hey you", "Oki")}
            >
              Term and privacy policy
            </Text>
          </View>
          <View>
            <BlockInputStyleOne
              placeholder="Email Address"
              sourceImage={constantsAssets.iconMail}
              styleIcon="image"
              keyboardType="email-address"
              onBlur={(data) => validateEmail(data)}
              textWarning="Email invalid"
              value={email}
              onChange={(newData) => setEmail(newData)}
            />
            <BlockInputStyleOne
              placeholder="Password"
              sourceImage={constantsAssets.iconPassword}
              styleIcon="image"
              keyboardType="visible-password"
              onBlur={(value) => value.length > 6}
              textWarning="Password minimum 6 characters"
              type="password"
              value={password}
              onChange={(newData) => setPassword(newData)}
            />
            <BlockInputStyleOne
              placeholder="Re password"
              sourceImage={constantsAssets.iconPassword}
              styleIcon="image"
              keyboardType="visible-password"
              type="password"
              onBlur={(value) => value === password}
              textWarning="Password dose not match"
              value={rePassword}
              onChange={(newData) => setRePassword(newData)}
            />
          </View>
        </ImageBackground>
        <ImageBackground
          source={constantsAssets.backgroundLoginBottom}
          resizeMode="contain"
          style={[
            styles.backgroundBottom,
            { height: ratioBackgroundBottom * 419 },
          ]}
        >
          <View style={{ height: 140 }}></View>
          <View style={styles.boxLoginAndRegister}>
            <UiButton
              handlePerss={() => navigation.navigate("Login")}
              content="Login"
              backgroundColor={"#0386D0"}
              width={"50%"}
              borderRadius={30}
            />
            <UiButton
              content="Register"
              borderColor={"#0386D0"}
              textColor={"#0386D0"}
              width={"50%"}
              borderRadius={30}
            />
          </View>
          <View style={styles.boxLoginTouchID}>
            <Text style={styles.textLoginTouch}>or connect with</Text>
            <View style={styles.loginSocialNetwork}>
              <Icon
                name="facebook-square"
                size={30}
                color="#3B5998"
                style={styles.iconSocialNetwork}
              />
              <Icon
                name="instagram-square"
                size={30}
                color="#3B5998"
                style={styles.iconSocialNetwork}
              />
              <Icon
                name="pinterest"
                size={30}
                color="#CB2027"
                style={styles.iconSocialNetwork}
              />
              <Icon
                name="linkedin"
                size={30}
                color="#007AB9"
                style={styles.iconSocialNetwork}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Register;
