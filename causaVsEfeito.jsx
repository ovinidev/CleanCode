// RUIM
function BadButton() {
  const isButtonDisabled = true;

  return (
    <button disabled={isButtonDisabled}>
      <span>{isButtonDisabled ? "Carregando..." : "Enviar"}</span>
    </button>
  );
}

// BOM
function GreatButton() {
  const isFormSubmitting = true;

  return (
    <button disabled={isFormSubmitting}>
      <span>{isFormSubmitting ? "Carregando..." : "Enviar"}</span>
    </button>
  );
}

// Sempre nomear as variáveis pela causa e não pelo efeito
