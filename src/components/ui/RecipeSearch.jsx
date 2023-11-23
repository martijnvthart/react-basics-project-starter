import { useState } from "react";
import { TextInput } from "./TextInput";
import { RecipeArray } from "../RecipeArray";
import { data } from "../../utils/data";
import "./RecipeSearch.css";

export const RecipeSearch = ({ clickFn }) => {
  let [searchField, setSearchField] = useState("");

  let recipeCardArray = (searchResult) => {
    if (searchResult.length == 0) {
      return data.hits;
    } else {
      let filteredList = data.hits.filter((object) =>
        object.recipe.label.toLowerCase().includes(searchResult.toLowerCase())
      );
      return filteredList;
    }
  };

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <div className="Header">
        <h1>Recipe Checker</h1>
      </div>
      <TextInput changeFn={handleChange} />
      <section className="RecipeSection">
        <RecipeArray onClick={clickFn} recipes={recipeCardArray(searchField)} />
      </section>
    </>
  );
};
