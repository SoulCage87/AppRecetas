import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import ListContext from '../Context/ListContext'
import { RecipeContext } from '../Context/ListContext'

const ListReceta = () => {
const {dltRecipe, recipes}  = useContext(RecipeContext)

  return (
      <View>
        <Image style={styles.image} source={require('./images/icono-etiqueta-recetas-calabacin-cru.png')}></Image>
      <FlatList
        data={recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.recipeItem}>
             <Text style={styles.recipeText}>Receta #{index + 1}</Text>
            <Text style={styles.recipeText}>{item.name}</Text>
            <Text style={styles.recipeText}>{item.ingredients}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => dltRecipe(index)}>
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  recipeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  recipeText: {
    flex: 1,
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginRight: 8,
    flex: 1,
  },
  image: {
    width: 100,
    height: 130,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10
  }
});

export default ListReceta