import AddInput from "../components/AddInput";
import Header from "../components/Header";
import AddIng from "../components/AddIng";
import IngredientList from "../components/IngredientList";
import ReadyRecipe from "../components/ReadyRecipe";
import { useState, useEffect } from "react";
import Recipe from "../components/Recipe";
import { scroller } from "react-scroll";
import { AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (recipeResult) {
      scroller.scrollTo("recipe-section", {
        duration: 1500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }
  }, [recipeResult]);

  const resetRecipe = () => {
    setIngredient("");
    setItems([]);
    setShow(false);
    setRecipeResult("");
  };

  return (
    <>
      <Header />
      <main>
        <div className="grid-rows-auto grid justify-center">
          <div className="searchbox mx-auto mb-10 w-full max-w-2xl">
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
            {items.length > 0 && (
              <div data-aos="fade-up" data-aos-duration="800">
                <IngredientList items={items} />
              </div>
            )}
            {items.length > 0 && (
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <ReadyRecipe items={items} onResult={handleRecipeResult} />
              </div>
            )}
            {/* if api is successful, return instructions */}
            <AnimatePresence mode="wait">
              {items.length > 0 && recipeResult && (
                <div
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  <Recipe
                    items={items}
                    dish={recipeResult}
                    onReset={resetRecipe}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </>
  );
}
