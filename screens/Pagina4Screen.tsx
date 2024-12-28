import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Pagina3Screen() {

    const [celsius, setcelsius] = useState(0);
    
    useEffect(() => {
     if(celsius< -273.15){
        setcelsius(-273.15)  ;      
        }
        
    }, [celsius])
    
function convertir(){
    const faren=(celsius*9)/5+32;
    const kel=celsius+273.15;
if(kel<0){
    Alert.alert('Error, No puede ser negativos')
    return;
}
Alert.alert('Resultado',`Celsius: ${celsius}°C'  ' F=: ${faren.toFixed(2)}°F'  'K=: ${kel.toFixed(2)} K`)
}
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, textAlign: 'center' }}>CONVERTIDOR</Text>
           
            <TextInput style={styles.input}
                placeholder='INGRESE LOS GRADOS CELCIUS'
                keyboardType='numeric'
                onChangeText={(texto)=>setcelsius (+texto)}
              
            />

            <Button title='CALCULAR'
            onPress={ ()=>convertir()}
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