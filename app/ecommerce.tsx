import { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const categorias = [
  { id: null, nome: 'Todas' },
  { id: '1', nome: 'Camisas' },
  { id: '2', nome: 'Tênis' },
  { id: '3', nome: 'Acessórios' },
];
const produtos = [
  { id: '1', nome: 'Camisa Polo', categoriaId: '1', imagem: require('../assets/images/camisa.png') },
  { id: '2', nome: 'Tênis Esportivo', categoriaId: '2', imagem: require('../assets/images/tenis.png') },
  { id: '3', nome: 'Relógio de Pulso', categoriaId: '3', imagem: require('../assets/images/relogio.png') },
  { id: '4', nome: 'Relógio de Pulso prata', categoriaId: '3', imagem: require('../assets/images/relogio.png') },
];

const { width, height } = Dimensions.get('window')
const paddingHorizontal = height * 0.05
const paddingVertical = width * 0.02

export default function Ecommerce() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(categorias[0].id);

  
  const produtosFiltrados = categoriaSelecionada
    ? produtos.filter((produto) => produto.categoriaId === categoriaSelecionada)
    : produtos;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.filtroCategorias}
      >
        {categorias.map((categoria) => (
          <TouchableOpacity key={categoria.id} style={styles.botao} onPress={() => setCategoriaSelecionada(categoria.id)}>
            <Text style={styles.textoBotao}>{categoria.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.itens}>
          {produtosFiltrados.map((produto) => (
            <View key={produto.id} style={styles.itens}>
              <Text>{produto.nome}</Text>
              <Image source={produto.imagem} style={styles.imagemProduto} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  filtroCategorias: {
    alignItems: 'center',
    flex: 1,
  },
  botao: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 999,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
  },
  textoBotao: {
    color: '#333333',
    fontSize: 15,
  },
  main: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itens: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemProduto: {
    width: width * 0.8,
    height: height * 0.3,
    resizeMode: 'contain',
  },
});
