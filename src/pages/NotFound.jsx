import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="grid grid-cols-1 place-items-center mt-14 p-5">
      <h2 className="text-9xl tracking-wide">404!</h2>
      <p className="text-2xl text-center">Page not found.</p>

      <Link
        to="/Pet_Adoption/"
        className="bg-true-blue py-3 px-4 rounded text-white mt-5 border-2 border-transparent hover:bg-white hover:border-true-blue hover:text-true-blue transition-all"
      >
        Back to the homepage
      </Link>
    </section>
  );
}

export default NotFound;
