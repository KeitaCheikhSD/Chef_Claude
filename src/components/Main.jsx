    import {  useState } from "react"
    import Recipe_section from "./recipe-section"
    import ListIngredient from "./ListIngredients"
    import  {getRecipeFromMistral} from "../ai.js"
   /**
 * Challenge: Get a recipe from the AI!
 * 
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 * 
 * We'll start with a mini-quiz:
 * 
 * 1. Think about where the recipe response should live and how you're
 *    going to make sure it doesn't disappear between each state change in
 *    the app. (I don't mean between refreshes of your mini-browser.
 *    You don't need to save this to localStorage or anything more permanent
 *    than in React's memory for now.)
 *  
 * 
 * 2. What action from the user should trigger getting the recipe?
 * 
 */
/**
 * Challenge: Get a recipe from the AI!
 * 
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 * 
 * Using either the `getRecipeFromChefClaude` function or the 
 * `getRecipeFromMistral` function, make it so that when the user
 * clicks "Get a recipe", the text response from the AI is displayed
 * in the <ClaudeRecipe> component.
 * 
 * For now, just have it render the raw markdown that the AI returns,
 * don't worry about making it look nice yet. (We're going to use a
 * package that will render the markdown for us soon.)
 */



export default function Main() {
    
    const [ing, setIng] = useState([])
    const [recipeShown,setShow]=useState(false)
    const [AIRecipe,setAIRecipe]=useState("")

   function handleAddIngredients(formData){
        const newIngredient = formData.get("ingredient")
        setIng([...ing, newIngredient])
        console.log(newIngredient)
   }
    async function showRecipe(){
    setShow(recipeShown => !recipeShown);
    const recipe = await getRecipeFromMistral(ing);
    setAIRecipe(recipe); // Update AIRecipe with the resolved value
    console.log(recipe);  
}

    return (
        <main>
           <div >
            <form action={handleAddIngredients} className="form">
           <input type="text" placeholder="e.g.oregano" name="ingredient"/>
           <button> + Add ingredient</button>
           </form>
           </div>
           <ListIngredient ing={ing} showRecipe={showRecipe}   />
          { recipeShown && <Recipe_section text={AIRecipe} />}




        </main>
    )
}
