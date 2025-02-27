//* Sprachen für Select-Feld
import { languages } from './components/languages/Language'
//* Fetch-Teil holen
import './App.css'
import NewsComponent from './components/fetch/NewsComponent';

function App() {
	return (
		<>
			<div className="container">
				<h1>Breaking News</h1>
				<div className="search-box">
					<input type="text" placeholder="Type to search" />
					<select id="select" defaultValue="">
						<option value="" disabled hidden>Select your language</option>
						{languages.map((language, index) => (
							<option key={index} value={language[0]}>
								{language[1]}
							</option>
						))}
					</select>

					<button type="button">Search</button>
				</div>
			</div>
			<NewsComponent />
		</>
	)
}

export default App
