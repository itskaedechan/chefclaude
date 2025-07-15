import getRecipe from "../api/groqApi.js";
import { useState, useEffect } from "react";

export default function ReadyRecipe({ items, onResult }) {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [triggered, setTriggered] = useState(false); // flag to run effect

  const handleClick = () => {
    if (items.length === 0 || loading) return;
    setTriggered(true); // trigger the effect once
  };

  useEffect(() => {
    if (!triggered || items.length === 0) return;

    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const prompt = items.join(", ");
        const recipe = await getRecipe(prompt);
        setResult(recipe);
        onResult(recipe);
      } catch (err) {
        console.error("API error:", err);
        setResult("Something went wrong.");
        onResult("Something went wrong.");
      } finally {
        setLoading(false);
        setTriggered(false); // reset to allow re-triggering
      }
    };

    fetchRecipe();
  }, [triggered, items]);

  return (
    <div
      name="recipe-section"
      className="grid grid-cols-[2fr_1fr] items-center bg-[#F0EFEB] p-6"
    >
      <div className="auto-rows-3 ml-4 text-justify">
        <h3 className="text-lg font-medium text-[#141413]">
          {" "}
          Ready for a recipe?
        </h3>
        <p className="text-sm text-[#6B7280]">
          Generate a recipe from your list of ingredients.
        </p>
      </div>
      {/*Get a recipe button*/}
      <button
        onClick={handleClick}
        disabled={items.length === 0}
        className="w-[185px] bg-[#D17557] text-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-orange-700"
      >
        {loading ? "Generating..." : "Get a Recipe"}
      </button>{" "}
    </div>
  );
}
