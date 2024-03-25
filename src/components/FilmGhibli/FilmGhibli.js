import React, { useEffect, useState } from "react";
import "./FilmGhibli.css";
import { useParams } from "react-router-dom";


function FilmGhibli() {


  const params = useParams();


  const urlFilmGhibli = `https://ghibliapi.vercel.app/films/${params.id}`;

  const [filmGhibli, setFilmGhibli] = useState({});


  useEffect(() => {
    fetch(urlFilmGhibli)
      .then((response) => response.json())
      .then((data) => {
        setFilmGhibli(data);
        })
      }, []);


  return (
    <main>
      <div className="wrapper">
        <article className="film-ghibli">
          <div className="poster">
            <img src={filmGhibli.image} alt={filmGhibli.title}></img>
          </div>
          <div>
            <h2>{filmGhibli.title}<small> - {filmGhibli.original_title}</small></h2>
            <p>{filmGhibli.director}</p>
            <p>{filmGhibli.release_date}</p>
            <p>{filmGhibli.description}</p>
          </div>

        </article>
      </div>
    </main>
  );
}

export default FilmGhibli;
