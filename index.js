
let date = ''

dates()
// TODAYS DATE FUNCTION

function dates() {
 //YEAR
  var year = new Date()
  var newYear = year.getFullYear()
  date += newYear + '-'
  
  //MONTH
   let zero = '0'
   var month = new Date()
   var newMonth = month.getMonth() + 1

   if (newMonth < 10) {
        zero += newMonth
        console.log(zero)
         date += zero + '-'
      } 
      else {
          console.log(newMonth)
          date += newMonth + '-'
        }
        //DAY
        var d = new Date();
        var n = d.getDate();
        date += n
        
        //WHOLE DATE
        console.log(date)
    }
    

// Today Recent 10 Police Reports

  let promise = fetch ("https://polisen.se/api/events?DateTime=" + date,) 
  .then(response => {
    console.log(response)
    let otherPromise = response.json()
    return otherPromise
  })
  .then(result => {
  topTen(result)
  
  function topTen (result){
    let ten = []
    for (let x = 0; x < 10; x++) {
      ten.push([result[x]])   
    }  
    console.log(ten, ten.length)

//TOP TEN
city10Loop(ten)
function city10Loop (ten){
  for (let index = 0; index < ten.length; index++) {
    
    if (ten[index][0].type === 'sammanfattning natt') {
      splice(ten[index], 1)
    }
    let topTenCities = document.querySelectorAll('#cityTableData')
    console.log(ten[5][0].id , ten.length, index)
    topTenCities[index].innerHTML = `<strong>${ten[index][0].location.name}</strong>` 
    // topTenCities[index].textContent = ten[index][0].location.name

    //TOP TEN SUMMARY
    let summaryTen = document.querySelectorAll('#summary10')
    summaryTen[index].textContent = ten[index][0].summary
    //TOP TEN DATE
    let dateTen = document.querySelectorAll('#dateTen')
    // dateTen[index].textContent = ten[index][0].datetime
       dateTen[index].innerHTML = `<strong>${ten[index][0].datetime}</strong>` 
      }
    }
  }
})  


//Memory
// let cityInput = document.querySelector('#city').value
sessionStorage.setItem('City', 'how?')
localStorage.setItem('City', 'how?')



// Key Enter to start scanner

// let startScanner = document.queryselctor('#submit')
addEventListener('keydown', enter )

function enter (click) {
  if (click.keyCode === 13 && cityInput !== null){
    f()
    console.log(click)
    
}
}

//Submit Button Value fetch
let submit = document.querySelector('#submit')
submit.addEventListener('click', f)
let city = document.querySelector('#city')
let crimeType = document.querySelector('select')

//Textarea Results
let textArea = document.querySelector('[contenteditable="true"]')

function f (){
  
  // console.log(city.value, crimeType.value);
  
  fetch ("https://polisen.se/api/events?locationname=" + city.value + '&type=' + crimeType.value, ) 
  .then(response => {
    console.log(response)
    let otherPromise = response.json()
    return otherPromise
  })
  .then(result => {
    loop(result)
    function loop (array) {
      const element = [];
      for (let index = 0; index < array.length; index++) {   
        element.push('<strong>' + [result[index].name + '</strong>' + ' ' + result[index].summary + '' + '<br>' + '<br>'])
      }
      console.log(element);
    
      return textArea.innerHTML = `Totala Fall <strong>${element.length} st </strong> <br> <br> ${element.join(' ')} `
    }
  } )  
}




//Ivestigation button changes theme to dark
// let onButtonTheme = document.querySelector('#darktheme')
// let body = document.body
// onButtonTheme.addEventListener('click', theme)
// function theme (event){
    
//   console.log(event)
//   if (body.backgroundColor === '#000'){
//    body.style.backgroundColor = '#fff'
//    console.log('black');
//  }
//   else  if (body.backgroundColor === '#fff'){
//     body.style.backgroundColor = '#555'
//     console.log('hello');
//   }
  
// }


// GPS https://openstreetmap.org




  // https://polisen.se/kontakt/om-webbplatsen/oppna-data/api-over-polisens-handelser/
// ?locationname=Göteborg;Mölndal
// /api/events?type=Misshandel
// /api/events?DateTime=2018-03-05%2021

//Nearest Police Station https://polisen.se/api/policestations
