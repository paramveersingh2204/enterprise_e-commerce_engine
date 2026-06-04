import styles from './review.module.css';

export function Review({ review }) {
    return (
        <div className={`${styles.mgt50} ${styles.mgl10} ${styles.mgr10} ${styles.mw}`}>
            <h2 className={styles.mgb10}>Customer Reviews</h2>
            <hr />
            <div className={styles.mgt20}>
                {review.rev.map((m, index) => (
                    <div key={index} className={styles.mgt20}>
                        <div className={styles.flexrow}>
                            {m?.dp ? (
                                <img className={`${styles.w30} ${styles.h30} ${styles.circle}`} src={m.dp} alt="" />
                            ) : (
                                <div className={`${styles.w30} ${styles.h30} ${styles.circle} ${styles.fallbackDp}`}>
                                    {m.name.charAt(0)}
                                </div>
                            )}
                            <span className={`${styles.px18} ${styles.bold}`}>{m.name}</span>
                            <span className={`${styles.bgcg} ${styles.pdl5} ${styles.pdr5}`}>5 ★</span>
                        </div>
                        <p className={`${styles.mgt10} ${styles.mgl20}`}>{m.des}</p>
                        {m?.img && <img src={m.img} alt="User upload" className={styles.revImg} />}
                    </div>
                ))}
            </div>
        </div>
    );
}