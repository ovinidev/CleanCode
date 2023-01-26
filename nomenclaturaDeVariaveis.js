const users = ["Vini", "Thales", "Rodrigo"];

// BOM
const filtered = users.filter((u) => {
  return u.startsWith("V");
});

// RUIM
const usersStartingWithLetterV = users.filter((user) => {
  return user.startsWith("V");
});

// Evite nomes genéricos (data, response, list, args, params)

// BOM
function getUsers() {
  const user = getUsersFromDatabase();

  // validação
  // manipulação dos dados (mapping)

  return user;
}

// RUIM
function getUsers() {
  const data = getUsersFromDatabase();

  // validação
  // manipulação dos dados (mapping)

  return data;
}
