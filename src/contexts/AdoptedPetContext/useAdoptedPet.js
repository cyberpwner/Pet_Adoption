import { useContext } from 'react';
import AdoptedPetContext from './AdoptedPetContext';

const useAdoptedPet = () => {
  return useContext(AdoptedPetContext);
};

export default useAdoptedPet;
