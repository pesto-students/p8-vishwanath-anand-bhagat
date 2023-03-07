import React, { useState } from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
	const [shortenLinks, setShortenLinks] = useState([  {    "id": 0,    "link": "https://www.google.com/",    "shorten_link": "https://shorten.link/ab12cd"  },  {    "id": 1,    "link": "https://www.facebook.com/",    "shorten_link": "https://shorten.link/ef34gh"  },  {    "id": 2,    "link": "https://www.twitter.com/",    "shorten_link": "https://shorten.link/ij56kl"  },  {    "id": 3,    "link": "https://www.youtube.com/",    "shorten_link": "https://shorten.link/mn78op"  },  {    "id": 4,    "link": "https://www.instagram.com/",    "shorten_link": "https://shorten.link/qr90st"  },  {    "id": 5,    "link": "https://www.github.com/",    "shorten_link": "https://shorten.link/uv12wx"  },  {    "id": 6,    "link": "https://www.linkedin.com/",    "shorten_link": "https://shorten.link/yz34ab"  },  {    "id": 7,    "link": "https://www.medium.com/",    "shorten_link": "https://shorten.link/cd56ef"  },  {    "id": 8,    "link": "https://www.stackoverflow.com/",    "shorten_link": "https://shorten.link/gh78ij"  },  {    "id": 9,    "link": "https://www.amazon.com/",    "shorten_link": "https://shorten.link/kl90mn"  }]
	);
    return (
        <div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.input_container}>
						<div>
							<input className={styles.input} placeholder="Enter a link to shorten" />
						</div>
						<div>
							<button className={styles.button} >Shorten It</button>
						</div>
					</div>
				</div>

				<div className={styles.link_card}>
					{shortenLinks.map((item) => {
						return (
							<div className={styles.link_container}>
								<div className={styles.link}>
									{item.link}
								</div>
								<div className={styles.shorten_link}>
									{item.shorten_link}
								</div>
								<div className={styles.copy_button_container}>
									<button className={styles.copy_button}>Copy</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
    )
}

export default MainContent;