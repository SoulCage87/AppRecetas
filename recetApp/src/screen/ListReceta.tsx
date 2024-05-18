import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import ListContext from '../Context/ListContext'
import { RecipeContext } from '../Context/ListContext'
import { useNavigation } from '@react-navigation/native'

const ListReceta = () => {
const {dltRecipe, recipes, recipeSelect}  = useContext(RecipeContext)
const navigate = useNavigation();

const [search, setSearch] = useState('')

const handleSearch = () => {
  const index = parseInt(search, 10);
  if(index => 0 && index <= recipes.length) {
    recipeSelect(index)
    navigate.navigate('DetailRecipe')
  }else {
     Alert.alert('Error', 'Nro de receta Invalido')
  }
}

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
     <TextInput style={styles.input} value={search} onChangeText={setSearch}  placeholder='Ingrese Nro. de Receta' />
       <TouchableOpacity onPress={handleSearch}>
        <Text style={styles.searchButton} >Buscar</Text>
       </TouchableOpacity>
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
  searchButton: {
  backgroundColor: 'cyan',
  padding: 10,
  borderRadius: 10,
  textAlign:'center',
  alignSelf: 'center'
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
    marginBottom: 12,
    paddingHorizontal: 5,
    borderRadius: 40,
    textAlign: 'center',
    marginTop: 10
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