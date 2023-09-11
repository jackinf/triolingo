import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.link} href="/audioExercise">Audio Exercise</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/sentenceExercise">Sentence Exercise</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/simpleExersize">Simple Exercise</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/speechExersize">Speech Exercise</Link>
                </li>
            </ul>
        </nav>
    );
}
