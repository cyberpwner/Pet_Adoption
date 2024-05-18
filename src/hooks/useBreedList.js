import { useQuery } from '@tanstack/react-query';
import fetchBreedList from '../loaders/fetchBreedList';

const useBreedList = (animal) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['breedlist', animal],
    queryFn: fetchBreedList,
  });

  if (isPending) {
    return { isPending: true, breeds: null, error: null };
  }

  if (isError) {
    return { isPending: false, breeds: null, error };
  }

  return { isPending: false, breeds: data.breeds, error: null };
};

export default useBreedList;
