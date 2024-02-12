import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Iconos from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

class Wapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barraB: false,
      locaciones: ['Mexico', 'Guadalajara', 'timbuctu'],
      temperatura: '25',
      textoTemperatura: 'Parcialmente nublado',
      imagenTemp: '',
      viento: '23',
      lluvia: '42',
      amanece: '6:00 am',
      respuesta: null,
      country: "Mexico",
      name: "Guadalajara",
      region: "Jalisco",
      ciudad: ""
    };
  }

  render() {
    const busca = () => {
      let _this = this;

      axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=b29b218cd2414f978a4172423241202&q=${this.state.ciudad}&days=5&aqi=no&alerts=no&lang=es`,
        )
        .then(function (response) {
          console.log(response.data);
          _this.setState({temperatura: response.data.current.temp_c});
          _this.setState({
            textoTemperatura: response.data.current.condition.text,
          });
          _this.setState({imagenTemp: response.data.current.condition.icon});
          _this.setState({viento: response.data.current.wind_kph});
          _this.setState({lluvia: response.data.current.precip_mm});
          _this.setState({country: response.data.location.country});
          _this.setState({name: response.data.location.name});
          _this.setState({region: response.data.location.region});
          _this.setState({
            amanece: response.data.forecast.forecastday[0].astro.sunrise,
          });
          _this.setState({respuesta: response.data});
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
    };

    return (
      <View>
        <ImageBackground
          source={require('./Images/images/bg.png')}
          blurRadius={40}
          style={styles.bgimage}>
          <View
            style={[
              styles.view,
              {backgroundColor: "gray"},
            ]}>
            <TextInput
              style={[
                styles.text,
                {color: '#fff'},
              ]}
              placeholder='Buscar Ciudad'
              onChangeText={ciudad => this.setState({ciudad})}
              >
            </TextInput>
          </View>
          <TouchableOpacity style={styles.view2} onPress={busca}>
            <Iconos name="magnify" size={50} />
          </TouchableOpacity>
          <View>
            <Text style={styles.region}>{this.state.country}, {this.state.name}, {this.state.region}</Text>
            <Image
              source={
                this.state.imagenTemp === ''
                  ? require('./Images/images/partlycloudy.png')
                  : {uri: 'http:' + this.state.imagenTemp}
              }
              style={styles.sun}></Image>
            <Text style={styles.temperature}>{this.state.temperatura}°</Text>
            <Text style={styles.text2}>{this.state.textoTemperatura}</Text>
          </View>
          <View>
            <Image
              source={require('./Images/icons/wind.png')}
              style={styles.wind}></Image>
            <Text style={styles.text3}>{this.state.viento} km</Text>
          </View>
          <View style={styles.vdrop}>
            <Image
              source={require('./Images/icons/drop.png')}
              style={styles.drop}></Image>
            <Text style={styles.text3}>{this.state.lluvia}%</Text>
          </View>
          <View style={styles.sun2}>
            <Image
              source={require('./Images/icons/sun.png')}
              style={styles.drop}></Image>
            <Text style={styles.text3}>{this.state.amanece}</Text>
          </View>
          <View>
            <View style={styles.nose}>
              <Iconos name="calendar-blank" size={30} color="#fff" />
              <Text style={styles.text3}>Daily forecast</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.cont}>
                <Image
                  source={
                    !this.state.respuesta
                      ? require('./Images/images/heavyrain.png')
                      : {
                          uri:
                            'http:' +
                            this.state.respuesta.forecast.forecastday[1].day
                              .condition.icon,
                        }
                  }
                  style={styles.n}></Image>
                <Text style={styles.text4}>
                  {!this.state.respuesta
                    ? '2024-02-12'
                    : this.state.respuesta.forecast.forecastday[1].date}
                </Text>
                <Text style={styles.text4}>
                  {!this.state.respuesta
                    ? '13'
                    : this.state.respuesta.forecast.forecastday[1].day
                        .maxtemp_c}
                  °
                </Text>
              </View>
              <View style={styles.cont}>
                <Image
                  source={
                    !this.state.respuesta
                      ? require('./Images/images/heavyrain.png')
                      : {
                          uri:
                            'http:' +
                            this.state.respuesta.forecast.forecastday[2].day
                              .condition.icon,
                        }
                  }
                  style={styles.n}></Image>
                <Text style={styles.text4}>
                  {!this.state.respuesta
                    ? '2024-02-12'
                    : this.state.respuesta.forecast.forecastday[2].date}
                </Text>
                <Text style={styles.text4}>
                  {!this.state.respuesta
                    ? '13'
                    : this.state.respuesta.forecast.forecastday[2].day
                        .maxtemp_c}
                  °
                </Text>
              </View>
              <View style={styles.cont}>
                <Image
                  source={
                    !this.state.respuesta
                      ? require('./Images/images/heavyrain.png')
                      : {
                          uri:
                            'http:' +
                            this.state.respuesta.forecast.forecastday[3].day
                              .condition.icon,
                        }
                  }
                  style={styles.n}></Image>
                <Text style={styles.text4}>
                  {!this.state.respuesta
                    ? '2024-02-12'
                    : this.state.respuesta.forecast.forecastday[3].date}
                </Text>
                <Text style={styles.text4}>
                  {!this.state.respuesta
                    ? '13'
                    : this.state.respuesta.forecast.forecastday[3].day
                        .maxtemp_c}
                  °
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
    height: '100%',
  },
  sun: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginLeft: 100,
  },
  view: {
    borderWidth: 0,
    borderColor: 'red',
    with: 300,
    height: 50,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 40,
    opacity: 0.6,
  },
  text: {
    fontSize: 20,
    marginTop: 8,
    marginLeft: 10,
  },
  view2: {
    borderWidth: 0,
    borderColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'gray',
    opacity: 0.8,
    marginTop: -50,
    marginLeft: 302,
    marginBottom: 20
  },
  text2: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  wind: {
    width: 20,
    height: 20,
    marginTop: 30,
    marginLeft: 20,
  },
  text3: {
    color: '#fff',
    marginTop: -20,
    marginLeft: 50,
  },
  drop: {
    width: 20,
    height: 20,
    marginTop: 30,
    marginLeft: 20,
  },
  vdrop: {
    marginTop: -50,
    marginLeft: 140,
  },
  sun2: {
    marginTop: -50,
    marginLeft: 250,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  n: {
    width: 80,
    height: 80,
  },
  cont: {
    backgroundColor: '#21474b',
    height: 150,
    borderRadius: 20,
    padding: 15,
    margin: 10,
  },
  text4: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '800',
  },
  nose: {
    marginTop: 40,
    marginLeft: 15,
  },
  temperature: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
    fontWeight: '800',
  },
  region: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center"
  }
});

export default Wapp;
