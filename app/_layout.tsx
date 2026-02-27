import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function RootLayout() {

  const [contador, setContador] = useState(0);

  function incrementarContador() {
    setContador(contador + 1);
  }

  return (
    <>
      <Text style={styles.titulo}>Contador: {contador}</Text>

      <TouchableOpacity style={styles.botao} onPress={incrementarContador}>
        <Text>Clique + 1</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 10,
    fontSize: 20,
    alignSelf: 'center'
  },
  botao: {
    alignSelf: 'center',
    backgroundColor: '#ddd',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 20,
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
  }
})