import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import styles from './tillProduct.module.css';
import { Link } from "react-router";

export function TillProduct({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const { addToCart, buyFromProduct } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setAdded(true);
        setTimeout(() => setAdded(false), 4000);
    };

    return (
        <div className={`${styles.mgl10} ${styles.flexcol} ${styles.mgt40}`}>
            <h2 className={`${styles.px18} ${styles.mgb20} ${styles.mwh}`}>{product.name}</h2>
            <div>
                <ImageSec imgSrc={product.imgSrc} />
            </div>
            {product?.sold && <p className={`${styles.mgt10} ${styles.mgb10}`}><strong>{product.sold}+ bought</strong> in previous month</p>}
            {product?.limited && <span className={styles.bgcrLabel}>Limited time offer</span>}
            <p className={`${styles.px22} ${styles.clrlb} ${styles.mgt10}`}>
                <span className={styles.px16}>Price:</span> CA$ {product.finalPrice} 
                <span className={`${styles.px12} ${styles.tdl} ${styles.mgl10}`}>CA$ {product.mrp}</span> 
                <span className={`${styles.bgcr} ${styles.clrw} ${styles.px18} ${styles.saveLabel}`}>SAVE {product.savePer}%</span>
            </p>
            <p className={`${styles.mgb20} ${styles.timesnew}`}>Inclusive of all taxes</p>
            <div className={`${styles.mgb30} ${styles.px18} ${styles.qtyBox} ${styles.mglrauto} ${styles.pdl10}`}>
                Quantity : 
                <button className={`${styles.px20} ${styles.mgl10} ${styles.mgr10}`} onClick={() => setQuantity(prev => prev <= 1 ? 1 : prev - 1)}>-</button> 
                <span>{quantity}</span> 
                <button className={`${styles.px20} ${styles.mgl10}`} onClick={() => setQuantity(prev => prev + 1)}>+</button> 
            </div>
            <button className={`${styles.px16} ${styles.mgb10} ${styles.bgcaw} ${styles.cbbtn} ${styles.pdtb12}`} onClick={handleAddToCart}>Add to Cart</button>
            {added && <p className={`${styles.clrg} ${styles.mgb10}`}>✅ Added to Cart (see top right)</p>}
            <Link to='/checkout' className={`${styles.tdn} ${styles.middle} ${styles.px18} ${styles.bold} ${styles.mgb10} ${styles.bgcdo} ${styles.clrw} ${styles.cbbtn} ${styles.pdtb12}`} onClick={() => buyFromProduct(product, quantity)}>Buy Now</Link>
        </div>
    );
}

function ImageSec({ imgSrc }) {
    const [mainImg, setMainImg] = useState(imgSrc[0]);

    return (
        <div className={styles.imageSectionWrapper}>
            <div className={styles.mainImageContainer}>
                <img src={mainImg} alt="Main view" className={styles.hwbox} />
            </div>
            <div className={styles.imgSec}>
                {imgSrc.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Thumb ${index}`} 
                        className={`${styles.thumbImg} ${mainImg === img ? styles.activeThumb : ''}`}
                        onClick={() => setMainImg(img)} 
                    />
                ))}
            </div>
        </div>
    );
}