const registrationForm = document.getElementById('registrationForm');
const displayData = document.getElementById('displayData');
let registeredUsers = [];

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userData = {
    name,
    email,
    password
  };

  registeredUsers.push(userData);
  displayUserData();
  registrationForm.reset();
});

function displayUserData() {
  displayData.innerHTML = '';

  for (let i = 0; i < registeredUsers.length; i++) {
    const userDataHTML = `
      <div class="user-card">
        <h3>Registered User ${i + 1}</h3>
        <p><strong>Name:</strong> ${registeredUsers[i].name}</p>
        <p><strong>Email:</strong> ${registeredUsers[i].email}</p>
        <p><strong>Password:</strong> ${registeredUsers[i].password}</p>
      </div>
    `;

    displayData.innerHTML += userDataHTML;
  }
}
