import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full h-165px bg-c12 text-100px">
      <nav className="w-full h-full m-0 px-100px grid grid-cols-2 items-center">
        <div className="col-start">
          <Link className={`${styles.logo} text-w`} to="/">
            Clean Wheel
          </Link>
        </div>
        <div className="col-end items-end	text-end m-0">
          <Link
            className={`${styles.btn} text-w ml-10 hover:underline focus:underline`}
            to="/singup"
          >
            Registrar-se
          </Link>
          <Link
            className={`${styles.btn} text-w ml-10 hover:underline focus:underline `}
            to="/login"
          >
            Entrar
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
