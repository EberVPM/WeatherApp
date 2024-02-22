import {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respuesta: 0,
      numero1: 0,
      numero2: 0
    };
  }

   
  render() {
    return (
      <View style={styles.content}>
        <Text>Número 1:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese un número"
          keyboardType="numeric"
        />
        <Text>Número 2:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese un número"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.texto}>Suma</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.texto}>Resta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.texto}>Multiplicacion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.texto}>Division</Text>
        </TouchableOpacity>
        <Text>Respuesta: {this.state.respuesta}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#3390FF',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    borderColor: '#606368',
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    padding: 8,
  },
  content: {
    margin: 15,
  },
});

export default Calculadora;
