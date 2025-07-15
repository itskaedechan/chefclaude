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
      <ul className="mb-10 mt-3 list-disc space-y-3 pl-5 text-justify">
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
