function view() {
  let stemmer = model.loggedIn || model.createAccount || model.loginCheck;
  if (!stemmer) logInScreen();
  model.appDiv.innerHTML = model.mainView;
}
