import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import styles from "./Auth.module.css";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            login(email);
            navigate(-1); // Return back to previous step context
        }
    };

    return (
        <div className={styles.authContainer}>
            <form onSubmit={handleSubmit} className={styles.authCard}>
                <h2>Sign In / Register</h2>
                <p>Access processing details and track fulfillment order runs.</p>
                <div className={styles.inputGroup}>
                    <label>Corporate or Client Email Address</label>
                    <input 
                        type="email" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="you@domain.com"
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Password</label>
                    <input 
                        type="password" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="••••••••"
                    />
                </div>
                <button type="submit" className={styles.authSubmitBtn}>Continue Account Authentication</button>
            </form>
        </div>
    );
}