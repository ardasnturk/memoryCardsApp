import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  UIManager,
  LayoutAnimation
} from "react-native";
import Lang from "../helpers/language";

export default class Picker extends Component {
  state = {
    isListOpen: false,
    selectedLang: this.props.language,
    languages: ["tr", "en", "fr", "it", "de", "es"]
  };

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  renderContent = () => {
    if (this.state.isListOpen) {
      return this.state.languages.map((lang, index) => (
        <Text
          onPress={() => this.handleLangPress(lang)}
          key={index.toString()}
          style={styles.text}
        >
          {Lang.t(lang)}
        </Text>
      ));
    } else {
      return (
        <Text
          onPress={() => this.setState({ isListOpen: true })}
          style={styles.text}
        >
          {Lang.t(this.state.selectedLang)}
        </Text>
      );
    }
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { borderRadius: this.state.isListOpen ? 10 : 50 }
        ]}
      >
        {this.renderContent()}
      </View>
    );
  }

  handleLangPress = (lang) => {
    this.props.onChange(lang);
    this.setState({ isListOpen: false, selectedLang: lang });
  }
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderColor: "#27AE60",
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: 'hidden'
  },
  text: {
    fontFamily: "ralewayBold",
    color: "#27AE60",
    width: "100%",
    textAlign: "center",
    padding: 10
  }
});
