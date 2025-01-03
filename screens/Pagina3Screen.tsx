import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Pagina3Screen() {

    const [nombre, setnombre] = useState('');
    const [edad, setedad] = useState(0);
    
    useEffect(() => {
     if(edad<=0 ){
        setedad(0)        
        }
        
    }, [edad])
    
function usuario(){
    Alert.alert(' Mensaje ', nombre + ' tiene '+ edad +' años')
}
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, textAlign: 'center' }}>FORMULARIO</Text>
            <TextInput style={styles.input}
                placeholder='INGRESAR EL NOMBRE'
                onChangeText={(texto) => setnombre(texto)}
            />
            <TextInput style={styles.input}
                placeholder='INGRESAR LA EDAD'
                keyboardType='numeric'
                onChangeText={(texto)=>setedad (+texto)}
              
            />

            <Button title='ACEPTAR'
            onPress={ ()=>usuario()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#c5e364c7',
        fontSize: 25,
        height: 50,
        width: '85%',
        borderRadius: 20,
        margin: 10,

    },


})