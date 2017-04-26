(function() {
  const submitButton = document.querySelector('#submit');

  submitButton.addEventListener('click', function() {
    const email = document.querySelector('#email');

    fetch('http://localhost:9000/subscribers', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value
      })
    }).then(function(response) {
      // console.log(response);
    }).then(function(error) {
      // console.log(error);
    });
  });
})();