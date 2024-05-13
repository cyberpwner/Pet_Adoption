import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Pet({ id, name, animal, breed, images, location }) {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';

  if (images.length) {
    [hero] = images;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <section className="image-container">
        <img src={hero} alt={name} />
      </section>
      <section className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </section>
    </Link>
  );
}

Pet.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.string.isRequired,
};

export default Pet;
