import "./App.css";
import AddOrg from "./Components/Add";
import Table from "./Components/Org";
import Navbar from "./Components/Navbar";
import PageNotFound from "./Components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditOrg from './Components/Edit';

function App() {
<BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Table />} />
        <Route exact path="/add" element={<AddOrg />} />
        <Route exact path="/edit" element={<EditOrg />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
}

export default App;
