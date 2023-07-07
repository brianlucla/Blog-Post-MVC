const userInput = document.getElementById('username');
const passInput = document.getElementById('password');
const submitEl = document.getElementById('signup-btn');

const signupHandler = async function(event){
  event.preventDefault();

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: userInput.value,
      password: passInput.value,
    }),
    headers:{
      'Content-Type': 'application/json'
    },
  });

  if (response.ok){
    document.location.replace('/dashboard');
  } else{
    alert('Sign up failed!');
  }

}

submitEl.addEventListener('click', signupHandler);