import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={style.Page}>
      <Image style={style.image} source={require('./images/icono-etiqueta-recetas-calabacin-cru.png')} />
      <Text style={style.text}>La aplicacion permite a los usuarios
      {'\n'}agregar nuevas recetas, ver la lista de
      {'\n'}recetas disponibles, ver los detalles
      {'\n'} de una receta especifica, y eliminar
      {'\n'} recetas existentes
      </Text>
      <Text style={style.text}>
        Dueño de la aplicacion:
        {'\n'}Samuel Galo
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
    image: {
      width: 100,
      height: 150, 
      alignSelf:'center',
       marginTop: 20
    },
    Page: {
      flex: 1
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      marginTop: 10
    }
})

export default Home