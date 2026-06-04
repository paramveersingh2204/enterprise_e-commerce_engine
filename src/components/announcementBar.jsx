import { useEffect, useState } from 'react';
import styles from './announcementBar.module.css';

export default function AnnouncementBar() {
    const messages = [
        "💥 Extra 5% off on prepaid orders!",
        "🚚 Free Shipping on all orders!"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % messages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div className={styles.announcementBar}>
            <div className={styles.announcementMessage}>
                {messages[index]}
            </div>
        </div>
    );
}