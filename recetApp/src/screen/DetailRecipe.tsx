import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { RecipeContext } from '../Context/ListContext'

const DetailRecipe = () => {

  const {sltRecipe} = useContext(RecipeContext)



  return (
    <View>
     {
      !sltRecipe ?
      <View style={styles.container}>
        <Text>No se ha seleccionado un receta</Text>
      </View> :
      <View style={styles.container}>
      <Text >Nombre: {sltRecipe.name}</Text>
      <Text>Ingredientes: {sltRecipe.ingredients}</Text>
    </View>
     }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  }
})

export default DetailRecipe