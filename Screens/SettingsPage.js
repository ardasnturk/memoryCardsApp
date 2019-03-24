import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Localization } from "expo";
import Lang from "../helpers/language";
import Picker from "../components/Picker";
import SaveButton from "../components/SaveButton";

export default class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromLang: "tr",
      toLang: "en"
    };
  }

  componentWillMount = () => {
    this.setLanguages();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{Lang.t("appName")}</Text>
        <Text style={styles.label}>{Lang.t("chooseOwnLang")}:</Text>
        <Picker
          onChange={value => this.setState({ fromLang: value })}
          language={this.state.fromLang}
        />
        <Text style={[styles.label, { marginTop: 20 }]}>
          {Lang.t("chooseTargetLang")}:
        </Text>
        <Picker
          onChange={value => this.setState({ toLang: value })}
          language={this.state.toLang}
        />
        <SaveButton onPress={() => null} />
      </View>
    );
  }

  setLanguages() {
    const { locale } = Localization;
    this.setState({ fromLang: locale[0] + locale[1] });
    if (locale === "en") this.setState({ toLang: "de" });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2"
  },
  title: {
    fontFamily: "ralewayBold",
    color: "#27AE60",
    fontSize: 35,
    marginBottom: 50
  },
  label: {
    fontFamily: "ralewayBold",
    color: "#333"
  }
});
