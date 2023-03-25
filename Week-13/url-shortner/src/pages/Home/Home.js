import React, { useContext, useState } from 'react'
import { ShortenLinksContext } from '../../App';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Home.module.css';

const Home = () => {
	const { shortenLinks, setShortenLinks} = useContext(ShortenLinksContext);
	const [error, setError] = useState("");
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(false);

	const getShortenLink = () => {
		setError("");
		if(url){
			setLoading(true);
			fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
			.then((res) => res.json())
			.then((data) => {
				if(data.ok){
					setShortenLinks((prev) => {
						return [
							...prev,
							{
								id: prev.length,
								link: url,
								shorten_link: data.result.full_short_link,
							}
						]
					});
					setUrl("");
				}else{
					if(data.rate){
						setError(data.text);
					}else{
						setError(data.error);
					}
				}
			}).catch((data) =>{
				if(data.rate){
					setError(data.text);
				}else{
					setError(data.error);
				}
				alert("Something went wrong.");
			}).finally((data) => {
				setLoading(false);
			});
		}else{
			setError("Please enter a link.");
		}
	}
	return (
		<div>
			<Header />
			<div className={styles.main}>
				<div className={styles.container}>
					<div className={styles.card}>
						<div className={styles.input_container}>
							<div>
								<input className={styles.input} placeholder="Enter a link to shorten" value={url} onChange={(e) => {setUrl(e.target.value)}} />
								<p style={{ color: 'red', margin: 0 }}>{error}</p>
							</div>
							<div>
								<button className={styles.button} onClick={(e) => {getShortenLink()}}>Shorten It</button>
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
										<button className={styles.copy_button} onClick={() => {navigator.clipboard.writeText(item.shorten_link); alert('Link Copied Successfully.')}}>Copy</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				{
					loading && (
					<div className={styles.loader_backdrop}>
						<div className={styles.loader}></div>
					</div>
				)}
				
			</div>
			<Footer />
		</div>
	)
}

export default Home;