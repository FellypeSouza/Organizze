import { StyleSheet, View, Text } from "react-native";

export default function Nav(){
    return(
        <View style={styles.nav}>
            <Text style={styles.navText}>Organizze</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    nav: {
        padding: '25',
        backgroundColor: '#3cc962',
    },
    navText: {
        marginTop: '20',
        fontSize: 25,
        color: '#fff'
    }
});