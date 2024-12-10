import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Nav from "../../components/nav/Nav";

export default function Register(){
    return(
        <View>
            <Nav/>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Insira seu nome"/>
                <TextInput style={styles.input} placeholder="Insira sua senha"/>
                <Button title="Registrar"/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        width: '200',
        padding: '20',
        margin: '5',
    },
  });