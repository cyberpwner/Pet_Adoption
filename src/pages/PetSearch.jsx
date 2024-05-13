import { useEffect, useState } from 'react';
import useBreedList from '../hooks/useBreedList';
import PetList from '../components/PetList';
import PetForm from '../components/PetForm';

const animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

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
    <section className="search-params">
      <section className="form">
        <PetForm
          animals={animals}
          handleSubmit={handleSubmit}
          location={location}
          setLocation={setLocation}
          animal={animal}
          setAnimal={setAnimal}
          breed={breed}
          setBreed={setBreed}
          breeds={breeds}
        />
      </section>

      <section className="pets">
        <PetList pets={pets} />
      </section>
    </section>
  );
}

export default SearchParams;
