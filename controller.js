function logInScreen() {
  model.mainView = "";
  model.mainView += /*HTML*/ `
<h1>Welcome!</h1>
<div class="dialogueBox">
    <div class="inputFields">
        <label for="loginName">Username:</label><br>
        <input type="text" id="loginName"/><br><br>
        <label for="loginPword">Password:</label><br>
        <input type="text" id="loginPword"/><br><br>
        ${model.error}
    </div>
    <button>Log in</button> or <button onclick="createAccount()">Create new account</button>
</div>
  `;
  model.error = "";
}

function createAccount() {
  model.createAccount = true;
  model.mainView = "";
  model.mainView += /*HTML*/ `
  <h1>Create new account</h1>
<div class="dialogueBox">
    <label for="newName">Username:</label><br>
    <input type="text" id="newName" placeholder="Minimum 3 characters"/><br><br>
    <label for="newPword">Password:</label><br>
    <input type="text" id="newPword" placeholder="Minimum 8 characters"/><br><br>
    <button onclick="createNewAccount()">Create account</button> <button onclick="cancelAccountCreate()">Cancel</button></p>
    ${model.error}
</div>
  `;
  view();
  model.error = "";
}

function cancelAccountCreate() {
  model.createAccount = false;
  view();
}

function createNewAccount() {
  let newUser = {
    userName: document.getElementById("newName").value,
    userPword: document.getElementById("newPword").value,
  };
  if (newUser.userName.length < 3) {
    model.error = `<div style="color: red; font-size: 10">Username must be atleast 3 characters long</div><br>`;
    createAccount();
  } else if (newUser.userPword.length < 8) {
    model.error = `<div style="color: red; font-size: 10">Password must be atleast 8 characters long</div><br>`;
    createAccount();
  } else {
    model.userAccounts.push(newUser);
    console.log(model.userAccounts);
    model.createAccount = false;
    view();
  }
}
