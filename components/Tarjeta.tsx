import { Alert, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta(props: any) {
    //console.log(props.inforamcion.name);

    function detalles(item:any){
        Alert.alert(item.name,item.description + '\nAtributos : ' + item.atributos)
    }

    return (

        <TouchableOpacity style={styles.container} onPress={()=>detalles (props.informacion)}>
            <Text style={styles.txtTitulo}>{props.informacion.name}</Text>

            <View style={styles.fila}>
                <Image style={styles.img} source={{ uri: props.informacion.image }} />
                <Text style={styles.txtDescription}>{props.informacion.description}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txtTitulo: {
        fontSize: 25,
        textAlign: 'center',

    },
    img: {
        height: 130,
        width: 120,
        resizeMode: 'contain',
    },
    container: {
        backgroundColor: '#666',
        margin: 2,
        borderRadius: 20
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
    ,
    txtDescription: {
        color: 'white',
        width: '65%',
        fontSize: 15,
        textAlign: 'justify',
    }
})