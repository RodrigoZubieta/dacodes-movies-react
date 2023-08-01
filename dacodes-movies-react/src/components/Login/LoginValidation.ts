
export const validateEmail = (value: string): { valid: boolean; error: string } => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(value);
  return {
    valid: isValid,
    error: isValid ? "" : "Ingrese un correo válido",
  };
};

export const validatePassword = (value: string): { valid: boolean; error: string[] } => {
  const minLength = 7;
  const uppercaseRegex = /[A-Z]/;
  const specialCharRegex = /[\W_]/;

  const errors: string[] = [];
  if (value.length < minLength) {
    errors.push("Longitud mínima de 7 caracteres.");
  }
  if (!uppercaseRegex.test(value)) {
    errors.push("Debe contener al menos una letra mayúscula.");
  }
  if (!specialCharRegex.test(value)) {
    errors.push("Debe contener al menos un carácter especial.");
  }

  return {
    valid: errors.length === 0,
    error: errors,
  };
};
