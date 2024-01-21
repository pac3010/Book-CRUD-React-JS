import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";

const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const getCategoryById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/categories/${id}`
      );
      setValues({ name: response.data.name });
    } catch (error) {
        console.error(error)
    }
  }, [id]);

  useEffect(() => {
    getCategoryById();
  }, [getCategoryById, id]);
  const [values, setValues] = useState({
    name: "",
  });
  const handleEditCategory = async () => {
    try {
      await axios.patch(`http://localhost:5000/categories/${id}`, {
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
      <Button onClick={handleEditCategory}>Update Category</Button>
    </div>
  );
};

export default EditCategory;
