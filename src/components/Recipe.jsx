import { motion } from "framer-motion";

export default function Recipe({ dish, onReset }) {
  function cleanText(text) {
    return text
      .split("\n")
      .map((line) => line.trim())
      .join("\n");
  }

  const food = cleanText(dish.replaceAll("*", ""));
  const intro = cleanText(food?.split("Ingredients:")[0].trim());
  const ingredientsText = cleanText(
    food?.split("Ingredients:")[1].split("Instructions:")[0].trim(),
  );
  const instructionsText = cleanText(
    food?.split("Ingredients:")[1].trim().split("Instructions:")[1].trim(),
  );

  // Convert Ingredients & Instructions into arrays
  function splitLines(raw) {
    return raw.split("\n").filter((line) => line.trim() !== "");
  }
  const ingredientsList = splitLines(ingredientsText);
  const instructionsList = splitLines(instructionsText);

  {
    /* Display results from search */
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, y: -30, transition: { duration: 5 } }}
      className="mx-auto mb-10 w-full max-w-2xl place-items-start pb-20"
    >
      {/* Intro Section */}
      <h1 className="mt-12 font-semibold"> Suggested Recipe:</h1>
      {dish && (
        <div className="mb-10 mt-3 pl-5 text-justify">
          <div className="result whitespace-pre-wrap text-[18px] text-[#475467]">
            {intro}
          </div>
        </div>
      )}

      {/* Ingredients Section */}
      <h2 className="mt-10 text-lg font-bold text-[#475467]">Ingredients:</h2>
      {dish && (
        <div className="mb-10 mt-3 pl-5 text-justify">
          <ul className="mb-10 mt-3 list-disc space-y-3 text-justify">
            {ingredientsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions Section */}
      <h2 className="mb-5 mt-10 text-lg font-bold text-[#475467]">
        Instructions:
      </h2>
      <ol className="mb-10 mt-3 space-y-3 pl-5 text-justify">
        {instructionsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          if (onReset) onReset();
        }}
        className="mt-5 w-[290px] bg-gray-500 text-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-800"
      >
        Would you like to try again?
      </button>
    </motion.div>
  );
}
