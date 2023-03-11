import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactUs from './pages/ContactUs/ContactUs';
import { createContext, useState } from 'react';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: (<Home />),
	},
	{
	  path: "/contact_us",
	  element: (<ContactUs />),
	},
]);

export const ShortenLinksContext = createContext({
	shortenLinks: [],
	setShortenLinks: () => {}
});

const App = () => {
	const [shortenLinks, setShortenLinks] = useState([{    
		"id": 0,    
		"link": "https://chat.openai.com/chat",    
		"shorten_link": "https://shrtco.de/MIoV82"  
	}]);

	return (
		<div className="App">
			<ShortenLinksContext.Provider value={{shortenLinks, setShortenLinks}}>
				<RouterProvider router={router} />
			</ShortenLinksContext.Provider>
		</div>
	);
}

export default App;
