const fetchPetList = async ({ queryKey }) => {
  const {
    searchParams: { location, animal, breed },
    currentPage,
  } = queryKey[1];

  const response = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}&page=${currentPage}`
  );

  if (!response.ok) {
    throw new Error('An error occurred while fetching pet list (search)');
  }

  return response.json();
};

export default fetchPetList;
