import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const getBookById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/books/${id}`
      );
      setValues({ 
        title: response.data.title,
        description: response.data.description,
        image_url: response.data.image_url,
        release_year: response.data.release_year,
        price: response.data.price,
        total_page: response.data.total_page,
        category_id: response.data.category_id
    });
    } catch (error) {
        console.error(error)
    }
  }, [id]);

  useEffect(() => {
    getBookById();
  }, [getBookById, id]);
  const [values, setValues] = useState({
    title: "",
    description: "",
    image_url: "",
    release_year: "",
    price: "",
    total_page: "",
    category_id: ""
  });
  const handleEditBook = async () => {
    try {
      await axios.patch(`http://localhost:5000/books/${id}`, {
        title: values.title,
        description: values.description,
        image_url: values.image_url,
        release_year: values.release_year,
        price: values.price,
        total_page: values.total_page,
        category_id: values.category_id
      });
    } catch (error) {
      console.log(error);
    }

    navigate("/books");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: "text", placeholder: "Book Title" }}
      />
      <TextField
        label="Description"
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        inputProps={{ type: "text", placeholder: "Book Description" }}
      />
      <TextField
        label="Image"
        value={values.image_url}
        onChange={(e) => setValues({ ...values, image_url: e.target.value })}
        inputProps={{ type: "text", placeholder: "Book Image Url" }}
      />
      <TextField
        label="Release Year"
        value={values.release_year}
        onChange={(e) => setValues({ ...values, release_year: e.target.value })}
        inputProps={{ type: "text", placeholder: "Book Release Year" }}
      />
      <TextField
        label="Price"
        value={values.price}
        onChange={(e) => setValues({ ...values, price: e.target.value })}
        inputProps={{ type: "text", placeholder: "Book Price" }}
      />
      <TextField
        label="Total Page"
        value={values.total_page}
        onChange={(e) => setValues({ ...values, total_page: e.target.value })}
        inputProps={{ type: "text", placeholder: "Book Total Page" }}
      />
      <TextField
        label="Category id"
        value={values.category_id}
        onChange={(e) => setValues({ ...values, category_id: e.target.value })}
        inputProps={{ type: "text", placeholder: "Book Category Id" }}
      />
      <Button onClick={handleEditBook}>Update Book</Button>
    </div>
  );
};

export default EditBook;
