// Filter component to filter the list of items by category
// categories: Array of categories
// filter: Current filter value
// setFilter: Function to set the filter value
export default function Filter({
  categories,
  filter,
  setFilter,
}: {
  categories: string[];
  filter: string;
  setFilter: (filter: string) => void;
}) {
  return (
    <label className="block">
      <span className="sr-only">Select an category</span>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }} 
        name="category"
      >
        <option value="">Filter by category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  );
}
