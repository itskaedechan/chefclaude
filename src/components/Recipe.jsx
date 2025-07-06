export default function Recipe({ dish, items }) {
  const [ingredients, instructions] = dish.split("Instructions:");
  return (
    <div className="pt-10 w-full max-w-2xl mx-auto place-items-start">
      <h1 className="font-semibold"> Suggested Recipe:</h1>
      <p className="text-[#475467] text-justify mt-3">
        Based on your available ingredients, I would recommend making a Creamy
        Garlic Parmesan Chicken dish. Here’s the recipe.
      </p>
      {/* <p className="text-[#475467] text-justify mt-3">
        Based on your available ingredients, I would recommend making a ${dish}. Here’s the recipe.
        get specific dish from response
      </p> */}

      <h2 className="text-[#475467] text-lg font-bold mt-10">Ingredients:</h2>
      {/* <ul className="list-disc pl-5 text-justify space-y-3 mt-3 mb-10">
        <li>4 boneless, skinless chicken breasts</li>
        <li>Salt and pepper to taste</li>
        <li>2 tablespoons olive oil</li>
        <li>4 cloves garlic, minced</li>
        <li>1 cup heavy cream</li>
        <li>1/2 cup chicken broth</li>
        <li>1 teaspoon Italian seasoning</li>
        <li>1/2 cup grated Parmesan cheese</li>
        <li>1 cup fresh spinach (optional)</li>
        <li>1/2 cup sun-dried tomatoes (optional)</li>
        <li>Fresh parsley for garnish</li>
      </ul> */}
      {/* <ul className="list-disc pl-5 text-justify space-y-3 mt-3 mb-10">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
          map response here and below for instructions
      </ul> */}

      {dish && (
        <div className="pl-5 text-justify mt-3 mb-10">
          <div className="text-[18px] text-[#475467] whitespace-pre-wrap result">
            {ingredients?.replace("Ingredients:", "").trim()}
          </div>
        </div>
      )}

      <h2 className="text-[#475467] text-lg font-bold mt-10">Instructions:</h2>
      <ol className="list-decimal pl-5 text-justify space-y-3 mt-3 mb-10">
        <li>4 boneless, skinless chicken breasts</li>
        <li>Salt and pepper to taste</li>
      </ol>
    </div>
  );
}
