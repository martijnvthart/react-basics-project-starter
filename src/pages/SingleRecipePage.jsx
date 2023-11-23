import "./SingleRecipePage.css";

export const SingleRecipePage = ({ selectedRecipe, clickFn }) => {
  const info = selectedRecipe.recipe;

  const ingredients = () => {
    let ingredientList = info.ingredientLines.map((ingredient) => {
      return <li key={ingredient}>{ingredient}</li>;
    });

    return (
      <>
        <h2>Ingredients</h2>
        <ul className="Ingredients">{ingredientList}</ul>
      </>
    );
  };

  const dietLabels = () => {
    if (info.dietLabels.length !== 0) {
      let labelList = info.dietLabels.map((labels) => {
        return <li key={labels}>{labels}</li>;
      });

      return (
        <>
          <div className="Diet">
            <p className="DietHeader">Diet</p>
            <ul className="DietLabels">{labelList}</ul>
          </div>
        </>
      );
    }
  };

  const healthLabels = () => {
    let healthLabelList = info.healthLabels.map((label) => {
      return <li key={label}>{label}</li>;
    });

    return (
      <>
        <div className="HealtLabels">
          <p className="HealthLabelsHeader">Health labels</p>
          <ul className="HealthLabelList">{healthLabelList}</ul>
        </div>
      </>
    );
  };

  const cautions = () => {
    if (info.cautions.length !== 0) {
      let cautionList = info.cautions.map((cautions) => {
        return <li key={cautions}>{cautions}</li>;
      });

      return (
        <>
          <div className="Cautions">
            <p className="CautionsHeader">Cautions</p>
            <ul className="CautionList">{cautionList}</ul>
          </div>
        </>
      );
    }
  };

  const totalNutrients = () => {
    const calories = Math.round(info.totalNutrients.ENERC_KCAL.quantity);
    const protein = Math.round(info.totalNutrients.PROCNT.quantity);
    const fat = Math.round(info.totalNutrients.FAT.quantity);
    const carbs = Math.round(info.totalNutrients.CHOCDF.quantity);
    const cholesterol = Math.round(info.totalNutrients.CHOLE.quantity);
    const sodium = Math.round(info.totalNutrients.NA.quantity);

    return (
      <>
        <div className="TotalNutrients">
          <p className="TotalNutrientsHeader">Total nutrients</p>
          <ul className="NutrientList">
            <li>{calories} calories</li>
            <li>{protein} g protein</li>
            <li>{fat} g fat</li>
            <li>{carbs} g carbs</li>
            <li>{cholesterol} mg cholesterol</li>
            <li>{sodium} mg sodium</li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="SingleRecipePage">
        <div className="Recipe">
          <button
            className="BackButton"
            type="button"
            onClick={() => clickFn()}
          >
            Back to overview
          </button>
        </div>
        <img src={info.image} className="SingleRecipeImage"></img>
        <div className="SingleRecipeInfoLeft">
          <p className="MealType">Meal type: {info.mealType}</p>
          <h2>{info.label}</h2>
          <p>Total cooking time: {info.totalTime} minutes</p>
          <p>Servings: {info.yield}</p>
          <p className="DishType">Dish type: {info.dishType}</p>
          {ingredients()}
        </div>
        <div className="SingleRecipeInfoRight">
          {dietLabels()}
          {healthLabels()}
          {cautions()}
          {totalNutrients()}
        </div>
      </div>
    </>
  );
};
