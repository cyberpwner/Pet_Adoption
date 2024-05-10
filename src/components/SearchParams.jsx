import { useEffect, useState } from 'react';
import Pet from './Pet';
import useBreedList from '../hooks/useBreedList';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

function SearchParams() {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  const fetchPets = async () => {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const data = await res.json();
    // console.log(data.pets);
    return data.pets;
  };

  useEffect(() => {
    (async () => {
      const fetchedPets = await fetchPets();
      setPets(fetchedPets);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (event) => {
    event.preventDefault();

    setPets(await fetchPets());
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
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
          disabled={breeds.length === 0}
        >
          <option value="">- Select a breed -</option>

          {breeds.map((currentBreed) => (
            <option key={currentBreed} value={currentBreed}>
              {currentBreed}
            </option>
          ))}
        </select>

        <button type="submit">Filter</button>
      </form>

      <section className="pets">
        {pets.map(({ id, name, animal: animalType, breed: animalBreed }) => (
          <Pet name={name} animal={animalType} breed={animalBreed} key={id} />
        ))}
      </section>
    </div>
  );
}

export default SearchParams;
