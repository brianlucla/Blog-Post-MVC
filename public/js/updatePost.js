const contentEl = document.getElementById('update-content');
const updateEl = document.getElementById('update-btn');
const deleteEl = document.getElementById('delete-btn');
const blogId = document.getElementById('blog-id');
console.log(contentEl.value + "AND" + blogId.value);

const updateHandler = async function(event){
  event.preventDefault();

  const response = await fetch(`/api/blogs/${blogId.value}`, {
    method: 'PUT',
    body:JSON.stringify({
      blog_content:contentEl.value,
    }),
    headers:{
      'Content-Type':'application/json'
    }
  });

  if (response.ok){
    document.location.replace('dashboard');
  } else {
    alert('Update failed!');
  }
}

const deleteHandler = async function(event){
  event.preventDefault();

  const response = await fetch(`/api/blogs/${blogId.value}`,{
    method:'DELETE'
  });

  document.location.replace('/dashboard');
}

updateEl.addEventListener('click', updateHandler);

deleteEl.addEventListener('click', deleteHandler);