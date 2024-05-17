import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Pet({ id, name, breed, images, location }) {
  let hero = 'https://pets-images.dev-apis.com/pets/none.jpg';

  if (images.length) {
    [hero] = images;
  }

  return (
    <Link
      to={`/details/${id}`}
      className="pet grid grid-cols-[auto,1fr] items-center gap-5 border-b border-b-gunmetal/50 p-4 tracking-wide hover:pl-8 transition-all"
    >
      <section className="grid grid-cols-1 gap-2 place-items-center">
        <img
          src={hero}
          alt={name}
          className="max-w-32 rounded-full border border-vista-blue"
        />
        <h1 className="text-2xl text-lapis-lazuli">{name}</h1>
      </section>

      <section className="text-xl">
        <h2>
          {breed} - {location}
        </h2>
      </section>
    </Link>
  );
}

Pet.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.string.isRequired,
};

export default Pet;
