import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AdoptedPetContext from './AdoptedPetContext';

function AdoptedPetProvider({ children }) {
  const [adoptedPet, setAdoptedPet] = useState(null);

  const memoizedState = useMemo(() => {
    return {
      adoptedPet,
      setAdoptedPet,
    };
  }, [adoptedPet, setAdoptedPet]);

  return (
    <AdoptedPetContext.Provider value={memoizedState}>
      {children}
    </AdoptedPetContext.Provider>
  );
}

AdoptedPetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdoptedPetProvider;
