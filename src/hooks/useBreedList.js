import { useEffect, useState } from 'react';

const localCache = {};

const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    const fetchBreedList = async () => {
      setBreedList([]);
      setStatus('loading');

      const response = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const data = await response.json();
      localCache[animal] = data.breeds || [];

      setBreedList(localCache[animal]);
      setStatus('loaded');
    };

    (async () => {
      if (!animal) {
        setBreedList([]);
      } else if (localCache[animal]) {
        setBreedList(localCache[animal]);
      } else {
        await fetchBreedList();
      }
    })();
  }, [animal]);

  return [breedList, status];
};

export default useBreedList;
