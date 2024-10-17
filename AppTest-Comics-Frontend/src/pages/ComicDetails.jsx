import { useState, useEffect } from "react";
import { getData } from "../data/httpClient";
import { useParams } from "react-router-dom";
import { Navigateparam } from "../components/ButtonNavigate";
import '../styles/DetailsPage.css';



export function ComicDetails() {

    const { comicId } = useParams();
    const [comic, SetComic] = useState([]);
    useEffect(() => {
        getData(`volumes/${comicId}`).then((data) => {
            SetComic(data.results);
            console.log(data);
        });
    }, [comicId])


    return (
        <div>
            <Navigateparam />
            {comic.map(comicUnique => (

                <div key={comicUnique.id}  className="comic-container">
                    <div className="comic-card" >
                        <div className="comic-image">
                        <img 
                        src={comicUnique.image.original_url}  
                        alt={comicUnique.name} 
                        />
                        </div>
                    
                   
                    <div className="comic-content">

                        <p className="comic-title">
                            <strong>Title: </strong>
                            {comicUnique.name}
                        </p>
                        <p className="comic-release">
                            <strong>Estreno: </strong>
                            {comicUnique.date_added}
                        </p>
                        <p className="comic-description">
                            <strong>Description: </strong>
                            {comicUnique.description}
                        </p>
                    </div>   
                    </div> 
                </div>
            ))}
        </div>
    );

}

