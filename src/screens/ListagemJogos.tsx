import axios from "axios";
import React, { useState, useEffect } from "react";
import {ScrollView,StatusBar,StyleSheet,Text,TextInput,TouchableOpacity,View,FlatList,
} from "react-native";
import { Image } from "react-native-animatable";
import Footer from "../components/Footer";

interface Jogos {
  nome: string;
  preco: string;
  descricao: string;
  classificacao: string;
  plataformas: string;
  desenvolvedor: string;
  distribuidora: string;
  categoria: string;
}

function ListagemJogos(): React.JSX.Element {
  const [jogos, setJogos] = useState<Jogos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.137.11.208:8000/api/return/all/games');
        if (Array.isArray(response.data.data)) {
          setJogos(response.data.data);
        } else {
          // console.error('A API deve retornar um array de jogos');
        }
      } catch (error) {
        // console.error(`Erro: ${error.message}`);
        // if (error.response) {
        //   console.error(`Status: ${error.response.status} ${error.response.statusText}`);
        // }
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: Jogos }) => {
    return (
      <View style={styles.jogoContainer}>
        
        <Text style={styles.jogoText}>{`Nome: ${item.nome}`}</Text>
        <Text style={styles.jogoText}>{`Preço: ${item.preco}`}</Text>
        <Text style={styles.jogoText}>{`Descrição: ${item.descricao}`}</Text>
        <Text style={styles.jogoText}>{`Classificação: ${item.classificacao}`}</Text>
        <Text style={styles.jogoText}>{`Plataformas: ${item.plataformas}`}</Text>
        <Text style={styles.jogoText}>{`Desenvolvedor: ${item.desenvolvedor}`}</Text>
        <Text style={styles.jogoText}>{`Distribuidora: ${item.distribuidora}`}</Text>
        <Text style={styles.jogoText}>{`Categoria: ${item.categoria}`}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#6c5ce7'}></StatusBar>
      <View style={styles.header}>
        <Image style={styles.imagem} source={require('../assests/image/logos.png')}></Image>
      </View>
      <FlatList showsVerticalScrollIndicator={false}
        data={jogos}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
        style={{ height: '70%' }}
      />
     <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484538'
  },
  header: {
    backgroundColor: '#CAD49D',
    alignItems: 'center',
    paddingVertical: 85,
    borderBottomLeftRadius: 110,
    borderBottomRightRadius: 110,
    height: 10,
    marginTop: -35,
    marginBottom: 8
  },
  footer: {
    backgroundColor: '#CAD49D',
    marginTop: 5,
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: 50,
    flexGrow: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: '#151f42'
  },
  jogoContainer: {
    marginBottom: 20,
    backgroundColor: '#CAD49D',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    width: 310,
    flex: 1,
  },
  imagem: {
    height: 110,
    width: 140,
    marginTop: -20,
    marginRight: 15,
    borderWidth: 5,
  },
  jogoText: {
    fontSize: 16,
    marginBottom: 5
  }
});

export default ListagemJogos;