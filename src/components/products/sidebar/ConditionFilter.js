// Redux
import { useDispatch } from "react-redux";
import { handleStockFilter } from "../store";

// React
import { useState } from "react";

const ConditionFilter = () => {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleInStockOnchange = (e) => {
    setChecked(!checked);
    dispatch(handleStockFilter(checked));
  };
  return (
    <div className="mb-5 flex flex-col">
      <span className="mb-2 font-sans text-xs font-bold">
        Availability
      </span>
      <div className="flex flex-row items-center justify-start">
        <input
          type="checkbox"
          id="inStock"
          className="mr-2 accent-red-500"
          value={checked}
          onChange={handleInStockOnchange}
        />
        <label htmlFor="inStock" className="text-sm">
          Include Out of Stock
        </label>
      </div>
    </div>
  );
};

export default ConditionFilter;
