document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://cat-fact.herokuapp.com/facts/random?amount=2'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerHTML = data.text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

