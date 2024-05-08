import { useState } from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];
const BREEDS = ['poodle'];

function SearchParams() {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');

  return (
    <div className="search-params">
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

          {ANIMALS.map((currentAnimal) => (
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
          disabled={BREEDS.length === 0}
        >
          <option value="">- Select a breed -</option>

          {BREEDS.map((currentBreed) => (
            <option key={currentBreed} value={currentBreed}>
              {currentBreed}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
