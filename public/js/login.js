const userInput = document.getElementById('username');
const passInput = document.getElementById('password');
const submitEl = document.getElementById('login-btn');

const loginHandler = async function(event){
  event.preventDefault();
  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: userInput.value,
      password: passInput.value,
    }),
    headers:{
      'Content-Type':'application/json'
    },
  });

  if (response.ok){
    document.location.replace('dashboard');
  } else{
    alert('Login failed!');
  }
}

submitEl.addEventListener('click', loginHandler);