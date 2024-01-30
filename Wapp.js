import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Iconos from "react-native-vector-icons/MaterialCommunityIcons"

class Wapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barraB: false
    };
  }

  render() {
    const busca = () => {
      if (!this.state.barraB) {
        this.setState({ barraB: true })
      } else {
        this.setState({ barraB: false })
      }
    }

    return (
      <View>
        <ImageBackground
          source={require("./Images/images/bg.png")}
          blurRadius={40}
          style={styles.bgimage}
        >
          <View style={[styles.view, { backgroundColor: this.state.barraB ? "gray" : "transparent" }]}>
            <Text style={[styles.text, { color: this.state.barraB ? "#fff" : "transparent" }]}>Busca ciudad</Text>
          </View>
          <TouchableOpacity style={styles.view2} onPress={busca}>
            <Iconos name="magnify" size={50} />
          </TouchableOpacity>
          <View>
            <Image
              source={require("./Images/images/partlycloudy.png")}
              style={styles.sun}
            >
            </Image>
            <Text style={styles.text2}>Parcialmente nublado</Text>
          </View>
          <View>
            <Image
              source={require("./Images/icons/wind.png")}
              style={styles.wind}
            >
            </Image>
            <Text style={styles.text3}>23 km</Text>
          </View>
          <View style={styles.vdrop}>
            <Image
              source={require("./Images/icons/drop.png")}
              style={styles.drop}
            >
            </Image>
            <Text style={styles.text3}>42%</Text>
          </View>
          <View style={styles.sun2}>
            <Image
              source={require("./Images/icons/sun.png")}
              style={styles.drop}
            >
            </Image>
            <Text style={styles.text3}>6:00 am</Text>
          </View>
          <View>
            <View style={styles.nose}>
              <Iconos name="calendar-blank" size={30} color="#fff"/>
              <Text style={styles.text3}>Daily forecast</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.cont}>
                <Image
                  source={require("./Images/images/heavyrain.png")}
                  style={styles.n}
                >
                </Image>
                <Text style={styles.text4}>
                  Monday
                </Text>
                <Text style={styles.text4}>
                  13°
                </Text>
              </View>
              <View style={styles.cont}>
                <Image
                  source={require("./Images/images/heavyrain.png")}
                  style={styles.n}
                ></Image>
                <Text style={styles.text4}>
                  Tuesday
                </Text>
                <Text style={styles.text4}>
                  13°
                </Text>
              </View>
              <View style={styles.cont}>
                <Image
                  source={require("./Images/images/heavyrain.png")}
                  style={styles.n}
                ></Image>
                <Text style={styles.text4}>
                  Monday
                </Text>
                <Text style={styles.text4}>
                  13°
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgimage: {
    height: "100%"
  },
  sun: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginLeft: 100
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
    opacity: 0.6
  },
  text: {
    fontSize: 20,
    marginTop: 8,
    marginLeft: 10,
  },
  view2: {
    borderWidth: 0,
    borderColor: "red",
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "gray",
    opacity: 0.8,
    marginTop: -50,
    marginLeft: 302
  },
  text2: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  wind: {
    width: 20,
    height: 20,
    marginTop: 30,
    marginLeft: 20,
  },
  text3: {
    color: "#fff",
    marginTop: -20,
    marginLeft: 50
  },
  drop: {
    width: 20,
    height: 20,
    marginTop: 30,
    marginLeft: 20
  },
  vdrop: {
    marginTop: -50,
    marginLeft: 140
  },
  sun2: {
    marginTop: -50,
    marginLeft: 250
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  n: {
    width: 80,
    height: 80
  },
  cont: {
    backgroundColor: "#21474b",
    height: 160,
    borderRadius: 20,
    padding: 15,
    margin: 10
  },
  text4: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  nose: {
    marginTop: 90,
    marginLeft: 15,
  }
})

export default Wapp;
