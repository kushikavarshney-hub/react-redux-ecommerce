import{useParams,Link}from "react-router-dom";
import{useDispatch}from "react-redux";
import{addToCart}from "../features/cart/cartSlice";
function ProductDetails(){
    const{id}=useParams();
    const dispatch=useDispatch();
    const products=[
        {
            id:1,
            name:"Laptop",
            price:55000,
            description:"Powerful laptop suitable for work, study and entertainment. ",
        },
        {
            id:2,
            name:"Headphones",
            price:2500,
            description:"Comfortable headphones with clear and immersive sound.",
        },
        {
            id:3,
            name:"Smartphone",
            price:30000,
            description:"Modern smartphone with excellent performance and display.",
        },
        {
            id:4,
            name:"Smart Watch",
            price:5000,
            description:"Smart watch with useful fitness and everyday features.",
        },
    ];
    const product=products.find((item)=>item.id===Number(id));
    if(!product){
        return <h1>Product not found</h1>
    }
    return(
        <section className="product-details">
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <button onClick={()=>dispatch(addToCart(product))}>add To Cart</button><br/>
            <Link to="/products">Back to Products</Link>

        </section>
    );
}
export default ProductDetails;