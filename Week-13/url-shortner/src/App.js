import Header from "./components/Header/Header";
import './App.css';
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";


const App = () => {
	return (
		<div className="App">
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;
