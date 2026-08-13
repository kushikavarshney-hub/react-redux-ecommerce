import {useDispatch}from "react-redux";
import{addToCart}from "./features/cart/cartSlice";
import {Link}from "react-router-dom";

function Products(){
    const dispatch=useDispatch();
    const products=[
        {id:1,name:"Laptop",price:55000},
        {id:2,name:"Headphones",price:2500},
        {id:3,name:"Smartphone",price:30000},
        {id:4,name:"Smart Watch",price:5000},
    ];
    return(
        <section className="products-section">
            <h1>Products</h1>
            <div className="products-grid">
                {products.map((product)=>(
                    <div className="product-card" key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button><br/>
                        <Link to={`/products/${product.id}`}>View Details</Link>
                        </div>

                ))}
            </div>
        </section>
    );
}
export default Products;
