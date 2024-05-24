import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FaMoon, FaSun } from 'react-icons/fa';
import darklogo from '../assets/imgs/darklogo_compressed.png';
import lightlogo from '../assets/imgs/lightlogo_compressed.png';
import useTheme from '../contexts/ThemeContext/useTheme';
import Breadcrumbs from './Breadcrumbs';

function Header() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem('darkmode', !isDarkMode);
  };

  return (
    <header
      className={classNames({
        'relative p-4 grid grid-cols-1 place-items-center': true,
        'bg-gunmetal': isDarkMode,
        'bg-lavender-blush': !isDarkMode,
      })}
    >
      <Link to="/Pet_Adoption/" className="grid grid-cols-1 place-items-center">
        <img
          src={isDarkMode ? darklogo : lightlogo}
          alt="Logo"
          className="max-w-44"
        />
      </Link>

      <Breadcrumbs />

      <button
        type="button"
        onClick={toggleTheme}
        className="absolute right-4 top-4 text-2xl"
      >
        {isDarkMode ? (
          <FaMoon className="text-white hover:text-vista-blue transition-all" />
        ) : (
          <FaSun className="text-true-blue hover:text-vista-blue transition-all" />
        )}
      </button>
    </header>
  );
}

export default Header;
