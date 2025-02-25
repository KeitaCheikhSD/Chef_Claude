export default function listIngredient(props){
    return(
        <>
        {props.ing.length >0 && <div className="list">
            <h2>Ingredients on hand : </h2>
           <ul>
            {props.ing.map(ingredient =>  <li key={ingredient}>{ingredient}</li> )}
           </ul>
           </div>}
            {props.ing.length>4 && <div className="readyforrecipe">
            <div >
            <h2>Ready for a recipe</h2>
            <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={props.showRecipe}>Get a recipe</button>
           </div>}
           </>
    )
}