function view() {
  if (!model.loggedIn && !model.loginCheck && !model.createAccount) {
    logInScreen();
  } else if (model.loggedIn) {
    model.mainView += welcomeScreen();
    model.mainView
  }
  model.appDiv.innerHTML = model.mainView;
}
