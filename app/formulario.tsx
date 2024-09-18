import styles from "@/constants/styles";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Botao from "@/components/Botao";
import Cpf from "@/utils/Cpf";
import useFormUsuario from "@/hooks/useFormUsuario";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export default function TelaFormulario(){

    const {usuario, erros, setUsuario, salvar } = useFormUsuario()
    const nav = useNavigation()
    return(
        <View style={[styles.centralizar]}>
            <Text>Formulário</Text>

            <TextInput 
            placeholder="Nome" 
            value={usuario.nome ?? ''}
            style={[styles.input, erros.nome && styles.inputError]}
            onChangeText={(nome) => setUsuario({...usuario, nome})}
            />
            {erros.nome && <Text style={{color: 'red'}}>{erros.nome}</Text>}

            <TextInput 
            placeholder="CPF" 
            value={Cpf.formatar(usuario.cpf ?? '')}
            style={[styles.input]}
            keyboardType="phone-pad"
            onChangeText={(cpf) => setUsuario({...usuario, cpf: Cpf.formatar(cpf)})}
            />

            <Botao onPress={salvar}>
                <Text style={{color: '#fff'}}>Salvar</Text>
            </Botao>
            <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
                <Text style={{color: '#fff', gap: 10}}>Clique</Text>
            </Botao>
        </View>
    )
}