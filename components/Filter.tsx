export default function Filter() {
  return (
    <label htmlFor="cars">
      <span className="sr-only">Filter by:</span>
      <select name="cars" id="cars" className="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
        <option value="">
            -- Filter --
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </label>
  );
}
