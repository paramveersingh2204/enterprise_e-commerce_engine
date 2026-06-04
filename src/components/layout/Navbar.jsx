import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import styles from './Navbar.module.css';
import { Link } from 'react-router';
import AnnouncementBar from '../announcementBar';

export default function Navbar() {
    const { cart } = useContext(CartContext);
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <>
            <AnnouncementBar />
            <div className={styles.store}>
                <div className={styles.mw}>
                    <div className={styles.middle}>
                        <Link className={styles.clrw} to='/'>
                            <h1 className={`${styles.bold} ${styles.px24} ${styles.obl} ${styles.middle}`}>Enterprise E-Commerece Engine</h1>
                        </Link>
                    </div>

                    <div className={styles.rightNav}>
                        <Link className={`${styles.px16} ${styles.clrw}`} to='/'>Catalog</Link>
                        {isAuthenticated ? (
                            <button onClick={logout} className={styles.navAuthBtn}>Logout</button>
                        ) : (
                            <Link className={`${styles.px16} ${styles.clrw}`} to='/auth'>Login</Link>
                        )}
                        <Link className={`${styles.px24} ${styles.clrw} ${styles.posrel}`} to='/cart'>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" role="img" stroke="#b3e184ff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 7h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7zM9 7V6a3 3 0 0 1 6 0v1M4 7h2" stroke="#b3e184ff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                <circle cx="10.5" cy="17" r="1"/>
                            </svg>
                            <span className={`${styles.count} ${styles.px12}`}>{cart.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}