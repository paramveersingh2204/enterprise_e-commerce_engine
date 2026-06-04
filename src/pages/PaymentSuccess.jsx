import { Link, useLocation } from "react-router";
import styles from './PaymentSuccess.module.css';

export default function PaymentSuccess() {
    const location = useLocation();
    const { detail, data } = location.state || {};

    if (!detail) {
        return (
            <div className={styles.flexcol}>
                <h2>No Order Context Parsed</h2>
                <Link to="/">Return to Catalog</Link>
            </div>
        );
    }

    const subtotal = detail.buy.reduce((acc, b) => acc + (b.quantity * b.finalPrice), 0);
    const finalAmount = detail.payment_method !== 'cod' ? (subtotal * 0.95).toFixed(2) : subtotal.toFixed(2);

    return (
        <div className={`${styles.flexcol} ${styles.mw} ${styles.w95} ${styles.mgt20}`}>
            <h1>Thank you, {detail.fullName}!</h1>
            <p className={styles.mgt10}>Your order processing pipeline has initialized successfully.</p>
            <p className={styles.orderIdLabel}>SYSTEM RUN ROUTE ID: {data?.customer_order_id}</p>
            
            <div className={`${styles.box} ${styles.mgt20}`}>
                <h3>Run Fulfillment Confirmation</h3>
                <p className={styles.mgt10}>Client Target: {detail.fullName}</p>
                <p>Payment Registry Status: {detail.payment_method === 'cod' ? 'Pay On Delivery Run' : 'Prepaid Clearance Confirmed'}</p>
            </div>

            <div className={`${styles.box} ${styles.mgt20}`}>
                <h3>Logistics Updates</h3>
                <p className={styles.mgt10}>Fulfillment run coordinates and milestone notifications will emit to: {detail.countrycode} {detail.number}</p>
            </div>

            <div className={`${styles.box} ${styles.mgt20}`}>
                <h3>Shipment Destructure Details</h3>
                <h4 className={styles.mgt10}>Delivery Target Anchor:</h4>
                <p>{detail.fullName}</p>
                <p>{detail.address}</p>
                {detail.apartment && <p>{detail.apartment}</p>}
                <p>{detail.city}, {detail.province} - {detail.postalCode}</p>

                <h4 className={styles.mgt10}>Total Settled Balance:</h4>
                <p>{detail.payment_method === 'cod' ? 'Doorstep Payment Ledger' : 'Prepaid Clearance'} — CA$ {finalAmount}</p>
            </div>

            <Link to='/' className={styles.shop}>Return to Product Catalog Dashboard</Link>
        </div>
    );
}