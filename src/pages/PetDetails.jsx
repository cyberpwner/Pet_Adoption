import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import fetchPet from '../loaders/fetchPet';
import LoadingScreen from '../components/LoadingScreen';
import Carousel from '../components/Carousel';

function PetDetails() {
  const { id } = useParams();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['petDetails', id],
    queryFn: fetchPet,
  });

  if (isPending) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  // if it gets here, we know that data is defined (isSuccess === true)

  const [pet] = data.pets;

  return (
    <section className="details">
      <Carousel images={pet.images} />
      <section>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {`${pet.city}, ${pet.state}`}
          <button type="button">Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </section>
    </section>
  );
}

export default PetDetails;
