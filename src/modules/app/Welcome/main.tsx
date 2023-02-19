import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles/style';
import constantsAssets from '@assets/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UiButton} from '@uiCore/index';

function Welcome(props: any): JSX.Element {
  const dataButton = ['Influencer', 'Business', 'Individual'];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={constantsAssets.background}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.header}>
          <Image
            source={constantsAssets.iconLogo}
            style={[styles.icon, styles.iconFire]}
          />
          <Text style={styles.text}>Trinhnhat.org</Text>
          <View style={styles.flex1}></View>
          <Image
            source={constantsAssets.iconQuestion}
            style={[styles.icon, styles.iconQuestion]}
          />
        </View>
        <View style={styles.emptyBox}></View>
        <View style={styles.contentWelcome}>
          <Text style={styles.textDesc}>Welcome to</Text>
          <Text style={styles.textName}>Trinhnhat.org!</Text>
          <Text style={styles.textDesc}>Please select your account type</Text>
        </View>
        <View style={styles.optionHome}>
          {dataButton.map((value, index) => (
            <UiButton content={value} iconName={'check-circle'} />
          ))}
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Icon name="check-circle" size={20} style={styles.iconButton} />
            <Text style={styles.textButton}>Individual</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.emptyBox}></View>
        <View style={styles.nextHome}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.descHome}>
          <Text style={styles.textDesc}>
            Don't know what account type to use?
          </Text>
          <Text style={[styles.textDesc, styles.colorCheckOut]}>
            Check out your post.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;
