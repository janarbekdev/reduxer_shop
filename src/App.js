import './App.css';
import Header from "./Companent/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./Companent/Home";
import Product from "./Companent/Product";
import Basket from "./Companent/Basket";
import Favorite from "./Companent/Favorite";
import Task from "./Companent/Task";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/product'} element={<Product/>} />
            <Route path={'/basket'} element={<Basket/>} />
            <Route path={'/product'} element={<Product/>} />
            <Route path={'/favorite'} element={<Favorite/>} />
            <Route path={'/task'} element={<Task/>} />
        </Routes>
    </div>
  );
}

export default App;
