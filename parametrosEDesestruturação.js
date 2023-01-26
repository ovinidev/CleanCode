// Rota para criação do usuário (name, email, password)
// Controller (name, email password)
// useCase (name, email password)
// Repository (name, email, password)

// RUIM
function createUserRoute(req, res) {
  // validações
  const { body } = req;

  createUserController(body);
}

function createUserController(data) {
  const userRepository = new UsersRepository();

  userRepository.create(data);
}

class UsersRepository {
  create(data) {
    // cria o usuário (name, email, password)
  }
}

// ------------------------

// BOM
function createUserRoute(req, res) {
  const { name, password, email } = req.body;
  // validações

  createUserController({ name, password, email });
}

function createUserController({ name, password, email }) {
  const userRepository = new UsersRepository();

  userRepository.create({ name, password, email });
}

class UsersRepository {
  create({ name, password, email }) {
    // cria o usuário (name, email, password)
  }
}

// Prefira sempre receber em funções objetos ao invés de múltiplos parâmetros
