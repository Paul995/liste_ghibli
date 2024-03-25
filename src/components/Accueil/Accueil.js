import './Accueil.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilmVedette from '../FilmVedette/FilmVedette';

function Accueil() {


  const urlFilmsGhibli = 'https://ghibliapi.vercel.app/films/';

  const [listeFilmsGhibli, setListeFilmsGhibli] = useState([]);
  const [filmVedette, setFilmVedette] = useState({});



  useEffect(() => {
        //return automatique sur fcnt fleche sur une ligne
      fetch(urlFilmsGhibli)
      .then((response) => response.json())
      .then((data) => {
        setListeFilmsGhibli(data);
        setFilmVedette(() => data[random(data.length)])

      }) 

    
  }, []); // pour exam mettre kkchose ici?? url?     url, setUrl usestate etc.

  function random(max){
    return Math.floor(Math.random() * max)
  }

 function nouveauFilmVedette(){
  setFilmVedette(()=> listeFilmsGhibli[random(listeFilmsGhibli.length)])
 }



 const filmsGhibli = listeFilmsGhibli.map((film, index) => {
  return (
    <li key={index}>
      <Link to={`/film/${film.id}`}>{film.title}</Link>
      <img src={film.movie_banner} />
    </li>
  ); //bon de mettre lindex comme key car jamais la meme valeure
});


  return (
    <main>
      <div className='wrapper accueil'>
        <FilmVedette handleNouveauFilmVedette={nouveauFilmVedette} filmVedette={filmVedette} />

        <section>
          <h2>Liste des films&nbsp;Ghibli</h2>
          <ul>
            {filmsGhibli}
          </ul>
      </section>
        {/* <section>

           <Link to={`/film/${filmVedette.id}`}>
        <img src={filmVedette.image} alt={filmVedette.title}></img>
        <div>
          <h2>{filmVedette.title}</h2>
          <p>{filmVedette.release_date}</p>
        </div>
           </Link>
         <div>
        <h2>Film Vedette</h2>
        <button onClick={nouveauFilmVedette}>Nouveau</button>
          </div>
         </section> */}

      </div>
    </main>
  );

}

export default Accueil;
