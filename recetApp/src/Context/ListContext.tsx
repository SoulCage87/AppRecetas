import { View, Text } from 'react-native'
import React, { ReactNode, createContext, useState } from 'react'

interface Recipe {
  name: string,
  ingredientes: string
}

interface ContextType {
    Recipes: Recipe[],
    addRecipe: (name: string, ingredients: string) => void,
    dltRecipe: (index: number) => void
    recipeSelect: (index: number) => void
}

export const RecipeContext = createContext<ContextType>({
    recipes: [],
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

const dltRecipe = (index: number) => {
  setRecipes(recipes.filter((_, i) => i !== index));
}

  return (
      <RecipeContext.Provider value={{addRecipe,dltRecipe, recipes}}>
      {props.children}
      </RecipeContext.Provider>
  )
}

export default ListContext