import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {
    return (
        <ImageBackground
            source={{ uri: 'https://images3.alphacoders.com/132/thumbbig-1328396.webp' }}
            style={styles.container}

        >
            <Text
                style={styles.texto}
            >BIENVENIDOS</Text>
              <Text
                style={styles.texto}
            >Cristhiam Sabando</Text>
            <Button 
                title='Ingresar'
                onPress={() => navigation.navigate('Bottom')}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    texto: {
        fontSize:30,
        color:'white',
        textAlign:'center',
        justifyContent:'center'

    },


}
)

