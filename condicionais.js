// Evitar negações dentro de ifs (!)

// RUIM
const isUserOlderThan18Years = true;
const isUserLivesOnBrazil = true;

if (!isUserOlderThan18Years && !isUserLivesOnBrazil) {
}

// BOM
const isUserYoungerThan18Years = true;
const doesUserLivesOutsideBrazil = true;

if (isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {
}

// Early return vs else.

// RUIM
function verifyUserOlderThan18Years(user) {
  if (!user) {
    return { error: true };
  } else {
    return user.age >= 18;
  }
}

// BOM
function verifyUserOlderThan18Years(user) {
  if (!user) {
    return { error: true };
  }

  return user.age >= 18;
}

// Evite condicionais aninhadas

user.age >= 18 ? (user.age === 18 ? true : false) : false;

if (user.age >= 18) {
  if (user.name === "Vini") {
    if (user.height >= 180) {
    }
  }
}
