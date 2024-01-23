import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Wapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Image
          source={require("./Images/images/bg.png")}
          blurRadius={40}
          style={styles.bgimage}
        ></Image>
      </View>
    );
  }
}

const styles = {
  bgimage: {

  }
}

export default Wapp;
