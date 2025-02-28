import { useEffect, useState } from "react";

interface INewsComponentProps {
	searchText: string,
	lang: string
}

type TNewsItem = {
	author: string,
	title: string,
	urlToImage: string,
	publishedAt: string,
	description: string
}[];


const NewsComponent: React.FC<INewsComponentProps> = (props) => {
	//* State für gespeicherte Nachrichten-Artikel
	const [news, setNews] = useState
		<TNewsItem>
		([]);
	//* State für Fehlerbehandlung
	const [error, setError] = useState<string | null>(null);

	//* API key setzen
	const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;

	//* useEffect wird nur einmal beim Laden der Komponente ausgeführt
	useEffect(() => {
		fetch(`https://newsapi.org/v2/everything?q=${props.searchText}&sortBy=${"popularity"}&language=${props.lang}&apiKey=${newsApiKey}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP-Fehler! Status: ${response.status}`);
				}
				//* Dateien aus der api als json zurückgeben
				return response.json();
			})
			.then((data) => {
				//*Speichern der News-Artikel
				setNews(data.articles);
			})
			.catch((error) => {
				setError(error);
			});
	}, [props.searchText, props.lang]);

	//* Falls ein Fehler auftritt, wird eine Fehlermeldung angezeigt
	if (error) return <p>Fehler: {error}</p>;

	return (

		<div className="news-box" >
			<ul>
				{news.map((article, index) => (
					<li key={index}>
						<div className="img-box">
							{/* Artikel-Bild */}
							<img src={article.urlToImage} alt={article.urlToImage} />

							{/* Artikel-Titel */}
						</div>
						<h2>
							{article.title}
						</h2>
						{/* Veröffentlichungsdatum */}
						<h3>
							Publish Date: <span>{article.publishedAt.slice(0, 10)}</span>
						</h3>
						{/* Artikel-Beschreibung */}
						<p>
							{article.description}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NewsComponent;
