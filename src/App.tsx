import { useState } from 'react';
//* Sprachen für Select-Feld
import { languages } from './components/languages/Language'
//* Fetch-Teil holen
import './App.css'
import NewsComponent from './components/fetch/NewsComponent';

function App() {

	const [lang, setLang] = useState<string>("de");
	const [searchText, setSearchText] = useState<string>("apple");

	return (
		<>
			<div className="container">
				<h1 id="top">Breaking News</h1>
				<div className="search-box">
					<input type="text" placeholder="Type to search" onChange={(event) => setSearchText(event?.target.value)} />
					<select id="select" defaultValue="" value={lang} onChange={(e) => setLang(e.target.value)}>
						<option value="" disabled hidden>Select your language</option>
						{languages.map((language, index) => (
							<option key={index}
								value={language[0]}>{language[1]}
							</option>
						))}
					</select>

					{/*<button type="button">Search</button>*/}
				</div>
				<a href="#top">
					<img className="to-top-button" src="../src/assets/img/scroll-to-top.png" alt="Button to Top" title="Button to Top" aria-label="Button to Top" />
				</a>
			</div >
			<NewsComponent lang={lang} searchText={searchText} />
		</>
	)
}

export default App
