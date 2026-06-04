import { useContext, useEffect, useState } from "react";
import styles from './Checkout.module.css';
import { useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let { buy } = useContext(CartContext);

    if (buy.length !== 0) {
        localStorage.setItem('buyItem', JSON.stringify(buy));
    } else {
        buy = JSON.parse(localStorage.getItem('buyItem')) || [];
    }

    const [detail, setDetail] = useState({
        countrycode: '+1',
        number: '',
        fullName: '',
        address: '',
        apartment: '',
        city: '',
        province: '',
        postalCode: '',
        payment_method: 'cod',
        buy: buy
    });

    useEffect(() => {
        const sessionDetail = JSON.parse(sessionStorage.getItem('detail') || '{}');
        setDetail(prev => ({
            ...prev,
            ...sessionDetail,
            buy: buy,
        }));
    }, [buy]);

    const subtotal = buy.reduce((acc, b) => acc + (b.quantity * b.finalPrice), 0);
    const cardDiscount = Math.round(subtotal * 0.05);
    const finalTotal = detail.payment_method !== 'cod' ? (subtotal - cardDiscount) : subtotal;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetail(prev => ({ ...prev, [name]: value }));
    };

    const handleProcessOrder = (e) => {
        e.preventDefault();
        setLoading(true);
        sessionStorage.setItem('detail', JSON.stringify(detail));

        setTimeout(() => {
            setLoading(false);
            const mockOrderId = "TXN-" + Math.floor(100000 + Math.random() * 900000);
            
            navigate('/payment-success', {
                state: {
                    detail: detail,
                    data: { customer_order_id: mockOrderId }
                }
            });
        }, 1500);
    };

    return (
        <div className={styles.checkoutPage}>
            <form onSubmit={handleProcessOrder} className={styles.flexContainer}>
                <div className={styles.leftPane}>
                    <h2>Delivery Details</h2>
                    <div className={styles.inputGroup}>
                        <label>Contact Number</label>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <input style={{ width: '70px' }} type="text" name="countrycode" value={detail.countrycode} onChange={handleInputChange} required />
                            <input style={{ flex: 1 }} type="tel" name="number" value={detail.number} onChange={handleInputChange} placeholder="Mobile Number" required />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Full Name</label>
                        <input type="text" name="fullName" value={detail.fullName} onChange={handleInputChange} required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Address Line</label>
                        <input type="text" name="address" value={detail.address} onChange={handleInputChange} required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Apartment, Suite (Optional)</label>
                        <input type="text" name="apartment" value={detail.apartment} onChange={handleInputChange} />
                    </div>

                    <div className={styles.rowTriple}>
                        <div className={styles.inputGroup}>
                            <label>City</label>
                            <input type="text" name="city" value={detail.city} onChange={handleInputChange} required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Province</label>
                            <input type="text" name="province" value={detail.province} onChange={handleInputChange} placeholder="e.g. ON" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Postal Code</label>
                            <input type="text" name="postalCode" value={detail.postalCode} onChange={handleInputChange} required />
                        </div>
                    </div>

                    <h2 style={{ marginTop: '30px' }}>Payment Method</h2>
                    <div 
                        className={`${styles.paymentOption} ${detail.payment_method === 'cod' ? styles.active : ''}`}
                        onClick={() => setDetail(prev => ({ ...prev, payment_method: 'cod' }))}
                    >
                        <div className={styles.optionRow}>
                            <input type="radio" checked={detail.payment_method === 'cod'} readOnly />
                            <strong>Cash / Card On Delivery (COD)</strong>
                        </div>
                        <p className={styles.optionDesc}>Pay via cash or card terminal right at your doorstep upon fulfillment run arrival.</p>
                    </div>

                    <div 
                        className={`${styles.paymentOption} ${detail.payment_method === 'card' ? styles.active : ''}`}
                        onClick={() => setDetail(prev => ({ ...prev, payment_method: 'card' }))}
                    >
                        <div className={styles.optionRow}>
                            <input type="radio" checked={detail.payment_method === 'card'} readOnly />
                            <strong>Prepaid Digital Payment (Save Extra 5%)</strong>
                        </div>
                        <p className={styles.optionDesc}>Apply card gateway provisions instantly to trim 5% off the total ledger cost.</p>
                    </div>
                </div>

                <div className={styles.rightPane}>
                    <h2>Order Summary</h2>
                    <div className={styles.summaryBox}>
                        {buy.map((item, idx) => (
                            <div key={idx} className={styles.itemSummaryRow}>
                                <span>{item.name} (x{item.quantity})</span>
                                <strong>CA$ {item.finalPrice * item.quantity}</strong>
                            </div>
                        ))}
                        <hr className={styles.hr} />
                        <div className={styles.summaryCalcRow}>
                            <span>Subtotal</span>
                            <span>CA$ {subtotal}</span>
                        </div>
                        <div className={styles.summaryCalcRow}>
                            <span>Shipping</span>
                            <span style={{ color: 'green', fontWeight: 'bold' }}>Free</span>
                        </div>
                        {detail.payment_method !== 'cod' && (
                            <div className={styles.summaryCalcRow}>
                                <span style={{ color: 'green' }}>Extra 5% Discount</span>
                                <span style={{ color: 'green' }}>- CA$ {cardDiscount}</span>
                            </div>
                        )}
                        <hr className={styles.hr} />
                        <div className={`${styles.summaryCalcRow} ${styles.finalTotalRow}`}>
                            <span>Total Due</span>
                            <span>CA$ {finalTotal}</span>
                        </div>
                    </div>
                    <button className={styles.payBtn} type="submit" disabled={loading}>
                        {loading ? "Processing Run..." : (detail.payment_method !== 'cod' ? 'Execute Prepaid Checkout' : 'Complete Delivery Order')}
                    </button>
                </div>
            </form>
        </div>
    );
}