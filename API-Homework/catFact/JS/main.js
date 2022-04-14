document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://cat-fact.herokuapp.com/facts/random?amount=2'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h3').innerHTML = ''
        data.forEach(function(element){
          document.querySelector('h3').innerHTML += ' ' + element.text
        })
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

