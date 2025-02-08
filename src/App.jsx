import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div className="h-screen w-screen bg-gray-900 flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;