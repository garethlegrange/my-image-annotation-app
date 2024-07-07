export default function Filter({
  value,
  onChange,
  categories,
}: {
  value: string;
  onChange: (value: string) => void;
  categories: string[];
}) {
  return (
    <label>
      <span className="sr-only">Filter by:</span>
      <select
        className="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        value={value}
        onChange={(e) => {
          e.preventDefault();
          onChange(e.target.value);
        }}
      >
        <option value="">Please select</option>
        {categories.map((category: string) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  );
}
