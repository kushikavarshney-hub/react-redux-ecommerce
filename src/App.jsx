import {BrowserRouter,Routes,Route}from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./Products"
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
function App(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default App;