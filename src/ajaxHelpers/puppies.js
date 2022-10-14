export const fetchPuppies = async () => {
  const response = await fetch(
    `https://aqueous-tor-89598.herokuapp.com/api/puppies`
  );
  const result = await response.json();
  return result;
};

export const fetchPuppyById = async (id) => {
  const response = await fetch(
    `https://aqueous-tor-89598.herokuapp.com/api/puppies/${id}`
  );
  const result = await response.json();
  return result;
};

export const createPuppy = async (name, email) => {
  const response = await fetch(
    `https://aqueous-tor-89598.herokuapp.com/api/puppies`,
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const deletePuppyById = async (id) => {
  const response = await fetch(
    `https://aqueous-tor-89598.herokuapp.com/api/puppies/${id}`,
    {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
};
