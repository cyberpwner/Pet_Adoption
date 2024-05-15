const fetchPet = async ({ queryKey }) => {
  const [, id] = queryKey;

  const response = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!response.ok) {
    throw new Error(
      `An error occurred when trying to fetch pet with the id: ${id}`
    );
  }

  return response.json();
};

export default fetchPet;
