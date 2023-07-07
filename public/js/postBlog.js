const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');
const submitEl = document.getElementById('submit-btn');

const newPostHandler = async function(event){
  event.preventDefault();

  const response = await fetch('/api/blogs',{
    method: 'POST',
    body: JSON.stringify({
      blog_title:titleEl.value,
      blog_content:contentEl.value,  
    }),
    headers:{
      'Content-Type':'application/json'
    }
  });

  if(response.ok){
    document.location.replace('/dashboard');
  } else{
    alert("Failed to post!");
  }
}

submitEl.addEventListener('click', newPostHandler);