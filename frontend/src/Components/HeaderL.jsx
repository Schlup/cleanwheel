import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const HeaderL = () => {
  return (
    <header className="w-full h-165px bg-c12 text-100px">
      <nav className="w-full h-full m-0 px-100px grid grid-cols-2 items-center">
        <div className="col-start">
          <Link className={`${styles.logo} text-w`} to="/home">
            Clean Wheel
          </Link>
        </div>
        <div className="col-end items-end	text-end m-0">
          <Link
            className={`${styles.btn} text-w ml-10 hover:underline focus:underline`}
            to="/schedule"
          >
            Agenda
          </Link>
          <Link
            className={`${styles.btn} text-w ml-10 hover:underline focus:underline`}
            to="/myprofile"
          >
            Meu Perfil
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderL;
