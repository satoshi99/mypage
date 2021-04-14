import React from "react";
import Link from 'next/link';
import styles from './Footer.module.scss';


const Footer:React.FC = () => {
    return (
        <footer className={styles.container}>
            <h2 className={styles.logo}>SATOSHI<br/>TECH<br/>PORTFOLIO</h2>
            <div className={styles.mainLink}>
            <ul>
                <li>
                    <Link href="/">
                        <a data-testid="home-footer">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a data-testid="blog-footer">Tech Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a data-testid="about-footer">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a data-testid="contact-footer">Contact</a>
                    </Link>
                </li>
            </ul>
            </div>
            <div className={styles.subLink}>
            <ul>
                <li>
                    <Link href="/privacy">
                        <a data-testid="privacy-policy">Privacy Policy</a>
                    </Link>
                </li>
            </ul>
            </div>
        </footer>
    );
}

export default Footer;