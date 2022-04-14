document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://www.fruityvice.com/api/fruit/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerHTML = data.family
        document.querySelector('h3').innerHTML = data.genus
        document.querySelector('h4').innerHTML = data.protein
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

