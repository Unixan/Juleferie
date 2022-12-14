function view() {
  let html = "";
  if (model.loggedIn || model.createAccount || model.loginCheck) {
  } else {
    logInScreen();
  }
  html += model.mainView;
  model.appDiv.innerHTML = html;
}
