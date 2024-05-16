import PropTypes from 'prop-types';

function PetForm({
  animals,
  handleSubmit,
  animal,
  setAnimal,
  breeds,
  adoptedPet = null,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {adoptedPet && (
        <div className="pet image-container">
          <img src={adoptedPet?.images[0]} alt={adoptedPet?.name} />
        </div>
      )}

      <label htmlFor="location">Location:</label>
      <input type="text" name="location" id="location" placeholder="Location" />

      <label htmlFor="animal">Animal:</label>
      <select
        name="animal"
        id="animal"
        value={animal}
        onChange={({ target: { value } }) => {
          setAnimal(value);
        }}
      >
        <option value="">- Select an animal -</option>

        {animals.map((currentAnimal) => (
          <option key={currentAnimal} value={currentAnimal}>
            {currentAnimal}
          </option>
        ))}
      </select>

      <label htmlFor="breed">Breed:</label>
      <select
        name="breed"
        id="breed"
        disabled={!breeds || breeds?.length === 0}
      >
        <option value="">- Select a breed -</option>

        {breeds &&
          breeds?.map((currentBreed) => (
            <option key={currentBreed} value={currentBreed}>
              {currentBreed}
            </option>
          ))}
      </select>

      <button type="submit">Filter</button>
    </form>
  );
}

PetForm.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  animal: PropTypes.string.isRequired,
  setAnimal: PropTypes.func.isRequired,
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line react/require-default-props
  adoptedPet: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    state: PropTypes.string,
    animal: PropTypes.string,
    breed: PropTypes.string,
    city: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default PetForm;
