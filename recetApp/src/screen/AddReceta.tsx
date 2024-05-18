import { View, Text, TextInput, StyleSheet, Image, Button, FlatList, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ListContext, { RecipeContext } from '../Context/ListContext'

const AddReceta = () => {
  const context = useContext(RecipeContext)
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [Recipes, setRecipes] = useState<{ name: string, ingredients: string }[]>([]);

  const {addRecipe} = context

  const HandlerRecipes = () => {
    if(name && ingredients) {
      addRecipe(name, ingredients)
      setName('')
      setRecipes([...Recipes, { name, ingredients }])
      setIngredients('')
    }
  }

  useEffect(() => {
    setRecipes(Recipes);
  }, [Recipes]);

  return (
      <ScrollView>
        <Image style={styles.image} source={require('./images/icono-etiqueta-recetas-calabacin-cru.png')}></Image>
        <TextInput style={styles.input} onChangeText={setName} value={name} placeholder='Receta' />
        <TextInput style={styles.input} onChangeText={setIngredients} value={ingredients} placeholder='Ingredientes' />
        <Text style={styles.text}>Detalle Receta Agregada</Text>
        <FlatList
        data={Recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.ingredients}</Text>
          </View>
        )}
      />
        <Button  title='Agregar' onPress={HandlerRecipes}></Button>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  image: {
    width: 100,
    height: 130,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 5,
    borderRadius: 40,
    textAlign: 'center',
    marginTop: 10
  },
  text: {
    alignSelf: 'center',
    margin: 20
  },
  btn: {
    alignSelf: 'center',
  },
  recipeItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  }
})

export default AddReceta