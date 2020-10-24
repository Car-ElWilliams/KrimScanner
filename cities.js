


// Selctor New Input
let putId = document.querySelector('#id') 
let putContext = document.querySelector('#putContext') 
let putName = document.querySelector('#putName') 
let request = document.getElementById('request')
let buttonRequest = document.querySelector('#buttonRequest')
let putButton = document.querySelector('#putButton')
let deleteButton = document.getElementById('delete')

request.addEventListener('click', f)



function getInputValue() {
  // Selecting the input element and get its value 
  
  // Displaying the value
  alert(address);
}

function f(event) {
  console.log(event)
  if (event.target.value === 'put') {
    
    putContext.classList.toggle("avanceraReq");
    putName.classList.toggle("avanceraReq");
    id.classList.remove('idRemove')
    deleteButton.classList.add('deleteMe')
    buttonRequest.classList.add('buttonRequest')
    putButton.classList.toggle('putButton')
    }
    
    if (event.target.value === 'del' ) {
      
      buttonRequest.classList.add('buttonRequest')
      
      deleteButton.classList.remove('deleteMe')
      id.classList.add('idRemove')
    }
    else if (event.target.value === 'get' || event.target.value === null) {
      buttonRequest.classList.remove('buttonRequest')
      putButton.classList.add('putButton')
      deleteButton.classList.add('deleteMe')
      id.classList.add('idRemove')
    buttonRequest.textContent = `Let's get it!` 
  }
}

// GET REQUEST FOR AVANCERA

let cityText = document.getElementById('cityText')
//Button for City Request Avancera App
let buttonAvancera = document.querySelector("#buttonRequest")
buttonAvancera.addEventListener('click', avanc)

function avanc() {
  let address = document.getElementById('http').value
  fetch(`${address}`)
  .then(response => response.json())
  .then(result => {
    
    console.log(address);
    f(result)
      function f(result) {
        let id = []
        let population = []
        let name = []
        for (let i = 0; i < result.length; i++) {
          id.push(result[i].id)
          population.push(result[i].population)
          name.push(result[i].name)
        }
        cityText.textContent = id + population + name
        console.log(result);
      }
    })  
}




// DEL REQUEST FOR AVANCERA - WORKING

function del() { 
  let address = document.getElementById('http').value
  fetch(`${address}`, {
    method: "DELETE",
  })
    .then(response => response.json())
    .then((result) => {
      console.log(result);
    })
}
 
//PUT REQUEST

function put() {
  let address = document.getElementById('http').value
  let putId = document.querySelector('#id').value 
  let putContext = document.querySelector('#putContext').value 
  let putName = document.querySelector('#putName').value

  fetch(`${address}`, {
  body: JSON.stringify({ id: putId, population: putContext, name: putName }),
  headers: { "Content-Type": "application/json" },
  method: "PUT",
})
  .then((response) => response.json())
  .then((put) => {
    console.log(put);
  });

}

      



