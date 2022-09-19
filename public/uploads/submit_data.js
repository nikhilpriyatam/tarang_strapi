document.addEventListener('DOMContentLoaded', function() {

  const form = document.querySelector('#api_form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = document.querySelector("#bearer_token").value
    await fetch('/api/upload', {
      method: 'POST',
      headers: {Authorization: `Bearer ${token}`},
      body: new FormData(e.target)
    }).then(function (response) {
      return response.text()
    }).then(function (text) {
      console.log(text)
    });
  });
});


