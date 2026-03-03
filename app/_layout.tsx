import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [display, setDisplay] = useState("0");
  const [primeiroNumero, setPrimeiroNumero] = useState<number | null>(null);
  const [operacao, setOperacao] = useState<string | null>(null);

  const adicionarNumero = (numero: string) => {
    if (display === "0") {
      setDisplay(numero);
    } else {
      setDisplay(display + numero);
    }
  };

  const limpar = () => {
    setDisplay("0");
    setPrimeiroNumero(null);
    setOperacao(null);
  };

  const selecionarOperacao = (op: string) => {
    setPrimeiroNumero(parseFloat(display));
    setOperacao(op);
    setDisplay("0");
  };

  const calcular = () => {
    if (primeiroNumero === null || operacao === null) return;

    const segundoNumero = parseFloat(display);
    let resultado = 0;

    if (operacao === "+") {
      resultado = primeiroNumero + segundoNumero;
    }
    else if (operacao === "-") {
      resultado = primeiroNumero - segundoNumero;
    }
    else if (operacao === "*") {
      resultado = primeiroNumero * segundoNumero;
    }
    else if (operacao === "/") {
      resultado = primeiroNumero / segundoNumero;
    }

    setDisplay(resultado.toString());
    setPrimeiroNumero(null);
    setOperacao(null);
  };

  const calcularRaiz = () => {
    const numero = parseFloat(display);
    const resultado = Math.sqrt(numero);
    setDisplay(resultado.toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonSpecial} onPress={limpar}>
          <Text style={styles.buttonText}>C</Text>  
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.buttonGray} onPress={calcularRaiz}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero("1")}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero("2")}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero("3")}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => selecionarOperacao("/")}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero("4")}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero("5")}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero("6")}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => selecionarOperacao("*")}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero("7")}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero("8")}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero("9")}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => selecionarOperacao("-")}>
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero(".")}>
          <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => adicionarNumero("0")}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={calcular}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => selecionarOperacao("+")}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  displayContainer: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#000',
    padding: 20,
    marginBottom: 20,
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#000',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGray: {
    backgroundColor: '#d3d3d3',
    borderWidth: 3,
    borderColor: '#000',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSpecial: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#000',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  spacer: {
    width: 70,
  },
})