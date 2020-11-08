// Selctor New Input
let putId = document.querySelector('#id') 
let putContext = document.querySelector('#putContext') 
let putName = document.querySelector('#putName') 
let request = document.getElementById('request')
let buttonRequest = document.querySelector('#buttonRequest')
let putButton = document.querySelector('#putButton')
let deleteButton = document.getElementById('delete')
let table = document.querySelector('table')
let tableId = document.querySelectorAll('#cityId')
let tableName = document.querySelectorAll('#cityName')
let tablePop = document.querySelectorAll('#cityPop')
 let address = document.getElementById('http')
let postId = document.querySelector('#postId')
let postPopulation = document.querySelector('#postPopulation')
let postName = document.querySelector('#postName')
let postButton = document.querySelector('#postButton')
request.addEventListener('click', f)

function f(event) {
  console.log(event)
  if (event.target.value === "") {
    buttonRequest.classList.add('absoluteDelete')
    putContext.classList.add("avanceraReq");
  }
  
  if (event.target.value === 'post') {
    postButton.classList.add('absoluteDisplay')
    postId.classList.add('absoluteDisplay')
    postPopulation.classList.add('absoluteDisplay')
    postName.classList.add('absoluteDisplay')    
    putContext.classList.add("avanceraReq");
    deleteButton.classList.add('deleteMe')
    buttonRequest.classList.add('absoluteDelete')
    id.classList.remove('absoluteDisplay')
    putButton.classList.add('putButton')
    putName.classList.add("avanceraReq");
  }
  
  if (event.target.value === 'put') {
    postButton.classList.remove('absoluteDisplay')
    postId.classList.remove('absoluteDisplay')
    postPopulation.classList.remove('absoluteDisplay')
    postName.classList.remove('absoluteDisplay')
    putContext.classList.remove("avanceraReq");
    putName.classList.remove("avanceraReq");
    id.classList.add('absoluteDisplay')
    deleteButton.classList.add('deleteMe')
    buttonRequest.classList.add('buttonRequest')
    putButton.classList.toggle('putButton')
  }
  if (event.target.value === 'del') {
    postButton.classList.remove('absoluteDisplay')
    id.classList.remove('absoluteDisplay')
    putContext.classList.add("avanceraReq");
    postId.classList.remove('absoluteDisplay')
    postPopulation.classList.remove('absoluteDisplay')
    postName.classList.remove('absoluteDisplay')
    buttonRequest.classList.add('buttonRequest')
    deleteButton.classList.remove('deleteMe')
    id.classList.add('idRemove')
    deleteButton.classList.remove('absoluteDelete')
    putButton.classList.add('putButton')
    putName.classList.add("avanceraReq");
  }
  else if (event.target.value === 'get' || event.target.value === null) {
    address.value = "https://avancera.app/cities/"
    postButton.classList.remove('absoluteDisplay')
    id.classList.remove('absoluteDisplay')
    postId.classList.remove('absoluteDisplay')
    postPopulation.classList.remove('absoluteDisplay')
    putButton.classList.add('putButton')
    putName.classList.add("avanceraReq");
    postName.classList.remove('absoluteDisplay')
    buttonRequest.classList.remove('buttonRequest')
    putContext.classList.add("avanceraReq");
    deleteButton.classList.add('deleteMe')
    id.classList.add('idRemove')
    buttonRequest.textContent = `Let's get it!` 
    buttonRequest.classList.remove('absoluteDelete')
  }
}

// GET REQUEST FOR AVANCERA
let buttonAvancera = document.querySelector("#buttonRequest")
buttonAvancera.addEventListener('click', avanc)
 
function avanc() {
  let address = document.getElementById('http').value
fetch(`${address}/`)
  .then(response => response.json())
  .then(result => {
    console.log(address);
    f(result)
      function f(result) {
        for (let i = 0; i < result.length; i++) {
          //Table
          let tableId = document.querySelectorAll('#cityId')
          let tableName = document.querySelectorAll('#cityName')
          let tablePop = document.querySelectorAll('#cityPop')
          
          if (tableId.length < result.length) {
            let table = document.querySelector('table')
            let tbody = document.createElement('tbody')
            let tr = document.createElement('tr')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            table.appendChild(tbody)
            tbody.appendChild(tr)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            td1.id = "cityId";
            td2.id = 'cityName'
            td3.id = 'cityPop'
          }
          tableId[i].textContent = result[i].id
          tableName[i].textContent = result[i].name
          tablePop[i].textContent = result[i].population
        }
        tableId.textContent = id
        console.log(result);
    }
  })  
}

// DEL REQUEST FOR AVANCERA

function del() {
  location.reload()
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
  location.reload()
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

//POST

function post() {
  location.reload()
  let postId = document.querySelector('#postId').value 
  let postPopulation = document.querySelector('#postPopulation').value 
  let postName = document.querySelector('#postName').value

  fetch("https://avancera.app/cities/", {
  body: JSON.stringify({ id: postId, population: postPopulation, name: postName }),
  headers: { "Content-Type": "application/json" },
  method: "POST",
})
  .then((response) => response.json())
  .then((post) => {
    console.log(post);
  });

}
