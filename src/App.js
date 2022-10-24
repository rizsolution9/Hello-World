import "./App.css";
import SideNav from "./Admin/SideNav";
import Header from "./Admin/Header";
import Home from "./Admin/Home";
import Footer from "./Admin/Footer";
import AddOrg from "./Components/Add";
import Table from "./Components/Org";
import PageNotFound from "./Components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditOrg from './Components/Edit';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/org" element={<Table />} />
        <Route exact path="/add" element={<AddOrg />} />
        <Route exact path="/edit" element={<EditOrg />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
