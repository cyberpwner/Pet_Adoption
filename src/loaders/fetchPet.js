const fetchPet = async ({ queryKey }) => {
  const [, id] = queryKey;

  const response = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!response.ok) {
    throw new Error('An error occurred while fetching the pet');
  }

  const data = await response.json();
  return data;
};

export default fetchPet;
