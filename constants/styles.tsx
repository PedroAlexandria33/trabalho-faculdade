import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    centralizar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },

    test:{
        backgroundColor: 'red',
        
        
    },
    test2:{
        backgroundColor: 'blue',
        
    },
    espaco:{
        gap: 10,
        
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding:10,
        margin: 10,
        width:'80%',
        
    },
    inputError:{
        borderColor: 'red',
    },
})


export default styles