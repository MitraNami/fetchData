document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternalData);



function getText() {
  fetch('./test.txt')
    .then(handleError)
    .then(response => response.text())
    .then(text => {
      document.getElementById('output').textContent = text;
    })
    .catch(err => console.log(err.message));  
}


function getJson() {
  fetch('./posts.json')
    .then(handleError)
    .then(response => response.json())
    .then(posts => {
      const lis = posts.reduce((acc, post) => acc + `<li>${post.title}</li>`, '');
      document.getElementById('output').innerHTML = lis;
    })
    .catch(err => console.log(err.message));
}


function getExternalData() {
  fetch('https://api.github.com/ers')
    .then(handleError)
    .then(res => res.json())
    .then(users => {
      const lis = users.reduce((acc, user) => acc + `<li>${user.login}</li>`, '');
      document.getElementById('output').innerHTML = lis;
    })
    .catch(err => console.log(err.message))
}


function handleError(res) {
  if (!res.ok) {
    throw Error(`Error: ${res.status} ${res.statusText}`);
  }
  return res;
}
  

