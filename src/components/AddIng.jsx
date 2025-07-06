function AddIng({ addItem }) {
  return (
    <button
      className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-700"
      onClick={addItem}
    >
      + Add Ingredient
    </button>
  );
}

export default AddIng;
