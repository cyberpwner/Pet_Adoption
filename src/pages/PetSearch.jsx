import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useBreedList from '../hooks/useBreedList';
import PetList from '../components/PetList';
import PetForm from '../components/PetForm';
import fetchPetList from '../loaders/fetchPetList';
import LoadingScreen from '../components/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen';
import useAdoptedPet from '../contexts/AdoptedPetContext/useAdoptedPet';

const animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

function SearchParams() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });
  const [animal, setAnimal] = useState('');
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['petList', searchParams],
    queryFn: fetchPetList,
  });
  const { breeds } = useBreedList(animal);
  const { adoptedPet } = useAdoptedPet();

  const handleSubmit = (event) => {
    event.preventDefault();

    // get the data from the form
    const formData = new FormData(event.target);

    // convert it into a simple object
    const newSearchParams = {
      location: formData.get('location') ?? '',
      animal: formData.get('animal') ?? '',
      breed: formData.get('breed') ?? '',
    };

    // send it to state
    setSearchParams(newSearchParams);
  };

  return (
    <section className="search-params">
      <section className="form">
        <PetForm
          animals={animals}
          handleSubmit={handleSubmit}
          animal={animal}
          setAnimal={setAnimal}
          breeds={breeds ?? []}
          adoptedPet={adoptedPet ?? null}
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
