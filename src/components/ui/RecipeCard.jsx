import "./RecipeCard.css";

export const RecipeCard = ({ selectedRecipe, onClick }) => {
  const info = selectedRecipe.recipe;

  const veganOrVegetarian = () => {
    if (info.healthLabels.includes("Vegan")) {
      return "Vegan";
    } else if (info.healthLabels.includes("Vegetarian")) {
      return "Vegetarian";
    }
  };

  const dietLabels = () => {
    if (info.dietLabels.length !== 0) {
      let labelList = info.dietLabels.map((labels) => {
        return <li key={labels}>{labels}</li>;
      });

      return <ul className="DietLabels">{labelList}</ul>;
    }
  };

  const cautions = () => {
    if (info.cautions.length !== 0) {
      let cautionList = info.cautions.map((cautions) => {
        return <li key={cautions}>{cautions}</li>;
      });

      return (
        <>
          <ul className="Cautions">{cautionList}</ul>
        </>
      );
    }
  };
  return (
    <>
      <button className="RecipeCard" onClick={() => onClick(selectedRecipe)}>
        <img src={info.image} className="Image"></img>
        <div className="RecipeInfo">
          <div className="Meal">
            <p className="MealType">{info.mealType}</p>
            <h2 className="HeaderTwo">{info.label}</h2>
          </div>
          <div className="OtherInformation">
            <p className="VeganOrVegetarian">{veganOrVegetarian()}</p>
            {dietLabels()}
            <p className="DishType">{info.dishType}</p>
            {cautions()}
          </div>
        </div>
      </button>
    </>
  );
};
