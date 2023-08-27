import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { getUserInfo } from "@utils/index";
import styles from "./styles/style";

interface UserInfoPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface UserInfo {
  picture: UserInfoPicture;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
  gender: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    country: string;
  };
  phone: string;
}

function formartDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleString();
}

function Profile() {
  const [userInfo, setUserInfo] = useState<UserInfo>(null);

  useEffect(() => {
    async function fetchData() {
      const dataRes: UserInfo = await getUserInfo();
      setUserInfo(dataRes);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.boxAvatar}>
        <Image
          source={{ uri: userInfo?.picture?.large }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.userInformation}>
        <Text style={styles.userInformationTitle}>UserName : </Text>
        <Text
          style={styles.userInformationValue}
        >{`${userInfo.name.title}: ${userInfo.name.last} ${userInfo.name.first}`}</Text>
      </View>
      <View style={styles.userInformation}>
        <Text style={styles.userInformationTitle}>Email : </Text>
        <Text style={styles.userInformationValue}>{userInfo.email}</Text>
      </View>
      <View style={styles.userInformation}>
        <Text style={styles.userInformationTitle}>DOB : </Text>
        <Text style={styles.userInformationValue}>
          {formartDate(userInfo.dob.date)}
        </Text>
      </View>
      <View style={styles.userInformation}>
        <Text style={styles.userInformationTitle}>Gender : </Text>
        <Text style={styles.userInformationValue}>{userInfo.gender}</Text>
      </View>
      <View style={styles.userInformation}>
        <Text style={styles.userInformationTitle}>Address : </Text>
        <Text
          style={styles.userInformationValue}
        >{`${userInfo.location.street.number} ${userInfo.location.street.name},  ${userInfo.location.city}, ${userInfo.location.country}`}</Text>
      </View>
      <View style={styles.userInformation}>
        <Text style={styles.userInformationTitle}>Address : </Text>
        <Text style={styles.userInformationValue}>{userInfo.phone}</Text>
      </View>
    </View>
  );
}

export default Profile;
