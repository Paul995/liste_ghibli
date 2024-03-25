import { NavLink } from 'react-router-dom';
import './Entete.css';

function Entete() {

  return (
    <header>
      <div className='wrapper'>
        <NavLink to='/'>
            <h1>Studio Ghibli</h1>
        </NavLink>
      </div>

    </header>
  );
}

export default Entete;
