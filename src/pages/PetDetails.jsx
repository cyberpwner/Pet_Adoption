import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import fetchPet from '../loaders/fetchPet';

function PetDetails() {
  const { id } = useParams();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['petDetails', id],
    queryFn: fetchPet,
  });

  if (isPending) {
    return (
      <section className="loading-pane">
        <h2 className="loader">⏳</h2>
      </section>
    );
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  // if it gets here, we know that data is defined (isSuccess === true)

  const [pet] = data.pets;

  return (
    <section className="details">
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
