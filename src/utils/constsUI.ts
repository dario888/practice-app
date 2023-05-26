export const privateLinksData = [
  { url: "/home", linkName: "Home" },
  { url: "/episodes", linkName: "Episodes" },
  { url: "/characters", linkName: "Characters" },
  { url: "/about", linkName: "About" },
];

export const publicLinksData = [
  { url: "/", linkName: "Login" },
  { url: "/register", linkName: "Register" },
];

export const inputDataArr = [
  {
    inputType: "text",
    inputName: "username",
    labelName: "USERNAME",
    errorKey: "usernameErr",
  },
  {
    inputType: "email",
    inputName: "email",
    labelName: "Email",
    errorKey: "emailErr",
  },
  {
    inputType: "password",
    inputName: "password",
    labelName: "Password",
    errorKey: "passwordErr",
  },
  {
    inputType: "password",
    inputName: "checkPassword",
    labelName: "Check Password",
    errorKey: "checkPasswordErr",
  },
];

export const inputLoginArr = [
  {
    inputType: "email",
    inputName: "email",
    labelName: "Email",
    errorKey: "emailErr",
  },
  {
    inputType: "password",
    inputName: "password",
    labelName: "Password",
    errorKey: "passwordErr",
  },
];

export const PAGE_NUMBER = 1;

export const CHARACTERS_SPECIES = [
  { id: 1, name: "ALIEN", value: "Alien" },
  { id: 2, name: "HUMAN", value: "Human" },
  { id: 3, name: "HUMANOID", value: "Humanoid" },
  { id: 4, name: "POOPYBUTTHOLE", value: "Poopybutthole" },
  { id: 5, name: "MALE", value: "Male" },
  { id: 6, name: "FEMALE", value: "Female" },
  { id: 7, name: "UKNOWN", value: "unknown" },
  { id: 8, name: "ALL", value: "" },
];
