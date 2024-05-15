import PropTypes from 'prop-types';

function PetForm({
  animals,
  // handleSubmit,
  location,
  setLocation,
  animal,
  setAnimal,
  breed,
  setBreed,
  breeds,
}) {
  return (
    <form>
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Location"
        value={location}
        onChange={({ target: { value } }) => setLocation(value)}
      />

      <label htmlFor="animal">Animal:</label>
      <select
        name="animal"
        id="animal"
        value={animal}
        onChange={({ target: { value } }) => {
          setAnimal(value);
          setBreed('');
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
        value={breed}
        onChange={({ target: { value } }) => setBreed(value)}
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
  // handleSubmit: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  animal: PropTypes.string.isRequired,
  setAnimal: PropTypes.func.isRequired,
  breed: PropTypes.string.isRequired,
  setBreed: PropTypes.func.isRequired,
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PetForm;
