// React
import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { handlePrice } from "../store";

const priceRange = [
  { range: "Under $25", value: [0, 25] },
  { range: "$25 to $100", value: [25, 100] },
  { range: "$100 to $250", value: [100, 250] },
  { range: "$250 to $550", value: [250, 550] },
  { range: "$250 to Above", value: [250, 10000] },
];

const PriceFilter = () => {
  const [filterValues, setFilterValues] = useState({
    min: '',
    max: '',
  });

  const dispatch = useDispatch();

  const handleRangeFilter = (e) => {
    const text = e.target.innerText;
    const currentFilter = priceRange.find((filter) => filter.range === text);
    const filterValue = currentFilter.value;

    dispatch(handlePrice(filterValue));
  };

  const handleInputsOnchange = (e) => {
    const { name, value } = e.target;

    setFilterValues({ ...filterValues, [name]: value });
  };

  const handleInputsFilter = () => {
    const minValue = parseInt(filterValues.min);
    const maxValue = parseInt(filterValues.max);

    const filterValue = [minValue, maxValue];

    dispatch(handlePrice(filterValue));

    setFilterValues({min:'',max:''})
  };

  return (
    <div className="flex flex-col mb-7">
      <span className="mb-2 font-sans text-xs font-bold">Price</span>
      <ul className="mb-3">
        {priceRange.map((price, index) => (
          <li className="cursor-pointer hover:text-red-500" key={index}>
            <span onClick={handleRangeFilter} className="font-sans text-sm">
              {price.range}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="$Min"
          value={filterValues.min}
          name="min"
          className="mr-1 w-16 rounded border border-slate-400  pl-1 pr-2 shadow-inner shadow-slate-100 outline-none placeholder:text-sm"
          onChange={handleInputsOnchange}
        />
        <input
          type="text"
          placeholder="$Max"
          value={filterValues.max}
          name="max"
          className="mr-2 w-16 rounded border border-slate-400  pl-1 pr-2 shadow-inner shadow-slate-100 outline-none placeholder:text-sm"
          onChange={handleInputsOnchange}
        />
        <button
          onClick={handleInputsFilter}
          className="rounded-md border border-slate-200 px-2 shadow-md hover:bg-red-100"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
