import { AddColor } from "../../material_react/src/Components/AddColor";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddMovie from "./Components/AddMovie";

function App() {
  return (
    <div>
      <AddColor />
      <AddMovie />
      {/* <Routes>
        <Route path="/addcolor" element={<AddColor />} />
      </Routes> */}
    </div>
  );
}

export default App;
