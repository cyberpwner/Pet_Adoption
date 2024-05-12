import PropTypes from 'prop-types';
import Pet from './Pet';

function PetList({ pets }) {
  return (
    <section className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
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