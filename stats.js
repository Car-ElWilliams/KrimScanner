let city = document.querySelector('#city-stats')
let statsButton = document.querySelector('#statsButton')
statsButton.addEventListener('click', cityStats)
let divName = document.getElementById('name')
let cityStorage = localStorage.setItem('City', document.querySelector('#city-stats').value )

function cityStats() {
  fetch("https://polisen.se/api/events/?locationName=" + city.value,)
  
  .then(response => response.json())
  .then(result => {
    console.log(result[99].type);
    let missType = []
    let missNumber = 0
    let ranType = []
    let ranNumber = 0
    let traType = []
    let traNumber = 0
    let morType = []
    let morNumber = 0
    let bedType = []
    let bedNumber = 0
    let skoType = []
    let skoNumber = 0
    let narType = []
    let narNumber = 0
      
      getType(result)
    function getType(result) {
      for (let i = 0; i < result.length; i++) {
        if (result[i].type === 'Misshandel') {
          missType.push([result[i].type])
        }
        if (result[i].type === 'Rån') {
          ranType.push([result[i].type])
        }
        if (result[i].type === 'Trafikolycka') {
          traType.push([result[i].type])
        }
        if (result[i].type === 'Mord/dråp') {
          morType.push([result[i].type])
        }
        if (result[i].type === 'Bedrägeri') {
          bedType.push([result[i].type])
        }
        if (result[i].type === 'Skottlossning') {
          skoType.push([result[i].type])
        }
        if (result[i].type === "Narkotikabrott") {
          narType.push([result[i].type])
        }

      }
      missNumber = missType.length
      ranNumber = ranType.length
      traNumber = traType.length
      morNumber = morType.length
      bedNumber = bedType.length
      skoNumber = skoType.length
      narNumber = narType.length 
      console.log(missNumber, ranNumber, traNumber, morNumber, bedNumber, skoNumber, narNumber);
      console.log(narType)

      divName.innerHTML = `Resultat för ${city.value}: <strong>${missType.length + ranType.length + traType.length + morType.length + bedType.length + skoType.length + narType.length}</strong>`
    
      let allCitiesChart = document.querySelector('#myChart').getContext('2d')
      let allCitiesDoughnut = null;
      allCitiesDoughnut = new Chart(allCitiesChart, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [missNumber, ranNumber, traNumber, morNumber, bedNumber, skoNumber, narNumber],
            backgroundColor: [
              "rgb(255, 0, 30)",
              "yellow",
              "blue",
              "green",
              "purple",
              "pink",
              "orange",
            ],
          }],
          labels: [
            'Misshandel',
            'Rån',
            'Trafikolyckor',
            'Mord/Dråp',
            'Bedrägeri',
            'Skottlossning',
            'Narkotikabrott',
          ],
        }
      });
    }
  })
}
