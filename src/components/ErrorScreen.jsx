import PropTypes from 'prop-types';

function ErrorScreen({ errorMessage }) {
  return (
    <section className="error-screen">
      <h2>OOPS!</h2>
      <p>{errorMessage}</p>
    </section>
  );
}

ErrorScreen.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorScreen;
