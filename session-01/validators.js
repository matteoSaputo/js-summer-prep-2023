/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  let isCorrectLength = username.length >= 3 && username.length <= 10;
  let firstLetter = username[0];
  let beginsWithLetter = (firstLetter >= 'a' && firstLetter <= 'z') || (firstLetter >= 'A' && firstLetter <= 'Z');
  let hasSpecials = hasSpecialChars(username);
  return isCorrectLength && beginsWithLetter && !hasSpecials;
}
function hasSpecialChars(username){
  let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  return specialChars.test(username);
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  let isCorrectLength = password.length >= 10 && password.length <= 64;
  let containsNums = /[0-9]/.test(password);
  let containsLetter = /[a-zA-Z]/.test(password);
  return isCorrectLength && containsLetter && containsNums && hasSpecialChars(password);
}

module.exports = { validUsername, validPassword };
