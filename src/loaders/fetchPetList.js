const fetchPetList = async ({ queryKey }) => {
  const { location, animal, breed } = queryKey[1];

  const response = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!response.ok) {
    throw new Error('An error occurred while fetching pet list (search)');
  }

  return response.json();
};

export default fetchPetList;
