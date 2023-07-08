const commentEl = document.getElementById('comment');
const submitEl = document.getElementById('submit-btn');

const commentHandler = async function(event){
  event.preventDefault();

  const response = await fetch('/api/comments', {
    method: 'POST',
    body:JSON.stringify({
      content:req.body,
    }),
    headers:{
      'Content-Type':'application/json'
    }
  });

  if(response.ok){
    document.location.reload();
  } else{
    alert('Comment could not be posted!');
  }

}

submitEl.addEventListener('click', commentHandler);