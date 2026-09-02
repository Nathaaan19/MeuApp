import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Ecommerce from "./ecommerce";

export default function Onboarding() {
  const [telaAtual, setTelaAtual] = useState('home');

  const { width, height } = useWindowDimensions();
  const logoSize = Math.max(72, Math.min(Math.min(width, height) * 0.2, 120));

  if (telaAtual === 'ecommerce') {
    return (
      <Ecommerce />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.conteinerTitulo}>
          <View
            style={[
              styles.logo,
              {
                width: logoSize,
                height: logoSize,
                borderRadius: logoSize / 2,
              },
            ]}
          ></View>
          <Text style={styles.titulo}>Boas-vindas</Text>
          <Text style={styles.subtitulo}>app para algo</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.botao} onPress={() => setTelaAtual('ecommerce')}>
          <Text style={styles.textoBotao}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 42,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  conteinerTitulo: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  logo: {
    backgroundColor: 'lightgray',
  },
  botao: {
    backgroundColor: '#6C63FF',
    width: '100%',
    height: '150%',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
  }
})
