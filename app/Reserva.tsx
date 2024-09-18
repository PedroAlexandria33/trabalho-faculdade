import { Text,View } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import styles from "@/constants/styles";
import Botao from "@/components/Botao";
import { useNavigation } from "expo-router";

export default function ReservarEspaco() {
    const nav = useNavigation()
    return(
        <View style={[styles.centralizar, styles.espaco]}>
            <Text>Reserve seu Espaço</Text>
            <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
      <Text>Clique</Text>
    </Botao>
        </View>
    )
}

