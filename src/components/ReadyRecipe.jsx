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
        setTriggered(false); // reset if you want to allow re-triggering
      }
    };

    fetchRecipe();
  }, [triggered, items]); // only run when `triggered` becomes true

  return (
    <div className="grid grid-cols-[2fr_1fr] items-center bg-[#F0EFEB] p-6">
      <div className="auto-rows-3 text-justify ml-4">
        <h3 className="text-lg text-[#141413] font-medium">
          {" "}
          Ready for a recipe?
        </h3>
        <p className="text-sm text-[#6B7280]">
          Generate a recipe from your list of ingredients.
        </p>
      </div>
      <button
        onClick={handleClick}
        disabled={items.length === 0}
        className="text-sm bg-[#D17557] w-[185px] transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-orange-700"
      >
        {loading ? "Generating..." : "Get a Recipe"}
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <pre className="text-sm text-[#141413]">{result}</pre>
        </div>
      )}
    </div>
  );
}
