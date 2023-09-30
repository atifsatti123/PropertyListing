import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import listings from "./data/listings";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage listings={listings} />} />
        <Route
          path="/listing/:id"
          element={<DetailPage listings={listings} />}
        />
      </Routes>
    </>
  );
}

export default App;
