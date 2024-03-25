
import './FilmVedette.css';

import { Link } from 'react-router-dom';

function FilmVedette(props) {


console.log(
props);


  return (

        <section className='film-vedette'>

          <Link to={`/film/${props.filmVedette.id}`}>
            <img src={props.filmVedette.image} alt={props.filmVedette.title}></img>
            <div>
              <h2>{props.filmVedette.title}</h2>
              <p>{props.filmVedette.release_date}</p>
            </div>
          </Link>
          <div>
            <h3>Film Vedette</h3>
            <button onClick={props.handleNouveauFilmVedette}></button>
          </div>
        </section>
    
  );

};

  export default FilmVedette;