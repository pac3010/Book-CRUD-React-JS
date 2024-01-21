import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";

const AddCategory = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
  });
  const handleAddCategory = async () => {
    try {
      await axios.post("http://localhost:5000/categories", {
        name: values.name,
      });
    } catch (error) {
      console.log(error);
    }
    setValues({ name: "" });
    console.log(values);
    navigate("/categories");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Category Name" }}
      />
      <Button onClick={handleAddCategory}>Add Category</Button>
    </div>
  );
};

export default AddCategory;
