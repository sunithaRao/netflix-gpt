export const checkValidate = (fullName, email, password, isSignInForm) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isFullName = /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(fullName);

  console.log("In Validate sign in::", isSignInForm);
  console.log("In Validate sign in::", fullName);
  console.log("In Validate sign in::", email);
  console.log("In Validate sign in::", password);

  if (!isSignInForm)
    if (!isFullName)
      return "FullName is should contain only letters and space in between first & last names.";

  if (!isEmailValid) return "Email ID is not valid.";
  if (!isPasswordValid) return "Password is not valid.";

  return null;
};
