import { StyleSheet, View, Text, TextInput, Button, Touchable, TouchableOpacity } from "react-native";
import Nav from "../../components/nav/Nav";

export default function Register(){
    return(
        <View>
            <Nav/>
            <Text style={styles.registerTitle}>Gerencie seus gastos de forma prática</Text>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Nome"/>
                <TextInput style={styles.input} placeholder="Senha"/>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        textAlign:'center',
        marginTop: 125,
    },
    input: {
        backgroundColor: 'transparent',
        borderColor: '##c0c0c0',
        borderRadius: 50,
        borderWidth: 1,
        width: '250',
        height:'50',
        padding:'15',
        margin: '5',
        
    },
    registerButton: {
        backgroundColor: '#3cc962',
        color:'white',
        textAlign:'center',
        width: '250',
        height:'50',
        padding:'15',
        borderRadius: 50,
        margin: '5',
    },
    forgotPassword: {
        margin:'15',
        textAlign:'right',
        textDecorationLine: 'underline'
    },
    registerTitle : {
        fontSize: 30,
        margin:'25',
    }
  });