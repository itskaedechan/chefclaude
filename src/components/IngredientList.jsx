import { motion } from "framer-motion";

// page 2 will be parent component for the logic
// // - ParentComponent: useState
// - InputComponent: gets inputValue + onChange
// - ButtonComponent: gets onClick
// - ListComponent: gets items

function IngredientList({ items }) {
  return (
    <div className="place-items-start">
      <h1 className="font-semibold">Ingredients on hand:</h1>
      <ul className="list-disc pl-5 text-justify space-y-3 mt-3 mb-10">
        {items.map((item, index) => (
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            key={index}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;
