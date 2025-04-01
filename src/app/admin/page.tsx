import styles from './page.module.css'

export default function Admin() {
    return (
        <div className={styles.container}>
            <h1>Admin</h1>
            <p>Hér kemur eh fyrir admin, ef hann er admin getur hann gert ehv að admin only routes</p>
        </div>
    )
}