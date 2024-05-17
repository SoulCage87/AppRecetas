import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ListContext from '../Context/ListContext'
import { RecipeContext } from '../Context/ListContext'

const ListReceta = () => {
const context = useContext(RecipeContext)

const {dltRecipe, Recipes} = context

  return (
    <ListContext>
      <View>
      <FlatList
        data={Recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeText}>{item.name}</Text>
            <Text style={styles.recipeText}>{item.ingredientes}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => dltRecipe(index)}>
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      </View>
    </ListContext>
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
});

export default ListReceta