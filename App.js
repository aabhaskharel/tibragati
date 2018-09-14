import React from "react";
import {
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Button,
  StyleSheet,
  Text,
  View
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //colorDefault: "#7DCFB6",
      scoreCount: 0
    };
  }

  increaseCounter = () => {
    this.setState(({ scoreCount }) => ({
      scoreCount: scoreCount + 1,
      colorDefault: "#1D4E89"
    }));
  };

  render() {
    colorDefault:"red"
    return (
      <View style={styles.container}>
        <Text style={styles.title}>T i b r a g a t i</Text>
        <View style={styles.playArea}>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={this.increaseCounter}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.changeButtonColor}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: this.state.colorDefault }
                ]}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Text style={styles.score}>{this.state.scoreCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00B2CA"
  },
  title: {
    color: "#1D4E89",
    fontFamily: "Menlo",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 80,
    alignSelf: "center"
  },
  playArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    padding: 5
  },
  box: {
    height: 115,
    width: 115,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    margin: "1%"
  },
  buttonClicked: {
    backgroundColor: "red"
  },
  score: {
    color: "#1D4E89",
    fontFamily: "Menlo",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    paddingBottom: 30
  }
});
