import { useQuery } from '@tanstack/react-query';
import fetchBreedList from '../loaders/fetchBreedList';

const useBreedList = (animal) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['breedlist', animal],
    queryFn: fetchBreedList,
  });

  if (isPending) {
    return { breeds: null, error: null };
  }

  if (isError) {
    return { breeds: null, error };
  }

  return { breeds: data.breeds, error: null };
};

export default useBreedList;
