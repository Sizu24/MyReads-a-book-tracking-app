import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import Homepage from "./Homepage";

function App() {

  return (
    <Routes>
      <Route path="/search" element={ <Search /> } />
      <Route path="/" element={ <Homepage /> } />
    </Routes>
  );
}

export default App;
