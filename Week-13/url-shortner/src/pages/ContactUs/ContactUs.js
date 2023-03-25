import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';
import styles from './ContactUs.module.css';

const ContactUs = () => {
	return (
		<div>
			<Header />
			<div className={styles.main}>
				<div className={styles.container}>
					<div className={styles.card}>
						<h1>Contact Us</h1>

						<form>
							<input className={styles.input} type="text" placeholder='Enter Name' />
							<input className={styles.input} type="email" placeholder='Enter Email' />
							<input className={styles.input} type="text" placeholder='Enter Subject' />
							<textarea className={styles.input} placeholder="Enter your Message" rows="10">

							</textarea>

							<button className={styles.button}>Save</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ContactUs