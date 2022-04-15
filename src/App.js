import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./routes/Movies";
import Movie from "./routes/Movie";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}
