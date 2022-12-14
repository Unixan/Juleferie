function logInScreen() {
  model.mainView = "";
  model.mainView += /*HTML*/ `
<div class="login">
  <h1>Welcome!</h1>
  <div class="dialogueBox">
      <div class="inputFields">
          <label for="loginName">Username:</label><br>
          <input type="text" id="loginName"/><br><br>
          <label for="loginPword">Password:</label><br>
          <input type="password" id="loginPword"/><br><br>
          </div>
          <button onclick="loginCheck()">Log in</button> or <button onclick="createAccount()">Create new account</button>
          <p>${model.error}</p>
  </div>
</div>
  `;
  model.error = "";
}

function createAccount() {
  model.createAccount = true;
  model.mainView = "";
  model.mainView += /*HTML*/ `
<div class="login">
  <h1>Create new account</h1>
  <div class="dialogueBox">
      <label for="newName">Username:</label><br>
      <input type="text" id="newName" placeholder="Minimum 3 characters"/><br><br>
      <label for="newPword">Password:</label><br>
      <input type="password" id="newPword" placeholder="Minimum 8 characters"/><br><br>
      <label for="newPwordVerify">Verify password:</label><br>
      <input type="password" id="newPwordVerify" placeholder="Minimum 8 characters"/><br><br>
      <button onclick="createNewAccount()">Create account</button> <button onclick="cancelAccountCreate()">Cancel</button></p>
      ${model.error}
  </div>
</div>
  `;
  model.error = "";
  view();
}

function cancelAccountCreate() {
  model.createAccount = false;
  view();
}

function createNewAccount() {
  let newUser = {
    userName: document.getElementById("newName").value,
    userPword: document.getElementById("newPword").value,
    userLevel: "user",
  };
  let verify = document.getElementById("newPwordVerify").value;
  if (newUser.userName.length < 3) {
    model.error = `<div style="color: red; font-size: 10">Username must be atleast 3 characters long</div><br>`;
    createAccount();
  } else if (newUser.userPword.length < 8) {
    model.error = `<div style="color: red; font-size: 10">Password must be atleast 8 characters long</div><br>`;
    createAccount();
  } else if (newUser.userPword != verify) {
    model.error = `<div style="color: red; font-size: 10">Passwords doesn't match</div><br>`;
    createAccount();
  } else if (model.userAccounts.find((e) => e.userName === newUser.userName)) {
    model.error = `<div style="color: red; font-size: 10">Username not available</div><br>`;
    createAccount();
  } else {
    model.userAccounts.push(newUser);
    model.createAccount = false;
    model.error = `<div>Account creation successfull</div>`;
    view();
  }
}

function loginCheck() {
  model.loginCheck = true;
  model.mainView = "";
  let loginSuccess = false;
  let userName = document.getElementById("loginName").value;
  let userPword = document.getElementById("loginPword").value;
  for (i of model.userAccounts) {
    if (userName === i.userName) {
      for (j of model.userAccounts) {
        if (userPword === j.userPword) {
          loginSuccess = true;
        }
      }
    }
  }
  if (loginSuccess == false) {
    model.error = `<div style="color: red; font-size: 10">Username or password is wrong</div><br>`;
    model.loginCheck = false;
  } else {
    model.mainView = `<h1>Welcome ${userName}!</h1>`;
  }
  view();
}
