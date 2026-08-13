import { useDispatch, useSelector } from "react-redux";
import {
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
} from "../features/cart/cartSlice";

function Cart() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <section className="cart-section">
            <h1>Cart</h1>

            {items.length === 0 ? (
                <p className="empty-cart">Your Cart is empty!</p>
            ) : (
                <>
                    <div className="cart-items">
                        {items.map((item) => (
                            <div className="cart-card" key={item.id}>
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>Price: ₹{item.price}</p>
                                </div>

                                <div className="quantity-controls">
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                decreaseQuantity(item.id)
                                            )
                                        }
                                    >
                                        −
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() =>
                                            dispatch(
                                                increaseQuantity(item.id)
                                            )
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="item-total">
                                    Item Total: ₹
                                    {item.price * item.quantity}
                                </p>

                                <button
                                    className="remove-btn"
                                    onClick={() =>
                                        dispatch(removeFromCart(item.id))
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Total: ₹{total}</h2>

                        <button
                            className="clear-btn"
                            onClick={() => dispatch(clearCart())}
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}

export default Cart;