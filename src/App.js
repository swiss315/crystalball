import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
