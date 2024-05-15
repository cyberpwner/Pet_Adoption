import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function ErrorScreen({ errorMessage = '' }) {
  const { pathname } = useLocation();

  return (
    <section className="error-screen">
      <h2>OOPS!</h2>
      <p>{errorMessage}</p>
      {/* only show the homepage link if the user is on a different page */}
      {pathname !== '/' && <Link to="/">Back to the homepage</Link>}
    </section>
  );
}

ErrorScreen.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorScreen;
