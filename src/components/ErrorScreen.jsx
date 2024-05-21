import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function ErrorScreen({ errorMessage = 'An error has occurred.' }) {
  const { pathname } = useLocation();

  return (
    <section className="grid grid-cols-1 place-items-center mt-14 p-5">
      <h2 className="text-9xl tracking-wide">OOPS!</h2>
      <p className="text-2xl text-center">{errorMessage}</p>

      {/* only show the homepage link if the user is on a different page */}
      {pathname !== '/' && (
        <Link
          to="/Pet_Adoption/"
          className="bg-true-blue py-3 px-4 rounded text-white mt-5 border-2 border-transparent hover:bg-white hover:border-true-blue hover:text-true-blue transition-all"
        >
          Back to the homepage
        </Link>
      )}
    </section>
  );
}

ErrorScreen.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorScreen;
