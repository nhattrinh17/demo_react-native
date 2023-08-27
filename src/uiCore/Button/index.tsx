import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome5";

function UiButton(props: any): JSX.Element {
  const {
    content,
    iconName,
    width,
    height,
    borderColor,
    borderRadius,
    backgroundColor,
    handlePerss,
    textColor,
    iconColor,
    paddingHorizontal,
    paddingVertical,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: width || "auto",
          paddingHorizontal: paddingHorizontal || 8,
          paddingVertical: paddingVertical || 12,
          height: height,
          backgroundColor: backgroundColor || styles.button.backgroundColor,
          borderColor: borderColor || styles.button.borderColor,
          borderRadius: borderRadius || styles.button.borderRadius,
        },
      ]}
      onPress={handlePerss}
    >
      {iconName && (
        <Icon
          name={iconName}
          size={20}
          style={[
            styles.iconButton,
            { color: iconColor || styles.iconButton.color },
          ]}
        />
      )}
      <Text
        style={[
          styles.textButton,
          { color: textColor || styles.textButton.color },
        ]}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
}

UiButton.propTypes = {
  content: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  handlePerss: PropTypes.func,
  textColor: PropTypes.string,
  iconColor: PropTypes.string,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
};

export default UiButton;
