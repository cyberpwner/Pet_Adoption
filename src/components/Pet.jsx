import PropTypes from 'prop-types';

function Pet({ id, name, animal, breed, images, location }) {
  const hero = images[0] || 'http://pets-images.dev-apis.com/pets/none.jpg';

  return (
    <a href={`/details/${id}`} className="pet">
      <section className="image-container">
        <img src={hero} alt={name} />
      </section>
      <section className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </section>
    </a>
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
