import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Font, AppLoading } from "expo";
import Navigator from './Navigator';

export default class App extends React.Component {
  state = {
    isReady: false
  };
  async _cacheResourcesAsync() {
    return Promise.all([
      Font.loadAsync({
        raleway: require("./assets/fonts/Raleway-Regular.ttf"),
        ralewayBold: require("./assets/fonts/Raleway-Bold.ttf"),
        ralewayThin: require("./assets/fonts/Raleway-Thin.ttf"),
        ralewayLight: require("./assets/fonts/Raleway-Light.ttf")
      })
    ]);
  }
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return <Navigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
