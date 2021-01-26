document.getElementById('button1').addEventListener('click', getText);









function getText() {
  fetch('./test.txt')
    .then(handleError)
    .then(response => response.text())
    .then(displayResult)
    .catch(err => console.log(err.message));  
}








function displayResult(data) {
  document.getElementById('output').textContent = data;
}


function handleError(res) {
  if (!res.ok) {
    throw Error(`Error: ${res.status} ${res.statusText}`);
  }
  return res;
}
  

