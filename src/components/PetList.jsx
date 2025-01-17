import PropTypes from 'prop-types';
import classNames from 'classnames';
import Pet from './Pet';
import useTheme from '../contexts/ThemeContext/useTheme';

function PetList({ pets }) {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={classNames(
        'grid grid-cols-1 xl:grid-cols-2 gap-4 rounded-lg p-4',
        {
          'bg-gunmetal/80 text-white': isDarkMode,
          'bg-lavender-blush/40': !isDarkMode,
        }
      )}
    >
      {!pets || !pets?.length ? (
        <h1 className="text-2xl m-2">No pets found.</h1>
      ) : (
        pets.map(
          ({
            id,
            name,
            animal: animalType,
            breed: animalBreed,
            city,
            state,
            images,
          }) => (
            <Pet
              id={id}
              name={name}
              animal={animalType}
              breed={animalBreed}
              key={id}
              location={`${city}, ${state}`}
              images={images}
            />
          )
        )
      )}
    </section>
  );
}

PetList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      animal: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PetList;
