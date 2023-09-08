export const isEmailValid = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const isPasswordValid = (password) => {
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
};

export const isNameValid = (name) => {
  return name.length > 0;
};

export const validationSchema = ({
  name: name,
  email: email,
  password: password,
  confirmPassword: confirmPassword,
}) => {
  const errors = {};

  if (!isEmailValid(email)) {
    errors.email = "Invalid email address";
  }

  if (!isPasswordValid(password)) {
    errors.password =
      "Password must be at least 8 characters and meet the requiremen";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!isNameValid(name)) {
    errors.name = "Name is required";
  }

  return errors;
};
