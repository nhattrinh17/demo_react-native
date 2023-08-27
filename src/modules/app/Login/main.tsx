import React, { useRef } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import styles from "./styles/style";
import constantsAssets from "@assets/index";
import { validateEmail } from "../../../utils/index";
import { BlockInputStyleOne, UiButton } from "@uiCore/index";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from "react-native-vector-icons/FontAwesome5";

function Login(props: any): JSX.Element {
  const { navigation } = props;
  const win = Dimensions.get("window");
  const ratioBackgroundTop = (win.width - 20) / 374;
  const ratioBackgroundBottom = win.width / 374;

  const checkBoxRef = useRef(false);

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
            <Text style={styles.textWelcomeDesc}>
              By signing in you are agreeing our
            </Text>
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
            />
            <BlockInputStyleOne
              placeholder="Password"
              sourceImage={constantsAssets.iconPassword}
              styleIcon="image"
              keyboardType="visible-password"
              type="password"
            />
          </View>
          <View>
            <BouncyCheckbox
              style={styles.checkBox}
              size={20}
              fillColor="#0386D0"
              // unfillColor="#FFFFFF"
              text="Remember password"
              iconStyle={{ borderColor: "#FAFAFA" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={{
                fontFamily: "JosefinSans-Regular",
                textDecorationLine: "none",
              }}
              onPress={(isChecked: boolean) => {
                checkBoxRef.current = isChecked;
              }}
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
          <View style={{ height: 120 }}></View>
          <Text style={styles.textForgetPass}>Forget Password</Text>
          <View style={styles.boxLoginAndRegister}>
            <UiButton
              handlePerss={() => {
                navigation.navigate("Navigation");
              }}
              content="Login"
              backgroundColor={"#0386D0"}
              width={"50%"}
              borderRadius={30}
            />
            <UiButton
              handlePerss={() => navigation.navigate("Register")}
              content="Register"
              borderColor={"#0386D0"}
              textColor={"#0386D0"}
              width={"50%"}
              borderRadius={30}
            />
          </View>
          <View style={styles.boxLoginTouchID}>
            <Text style={styles.textLoginTouch}>Login with touch ID</Text>
            <View style={styles.boxIonTouch}>
              <Icon name="fingerprint" size={40} color="#fff" />
            </View>
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

export default Login;
