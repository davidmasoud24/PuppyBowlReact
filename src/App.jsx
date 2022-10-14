import Dogs from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import SinglePlayerForm from "./components/SinglePlayer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dogs />} />
          <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
          <Route path="/dogs/:dogId" element={<SinglePlayerForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
