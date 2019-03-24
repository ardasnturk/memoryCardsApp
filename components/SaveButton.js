import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  UIManager,
  LayoutAnimation,
  ActivityIndicator
} from "react-native";
import { LinearGradient } from "expo";
import Lang from "../helpers/language";

var CustomLayoutSpring = {
  duration: 250,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    springDamping: 0.7,
  },
};


export default class SaveButton extends Component {
  state = {
    isPressed: false
  };

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
      LayoutAnimation.configureNext(CustomLayoutSpring);
    }

  render() {
    return (
      <LinearGradient
        colors={["#2f80ed", "#56CCF2"]}
        start={[0.2, 0.1]}
        style={[
          styles.container,
          { width: this.state.isPressed ? null : "80%" }
        ]}
      >
        {this.state.isPressed ? (
          <ActivityIndicator size="small" style={{ padding: 10 }} color="#fff" />
        ) : (
          <Text
            onPress={() => this.setState({ isPressed: true })}
            style={styles.text}
          >
            {Lang.t("save")}
          </Text>
        )}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
    bottom: 30,
    elevation: 3,
    borderRadius: 50
  },
  text: {
    fontFamily: "ralewayBold",
    color: "#fff",
    textAlign: "center",
    width: '100%',
    padding: 15
  }
});
