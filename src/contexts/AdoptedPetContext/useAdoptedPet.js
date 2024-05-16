import { useContext } from 'react';
import AdpotedPetContext from './AdoptedPetContext';

const useAdoptedPet = () => {
  return useContext(AdpotedPetContext);
};

export default useAdoptedPet;
