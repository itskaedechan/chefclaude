import AddInput from "../components/AddInput";
import Header from "../components/Header";
import AddIng from "../components/AddIng";
import IngredientList from "../components/IngredientList";
import ReadyRecipe from "../components/ReadyRecipe";
import { useState } from "react";
import Recipe from "../components/Recipe";

export default function AddIngredient() {
  const [ingredient, setIngredient] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [recipeResult, setRecipeResult] = useState("");

  function handleItem() {
    if (ingredient.trim() !== "") {
      setItems([...items, ingredient]); //Add ingredient to list
      setIngredient(""); //Clear field
    }

    if (!show) {
      setShow(true);
    }
  }

  const handleRecipeResult = (result) => {
    setRecipeResult(result);
  };
  return (
    <>
      <Header />
      <main>
        <div className="grid grid-rows-auto justify-center">
          <div className="searchbox mb-10 w-full max-w-2xl mx-auto">
            <AddInput
              ingredient={ingredient}
              onInputChange={(e) => setIngredient(e.target.value)}
            />
            <AddIng addItem={handleItem} />
          </div>
          <div
            className={`transition-all duration-[1000ms] ease-in-out ${
              show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {items.length > 0 && <IngredientList items={items} />}
            {items.length > 0 && (
              <ReadyRecipe items={items} onResult={handleRecipeResult} />
            )}
            {/* if api is successful, return instructions */}
            {items.length > 0 && recipeResult && (
              <Recipe items={items} dish={recipeResult} />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
