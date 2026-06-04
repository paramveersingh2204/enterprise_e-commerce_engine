import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from './Cart.module.css';
import { Link } from "react-router";

export default function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <div className={styles.cartContainer}>
            <h1 className={styles.cartTitle}>Your Shopping Cart</h1>
            <hr />
            <div className={styles.cartBody}>
                {cart.map(c => (
                    <CartBox key={c.id} c={c} />
                ))}
                
                {cart.length !== 0 ? <Total cart={cart} /> : <Oops />}
                {cart.length !== 0 ? <BuyAll /> : ''}
            </div>
        </div>
    );
}

function CartBox({ c }) {
    const { updateQuantity, deleteFromCart } = useContext(CartContext);

    return (
        <div className={styles.cartItemRow}>
            <div className={styles.imgWrapper}>
                <img className={styles.hwbox} src={c.imgSrc[0]} alt="" loading="lazy" />
            </div>
            <div className={styles.infoWrapper}>
                <h3>{c.name}</h3>
                <div className={styles.qtyActionArea}>
                    <div className={styles.qtyBox}>
                        <button onClick={() => updateQuantity(c.id, c.quantity - 1)}>-</button>
                        <span>{c.quantity}</span>
                        <button onClick={() => updateQuantity(c.id, c.quantity + 1)}>+</button>
                    </div>
                    <button className={styles.deleteBtn} onClick={() => deleteFromCart(c.id)}>Remove</button>
                </div>
            </div>
            <div className={styles.itemSubtotal}>
                <p>CA$ {c.finalPrice * c.quantity}</p>
                <span>({c.quantity} x CA$ {c.finalPrice})</span>
            </div>
        </div>
    );
}

function Total({ cart }) {
    const sum = cart.reduce((acc, c) => acc + (c.quantity * c.finalPrice), 0);
    return (
        <div className={styles.totalRow}>
            <span>Estimated Subtotal:</span>
            <strong>CA$ {sum.toFixed(2)}</strong>
        </div>
    );
}

function BuyAll() {
    const { buyFromCart } = useContext(CartContext);
    return (
        <div className={styles.checkoutActionCenter}>
            <Link className={styles.checkoutBtn} to='/checkout' onClick={() => buyFromCart()}>
                Proceed to Checkout
            </Link>
        </div>
    );
}

function Oops() {
    return (
        <div className={styles.emptyCartCenter}>
            <h2>Your bag is currently empty.</h2>
            <Link to="/" className={styles.returnShopBtn}>Discover Products</Link>
        </div>
    );
}