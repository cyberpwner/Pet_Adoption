import PropTypes from 'prop-types';
import Pet from './Pet';

function PetList({ list }) {
  return (
    <section className="pet-list">
      {list.map(({ id, name, animal: animalType, breed: animalBreed }) => (
        <Pet name={name} animal={animalType} breed={animalBreed} key={id} />
      ))}
    </section>
  );
}

PetList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      animal: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PetList;
