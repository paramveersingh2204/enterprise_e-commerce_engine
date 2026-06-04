import { useLocation, Link } from "react-router";
import styles from "./PaymentFailure.module.css";

export default function PaymentFailure() {
    const location = useLocation();
    const { status } = location.state || { status: 400 };

    return (
        <div className={`${styles.flexcol} ${styles.mw} ${styles.w95} ${styles.mgt20}`}>
            <div className={styles.failIcon}>✕</div>
            <h1>Checkout Ledger Processing Failed</h1>
            
            {status === 400 ? (
                <>
                    <p className={styles.mgt10}>The online banking gateway interaction timed out or registration details mismatched.</p>
                    <p>No funds were captured. If any automated hold drops onto your balance, settlement protocols will instantly clear it back within 24–72 hours.</p>
                </>
            ) : (
                <>
                    <p className={styles.mgt10}>Internal server run exceptions or offline configurations blocked validation paths.</p>
                    <p>Please audit verification lines and trace alternative execution layouts.</p>
                </>
            )}
            
            <Link to='/checkout' className={styles.retryBtn}>Return to Checkout Terminal</Link>
            <Link to='/' className={styles.backHomeLink}>Cancel and View Catalog</Link>
        </div>
    );
}