function view() {
  let html = "";
  if (model.loggedIn || model.createAccount) {
  } else {
    logInScreen();
  }
  html += model.mainView;
  model.appDiv.innerHTML = html;
}
