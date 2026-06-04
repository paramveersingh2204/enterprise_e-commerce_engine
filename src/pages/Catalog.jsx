import { Link } from "react-router";
import styles from './Catalog.module.css';
import { products } from "../data/products";

export default function Catalog() {
    return (
        <div className={styles.catalogWrapper}>
            <h1 className={styles.catalogTitle}>STORE COLLECTION</h1>
            <hr className={styles.divider} />
            
            <div className={styles.gridContainer}>
                {products.map(product => (
                    <ProductCard key={product.id} p={product} />
                ))}
            </div>
        </div>
    );
}

function ProductCard({ p }) {
    return (
        <Link className={styles.card} to={`/product/${p.id}`}>
            <div className={styles.imgContainer}>
                <img className={styles.responsiveImg} src={p.imgSrc[0]} alt={p.name} loading="lazy" />
            </div>
            <div className={styles.detailsPane}>
                <h3 className={styles.prodName}>{p.name}</h3>
                <div className={styles.pricingRow}>
                    <span className={styles.priceText}>CA$ {p.finalPrice}</span>
                    <span className={styles.mrpText}>CA$ {p.mrp}</span>
                </div>
                <div className={styles.discountBadge}>SAVE {p.savePer}%</div>
            </div>
        </Link>
    );
}