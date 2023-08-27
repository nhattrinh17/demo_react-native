import React, { useState } from "react";
import { Platform, Text, View, Switch } from "react-native";
import styles from "./styles/main";
import Icon from "react-native-vector-icons/Ionicons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";

function SettingCommon(props: any): JSX.Element {
  return (
    <View style={styles.settingCommon}>
      {Platform.OS === "android" ? (
        <>
          <Icon name={props.iconName} style={styles.iconSetting} size={20} />
          <View style={styles.contentSettingCommon}>
            <Text style={styles.textLanguageSetting}>{props.name}</Text>
            <Text style={styles.currentLanguageSetting}>{props.value}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.flexDirectionRow}>
            <Icon name={props.iconName} style={styles.iconSetting} size={20} />
            <Text style={styles.textLanguageSetting}>{props.name}</Text>
          </View>
          <View style={styles.flexDirectionRow}>
            <Text style={styles.currentLanguageSetting}>{props.value}</Text>
            <IconAntDesign
              name="right"
              size={20}
              style={styles.iconArrowRight}
            />
          </View>
        </>
      )}
    </View>
  );
}

function SettingAccountAndMisc(props: any): JSX.Element {
  return (
    <View style={styles.settingAccount}>
      <View style={styles.flexDirectionRow}>
        <IconFontAwesome
          name={props.iconName}
          size={20}
          style={styles.iconSetting}
        />
        <Text style={styles.textAccountSetting}>{props.name}</Text>
      </View>
      {Platform.OS === "ios" && (
        <IconAntDesign name="right" size={20} style={styles.iconArrowRight} />
      )}
    </View>
  );
}

function SettingSecurity(props: any): JSX.Element {
  const { iconName, name, valueSwitch, setValueSwitch } = props;

  return (
    <View style={styles.settingBody}>
      <View style={styles.settingSecurity}>
        <IconFontAwesome5
          name={iconName}
          size={20}
          style={styles.iconSetting}
        />
        <Text style={styles.textSecuritySetting}>{name}</Text>
        <Switch
          style={styles.switchSecurity}
          trackColor={{ false: "#767577", true: "#de8d72" }}
          thumbColor={valueSwitch ? "#de4309" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setValueSwitch}
          value={valueSwitch}
        />
      </View>
    </View>
  );
}

export default function Setting(): JSX.Element {
  const [isLockApp, setIsLockApp] = useState(false);
  const [useFingerprint, setUseFingerprint] = useState(false);
  const [isChangePass, setIsChangePass] = useState(false);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Setting UI</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.setting}>
          <Text style={styles.titleSetting}>Common</Text>
          <View style={styles.settingBody}>
            <SettingCommon
              name="Language"
              iconName="globe-outline"
              value="English"
            />
            <SettingCommon
              name="Environment"
              iconName="cloud-outline"
              value="Product"
            />
          </View>
        </View>
        <View style={styles.setting}>
          <Text style={styles.titleSetting}>Account</Text>
          <View style={styles.settingBody}>
            <SettingAccountAndMisc name="Phone Number" iconName="phone" />
            <SettingAccountAndMisc name="Email" iconName="envelope-o" />
            <SettingAccountAndMisc name="Sign out" iconName="sign-out" />
          </View>
        </View>
        <View style={styles.setting}>
          <Text style={styles.titleSetting}>Security</Text>
          <View style={styles.settingBody}>
            <SettingSecurity
              name="Lock app in background"
              iconName="mobile"
              valueSwitch={isLockApp}
              setValueSwitch={() => setIsLockApp((pre) => !pre)}
            />
            <SettingSecurity
              name="Use fingerprint"
              iconName="fingerprint"
              valueSwitch={useFingerprint}
              setValueSwitch={() => setUseFingerprint((pre) => !pre)}
            />
            <SettingSecurity
              name="Change password"
              iconName="user-lock"
              valueSwitch={isChangePass}
              setValueSwitch={() => setIsChangePass((pre) => !pre)}
            />
          </View>
        </View>
        <View style={styles.setting}>
          <Text style={styles.titleSetting}>Miscellaneous</Text>
          <View style={styles.settingBody}>
            <SettingAccountAndMisc name="Terms of Service" iconName="group" />
            <SettingAccountAndMisc
              name="Open source licenses"
              iconName="sticky-note"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
