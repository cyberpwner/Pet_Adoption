import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import useTheme from '../contexts/ThemeContext/useTheme';

function Pet({ id, name, breed, images, location }) {
  let hero = 'https://pets-images.dev-apis.com/pets/none.jpg';
  const { isDarkMode } = useTheme();

  if (images.length) {
    [hero] = images;
  }

  return (
    <Link
      to={`details/${id}`}
      className={classNames(
        'pet grid grid-cols-[auto,1fr] items-center gap-5 border-b p-4 tracking-wide hover:pl-8 transition-all',
        {
          'border-b-lavender-blush': isDarkMode,
          'border-b-gunmetal/50': !isDarkMode,
        }
      )}
    >
      <section className="grid grid-cols-1 gap-2 place-items-center">
        <img
          src={hero}
          alt={name}
          className={classNames('max-w-32 rounded-full border', {
            'border-white': isDarkMode,
            'border-vista-blue': !isDarkMode,
          })}
        />
        <h1
          className={classNames('text-2xl', {
            'text-lavender-blush': isDarkMode,
            'text-lapis-lazuli': !isDarkMode,
          })}
        >
          {name}
        </h1>
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
