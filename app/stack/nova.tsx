import styles from "@/constants/styles";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import Botao from '@/components/Botao';

export default function TelaNova(){
    return(
        <View style={[styles.centralizar, styles.espaco] }>
            <Text>tela Nova</Text>
            <Botao>
                <Link href="/stack" >Ir para Tela Inicial</Link>
            </Botao>
            
        </View>
    )
}