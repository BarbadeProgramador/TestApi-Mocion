import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../data/httpClient";
import { Link } from "react-router-dom";
import '../styles/ComicsPage.css';

export function ContextComic() {
    const [comics, SetComics] = useState([]);
    const [loading, setLoading] = useState(true)

//   const [error, setError] = useState(null);
  const [view, setView] = useState('grid'); // Estado para controlar la vista

    useEffect(() => {
        getData("volumes").then((data) => {
            SetComics(data.results);
            setLoading(false);
            // console.log(data);
        })
    }, [])

    if (loading) {
      return (
        <div className="spinner-container">
            <div className="comic-spinner">
                <div className="comic-text">Loading...</div>
                <div className="comic-circle"></div>
            </div>
        </div>
    );
    }

    return (
    <div>
      {/* <div>
        <button onClick={() => setView('list')}>Lista</button>
        <button onClick={() => setView('grid')}>Grilla</button>
      </div> */}
      <div className={view === 'grid' ? 'grid-container' : 'list-container'}>
        {comics.map(comic => (
          <div key={comic.id} className="comic-item">
            <h3 className="titleComic">{comic.name}</h3>
            <Link to={"/volumes/"+ comic.id}>
            {comic.image ? (
              <img width={200}  
              src={comic.image.original_url} 
              alt={comic.name} />
            ) : (
              <p>No image available</p>
            )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

}