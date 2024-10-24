import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";


const App = () => {
    
  const [recipeQueue, setRecipeQueue] =useState([]);
  const addRecipeToQueue = (recipe) =>{
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else{
      alert('Recipe already exist in the queue')
    }
    
  }
console.log(recipeQueue);
  return (
    <div className="container mx-auto px-4">
        {/* Header */}
        <Header></Header>
        {/* Banner */}
        <Banner></Banner>
        {/* Our Recipes Section */}
        <OurRecipes></OurRecipes>
        <section className="flex flex-col md:flex-row gap-6">
           {/* Cards Section */}
           <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
           {/* Sidebar */}
           <Sidebar recipeQueue={recipeQueue}></Sidebar>
        </section>
    </div>
  );
};

export default App;