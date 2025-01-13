import { recipes } from "./data.js";

export default function RecipeList() {
  const RecipesItems = recipes.map((recipe) => {
    const ingredients = recipe.ingredients;
    const ingredientsList = ingredients.map((ingredient) => (
      <li>{ingredient}</li>
    ));
    return (
      <div>
        <h2>{recipe.name}</h2>
        <ul> {ingredientsList} </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Recipes</h1>
      {RecipesItems}
    </div>
  );
}
