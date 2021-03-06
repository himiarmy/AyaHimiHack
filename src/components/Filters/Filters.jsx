import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
import { brandsContext } from "../../contexts/brandsContext";

const Filters = ({ brand, setBrand, price, setPrice }) => {
  const { getBrands, brands } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div style={{ marginTop: "20px" }}>
      <Select
        allowClear
        style={{ width: "100%" }}
        value={brand}
        onChange={(e) => setBrand(e)}
        mode="multiple"
        placeholder="Brands"
      >
        {brands.map((item) => (
          <Select.Option value={item.brand} key={item.id}>
            {item.brand}
          </Select.Option>
        ))}
      </Select>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        range
        defaultValue={[1, 10000]}
        min={0}
        max={10000}
        step={1}
      />
      <h6>
        Price
      </h6>
    </div>
  );
};

export default Filters;