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
    <section className="w-9/12 my-16 mx-auto grid grid-cols-1 gap-10 bg-lavender-blush/80 p-10 rounded-md">
      <Carousel images={pet.images} />

      <section className="grid grid-cols-1 gap-2 place-items-center">
        <h1 className="text-5xl">{pet.name}</h1>

        <h2 className="text-lg">
          {pet.breed} - {`${pet.city}, ${pet.state}`}
        </h2>

        <p className="text-center">{pet.description}</p>

        <button
          onClick={handleClick}
          type="button"
          className="w-fit mt-3 bg-true-blue hover:bg-true-blue/90 transition-all px-4 py-3 rounded text-white"
        >
          Adopt {pet.name}
        </button>
      </section>

      {showModal && (
        <Modal>
          <h3 className="text-xl mb-2">Would you like to adopt {pet.name}?</h3>

          <section className="grid grid-cols-2 gap-2 place-items-center">
            <button
              type="button"
              onClick={() => {
                setShowModal(false);
                setAdoptedPet(pet);
                navigate('/Pet_Adoption/', { replace: false });
              }}
              className="w-14 bg-true-blue/90 hover:bg-true-blue py-2 px-4 rounded text-white"
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="w-14 bg-true-blue/90 hover:bg-true-blue py-2 px-4 rounded text-white"
            >
              No
            </button>
          </section>
        </Modal>
      )}
    </section>
  );
}

export default PetDetails;
