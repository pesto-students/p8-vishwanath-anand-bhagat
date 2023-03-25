import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	const location = useLocation();
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<h2>
					Shortly
				</h2>
				<nav className={styles.navigation}>
					<li className={location.pathname === '/' ? styles.active : ''}><Link to="/">Home</Link></li>
					<li className={location.pathname === '/contact_us' ? styles.active : ''}><Link to="/contact_us">Contact Us</Link></li>
				</nav>
			</div>
		</div>
	)
}

export default Header;