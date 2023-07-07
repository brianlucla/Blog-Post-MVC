const logoutEl = document.getElementById('logout');

const logoutHandler = async function(event){
  event.preventDefault();

  const response = await fetch('/api/user/logout',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
  });

  if (response.ok){
    document.location.replace('/');
  } else{
    alert('Logout failed!');
  }
};

logoutEl.addEventListener('click', logoutHandler);