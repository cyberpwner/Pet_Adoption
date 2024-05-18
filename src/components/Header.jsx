import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';

function Header() {
  return (
    <header className="bg-lavender-blush p-4 grid grid-cols-1 place-items-center">
      <Link to="/Pet_Adoption/" className="grid grid-cols-1 place-items-center">
        <img src={logo} alt="Logo" className="max-w-44" />
        <h1 className="text-3xl tracking-wide text-blue-900">AdoptaPet</h1>
      </Link>
    </header>
  );
}

export default Header;
