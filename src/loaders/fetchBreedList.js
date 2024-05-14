const fetchBreedList = async ({ queryKey }) => {
  const [, animal] = queryKey;

  if (!animal) {
    return [];
  }

  const response = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!response.ok) {
    throw new Error(
      `An error occured when trying to fetch breed list for ${animal}`
    );
  }

  return response.json();
};

export default fetchBreedList;
