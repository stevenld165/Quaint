import { Text, View, StyleSheet} from "react-native";

export default function Wallet() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Wallet</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})