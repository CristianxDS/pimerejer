import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta2(props: any) {
    //console.log(props.datos.age)
    const [visible, setvisible] = useState(false)

    return (
        <TouchableOpacity style={styles.container} onPress={() => setvisible(true)}>
            <Text style={styles.txtNombres}>{props.datos.name.first} {props.datos.name.last}</Text>

            <Modal visible={visible}>
                <View style={styles.modal}>
                <Text style={styles.txtNombres}>{props.datos.name.first} {props.datos.name.last}</Text>
                <Text style={styles.txtNombres}>{props.datos.gender}   {props.datos.species}</Text>
                    <Image style={styles.img} source={{ uri: props.datos.images.main }} />
                    <Button title='CERRAR' onPress={() => setvisible(false)} />
              
                </View>

            </Modal>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txtNombres: {
        fontSize: 30,
        textAlign:'center'
    },
    container: {
        backgroundColor: '#95a626c7',
        margin: 1,
        //flex:1
    },
    modal: {
        backgroundColor: '#357cdec7',
        flex: 1,
    },
    img: {
        height: 300,
        width: 150,
        resizeMode:'contain'
        
    },
    btn:{

    }
})