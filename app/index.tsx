import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";


export default function Index() {
  const nav = useNavigation()
  return (
    <View style={styles.centralizar}>
      <Text>Olá mundo</Text>

    <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
      <Text>Clique</Text>
    </Botao>
    </View>

    
  );
}
