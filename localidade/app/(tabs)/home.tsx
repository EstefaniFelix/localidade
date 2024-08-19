import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';

import { useFonts, Urbanist_400Regular, Urbanist_700Bold } from '@expo-google-fonts/urbanist'

export default function Home() {
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        Urbanist_400Regular, Urbanist_700Bold
    })
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Página principal</Text>
            <TouchableOpacity style={styles.botao} onPress={() => router.push('/localidade')}>
                <Text style={styles.textobotao}> Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 40,
        textAlign: 'left',
        fontFamily: 'Urbanist_400Regular',
    },
    botao: {
        backgroundColor: '#4169E1',
        paddingVertical: 15,
        paddingHorizontal: 150,
        borderRadius: 10,
    },
    textobotao: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
})