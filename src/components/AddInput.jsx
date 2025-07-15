function AddInput({ ingredient, onInputChange }) {
  return (
    <div>
      <input
        className="rounded-lg border border-gray-300"
        type="text"
        value={ingredient}
        onChange={onInputChange}
        placeholder="e.g. oregano"
      />
    </div>
  );
}

export default AddInput;
