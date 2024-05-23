
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();


    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Image source={require('../assests/image/cadastro.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Listagem')}>
                <Image source={require('../assests/image/lista.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Pesquisa')}>
                <Image source={require('../assests/image/lupa.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Atualizar')}>
                <Image source={require('../assests/image/atualizar.png')} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuListe: {
        flexGrow: 1
    },
    footer: {
        paddingVertical: 2,
        backgroundColor: '#CAD49D',
        marginTop: 14,
        alignItems: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        flexDirection:'row'
    },
    icon: {
        width: 40,
        height: 40,
        marginBottom: 15,
        marginLeft: 42,
        marginVertical: 8
    }
});

export default Footer;
