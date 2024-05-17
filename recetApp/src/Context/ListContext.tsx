import { View, Text } from 'react-native'
import React, { ReactNode, createContext, useState } from 'react'

interface Recipe {
  name: string,
  ingredientes: string
}

interface ContextType {
    Recipes: Recipe[],
    addRecipe: (name: string, ingredients: string) => void,
    dltRecipe: (id: number) => void
}

export const RecipeContext = createContext<ContextType>({
    Recipes: [],
    addRecipe: () => {},
    dltRecipe: () => {}
});

interface Node {
    children: ReactNode
}


const ListContext = (props: Node) => {

const [recipes, setRecipes] = useState<Recipe[]>([])

const addRecipe = (name: string, ingredients: string) => {
    setRecipes([...recipes, {name, ingredients}])
}

const dltRecipe = (id: number) => {
  setRecipes(recipes.filter((_, i) => i !== index));
}

  return (
    <View>
      <RecipeContext.Provider value={{addRecipe,dltRecipe, recipes}}>
      {props.children}
      </RecipeContext.Provider>
    </View>
  )
}

export default ListContext