const url =
  "https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-pt-web-ft/players";

async function fetchAllPlayers() {
  const response = await fetch(url);
  const result = await response.json();
  return result.data.players;
}

export async function fetchPlayerById() {
  const response = await fetch(`${url}/${id}`);
  const result = await response.json();
  return result.data.player;
}

export async function deletePuppyById(id) {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
}

export async function createPuppy(name, breed) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      breed,
    }),
  });

  const result = await response.json();
  return result;
}
