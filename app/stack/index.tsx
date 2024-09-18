import Botao from '@/components/Botao'
import styles from "@/constants/styles";
import { Link } from 'expo-router';
import { View, Text } from "react-native";


export default function TelaInicial(){
    return(
        <View style={[styles.centralizar, styles.espaco] }>
            <Text>Tela inicial</Text>
            <Botao>
                <Link href="/stack/nova" style={{color: '#fff'}}>
                    ir para Tela Nova
                </Link>
            </Botao>

            <Botao>
                <Link href="/" style={{color: '#fff'}}>
                    ir para Início
                </Link>
            </Botao>
        </View>
    )
}