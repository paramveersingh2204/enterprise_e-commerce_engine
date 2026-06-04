import { Link } from "react-router";
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <>
            <hr className={styles.mgt80} />
            <div className={`${styles.pdt40} ${styles.pdb40} ${styles.bgcdb} ${styles.flexcol}`}>
                <div className={`${styles.flexcol} ${styles.mgt20}`}>
                    <p className={styles.clrw}>INFORMATION</p>
                    <Link className={`${styles.clrw} ${styles.mgt10}`} to='/about-us'>About Us</Link>
                    <Link className={`${styles.clrw} ${styles.mgt5}`} to='/contact'>Contact</Link>
                </div>
                <p className={styles.mgt50}>Copyright &copy; <span className={styles.clrg}>Enterprise E-Commerce Engine</span></p>
            </div>
        </>
    );
}

export function FooterCheckout() {
    return (
        <>
            <hr className={styles.mgt80} />
            <div className={`${styles.pdt40} ${styles.pdb40} ${styles.flexcol} ${styles.bgcdb}`}>
                <div className={styles.flexrow}>
                    <Link className={styles.clrw} to='/privacy-policy'>Privacy policy</Link>
                    <Link className={styles.clrw} to='/return-policy'>Refund policy</Link>
                    <Link className={styles.clrw} to='/shipping'>Shipping policy</Link>
                    <Link className={styles.clrw} to='/terms-of-service'>Terms of service</Link>
                </div>
                <p className={`${styles.mgt20} ${styles.clrw}`}>Secure E-Commerce Processing</p>
            </div>
        </>
    );
}