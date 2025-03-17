import React, { useState } from "react";

const NestedDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");
  const [inputValue, setInputValue] = useState("");

  const categories = ["Hotspot", "Hood", "Cluster"];
  const operators = ["<", ">", "="];

  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <select onChange={(e) => setSelectedOperator(e.target.value)} value={selectedOperator}>
          <option value="">Select Operator</option>
          {operators.map((operator) => (
            <option key={operator} value={operator}>
              {operator}
            </option>
          ))}
        </select>
      )}

      
      {selectedOperator && (
        <input
          type="number"
          placeholder="Enter a value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default NestedDropdown;
