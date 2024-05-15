import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useBreedList from '../hooks/useBreedList';
import PetList from '../components/PetList';
import PetForm from '../components/PetForm';
import fetchPetList from '../loaders/fetchPetList';
import LoadingScreen from '../components/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen';

const animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

function SearchParams() {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  // const [pets, setPets] = useState([]);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['petList', location, animal, breed],
    queryFn: fetchPetList,
  });
  const { breeds } = useBreedList(animal);

  return (
    <section className="search-params">
      <section className="form">
        <PetForm
          animals={animals}
          // handleSubmit={handleSubmit}
          location={location}
          setLocation={setLocation}
          animal={animal}
          setAnimal={setAnimal}
          breed={breed}
          setBreed={setBreed}
          breeds={breeds ?? []}
        />
      </section>

      <section className="pets">
        {isPending && <LoadingScreen />}
        {isError && <ErrorScreen errorMessage={error.message} />}
        {data && <PetList pets={data?.pets ?? []} />}
      </section>
    </section>
  );
}

export default SearchParams;
