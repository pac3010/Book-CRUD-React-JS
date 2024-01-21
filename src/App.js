import { Route, Routes } from "react-router-dom";
import CategoryList from "./features/CategoryList";
import AddCategory from "./features/AddCategory";
import EditCategory from "./features/EditCategory";
import BooksList from "./features/BooksList";
import AddBook from "./features/AddBooks";
import EditBook from "./features/AddBooks";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD Categories
      </h1>
      <Routes>
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/add-categories" element={<AddCategory />} />
        <Route path="/add-books" element={<AddBook />} />
        <Route path="/edit-categories/:id" element={<EditCategory />} />
        <Route path="/edit-books/:id" element={<EditBook />} />
      </Routes>
    </div>
  );
}
export default App;
