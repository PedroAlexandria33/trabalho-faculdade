import { Pressable, StyleSheet } from "react-native"
import  React  from "react";



export default function Botao(props: any){
    return(
        <Pressable 
        style={({pressed})=>[
            {opacity: pressed ? 0.8 : 1},
            styles.botao
        ]}
        onPress={props.onPress}>
            {props.children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao:{
        backgroundColor: '#3A7EFF',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:5,
    }
})




