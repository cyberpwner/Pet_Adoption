import PropTypes from 'prop-types';

function PetForm({
  animals,
  handleSubmit,
  animal,
  setAnimal,
  breeds,
  adoptedPet = null,
  isBreedListPending,
  isPetListPending,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-lavender-blush p-5 rounded-lg grid grid-cols-1 gap-5 tracking-wide"
    >
      {adoptedPet && (
        <div className="grid grid-cols-1 place-items-center">
          <img
            src={adoptedPet?.images[0]}
            alt={adoptedPet?.name}
            className="w-32 rounded-full"
          />
        </div>
      )}

      <div className="grid grid-col-1">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location"
          className="p-2 rounded bg-white outline-none border focus:border-black"
        />
      </div>

      <div className="grid grid-col-1">
        <label htmlFor="animal">Animal:</label>
        <select
          name="animal"
          id="animal"
          value={animal}
          onChange={({ target: { value } }) => {
            setAnimal(value);
          }}
          className="p-2 rounded bg-white disabled:bg-slate-100 outline-none border focus:border-black"
        >
          <option value="">- Select an animal -</option>

          {animals.map((currentAnimal) => (
            <option key={currentAnimal} value={currentAnimal}>
              {currentAnimal}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-col-1">
        <label htmlFor="breed">Breed:</label>
        <select
          name="breed"
          id="breed"
          disabled={!breeds || breeds?.length === 0}
          className="p-2 rounded bg-white disabled:bg-gray-100 disabled:text-black/50 outline-none border focus:border-black"
        >
          <option value="">- Select a breed -</option>

          {breeds &&
            breeds?.map((currentBreed) => (
              <option key={currentBreed} value={currentBreed}>
                {currentBreed}
              </option>
            ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-gunmetal hover:bg-vista-blue transition-all text-white py-2 rounded tracking-wide font-semibold disabled:bg-gunmetal/80"
        disabled={isBreedListPending || isPetListPending}
      >
        Filter
      </button>
    </form>
  );
}

PetForm.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  animal: PropTypes.string.isRequired,
  setAnimal: PropTypes.func.isRequired,
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  isBreedListPending: PropTypes.bool.isRequired,
  isPetListPending: PropTypes.bool.isRequired,

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
