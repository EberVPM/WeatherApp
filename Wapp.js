import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import Iconos from "react-native-vector-icons/MaterialCommunityIcons"

class Wapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require("./Images/images/bg.png")}
          blurRadius={40}
          style={styles.bgimage}
        >
          <View style={styles.view}>
            <Text style={styles.text}>Busca ciudad</Text>
          </View>
          <View style={styles.view2}>
            <Iconos name="magnify" size={50} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgimage: {
    height: 800
  },
  view: {
    borderWidth: 0,
    borderColor: "red",
    with: 300,
    height: 50,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 40,
    backgroundColor: "gray",
    opacity: 0.6
  },
  text: {
    color: "white",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 10,
  },
  view2: {
    borderWidth: 0,
    borderColor: "red",
    width: 50,
    height:50,
    borderRadius: 50,
    backgroundColor: "gray",
    opacity: 0.8,
    marginTop:-50,
    marginLeft: 302
  }
})

export default Wapp;
