import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PetDetails() {
  const [pet, setPet] = useState({});
  const { id } = useParams();

  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';

  if (pet.images) {
    [hero] = pet.images;
  }

  useEffect(() => {
    const fetchPet = async (petId) => {
      const response = await fetch(
        `https://pets-v2.dev-apis.com/pets?id=${petId}`
      );

      const data = await response.json();
      return data.pets[0];
    };

    (async () => {
      setPet(await fetchPet(id));
    })();
  }, [id, setPet]);

  return (
    <section className="pet-details">
      <section className="image-container">
        <img src={hero} alt={pet.name} style={{ maxWidth: '100%' }} />
      </section>
      <section className="info">
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {`${pet.city}, ${pet.state}`}
        </h2>
      </section>
    </section>
  );
}

export default PetDetails;
