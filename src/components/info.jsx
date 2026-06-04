import styles from './info.module.css';

export function Info({ info }) {
    return (
        <div className={`${styles.mgl10} ${styles.mgr10} ${styles.mw}`}>
            <h2 className={`${styles.mgt40} ${styles.mgb20}`}>ADDITIONAL INFORMATION</h2>
            <div className={styles.mgb20}>
                <h2>About this item</h2>
                <hr className={styles.mgb10} />
                <ul>
                    {info.about.map((a, index) => (
                        <li key={index} className={styles.mgb10}>{a}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Specifications</h2>
                <hr />
                <table className={styles.specTable}>
                    <tbody>
                        {Object.entries(info.spec).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}