(function() {
  const apiUrl = 'https://api.equiprental.rocks';
  const submitButton = document.querySelector('#submit');

  submitButton.addEventListener('click', function() {
    const email = document.querySelector('#email');

    fetch(apiUrl + '/subscribers', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value
      })
    }).then(function(response) {
      // animate
      submitted();
    }).then(function(error) {
      // console.log(error);
    });
  });
})();

function submitted() {
  const submitted = document.querySelector('#submit');
  const email = document.querySelector('#email');
  
  submitted.innerHTML = 'Thanks!';
  submitted.className += 'submitted';

  email.style.display = 'none';
}