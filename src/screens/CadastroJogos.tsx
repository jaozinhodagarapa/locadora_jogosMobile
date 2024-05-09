import react, { useState } from "react";
import { StyleSheet,View  } from "react-native";

interface Jogos {
    id: string,
    nome: string,
    preco: string,
    descricao: string,
    classificacao: string,
    plataformas: string,
    desenvolvedor: string,
    distribuidora: string,
    categoria: string
}


function CadastroJogos(): React.JSX.Element{
    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [classificacao, setClassificacao] = useState<string>("");
    const [plataformas, setPlataformas] = useState<string>("");
    const [desenvolvedor, setDesenvolvedor] = useState<string>("");
    const [distribuidora, setDistribuidora] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
   
}



























export default CadastroJogos;