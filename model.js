const model = {
  appDiv: document.getElementById("app"),
  loggedIn: false,
  mainView: "",
  currentUser: {},
  loginCheck: false,
  userAccounts: [
    {
      userName: "Unixan",
      userPword: "wronganswer",
      userLevel: "admin",
    },
  ],
  userLogin: {
    name: "",
    password: "",
  },
  error: "",
  createAccount: false,
};
