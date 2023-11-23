import { RecipeSearch } from "../components/ui/RecipeSearch";
import { useState } from "react";
import { SingleRecipePage } from "./SingleRecipePage";
import "./RecipeListPage.css";

export function RecipeListPage() {
  let [recipe, setRecipe] = useState();

  return (
    <>
      <div className="RecipeListPage">
        {recipe ? (
          <SingleRecipePage selectedRecipe={recipe} clickFn={setRecipe} />
        ) : (
          <RecipeSearch clickFn={setRecipe} />
        )}
      </div>
    </>
  );
}
