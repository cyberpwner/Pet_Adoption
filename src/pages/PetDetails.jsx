import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import fetchPet from '../loaders/fetchPet';
import LoadingScreen from '../components/LoadingScreen';
import Carousel from '../components/Carousel';
import Modal from '../components/Modal';
import useAdoptedPet from '../contexts/AdoptedPetContext/useAdoptedPet';

function PetDetails() {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['petDetails', id],
    queryFn: fetchPet,
  });
  const { setAdoptedPet } = useAdoptedPet();
  const navigate = useNavigate();

  if (isPending) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  // if it gets here, we know that data is defined (isSuccess === true)

  const [pet] = data.pets;

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <section className="details">
      <Carousel images={pet.images} />
      <section>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {`${pet.city}, ${pet.state}`}
          <button onClick={handleClick} type="button">
            Adopt {pet.name}
          </button>
          <p>{pet.description}</p>
        </h2>
      </section>
      {showModal && (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}?</h1>
            <div>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setAdoptedPet(pet);
                  navigate('/', { replace: false });
                }}
              >
                Yes
              </button>
              <button type="button" onClick={() => setShowModal(false)}>
                No
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default PetDetails;
