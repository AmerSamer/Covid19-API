async function covid19() {
    if (!localStorage.getItem("tempStorage")) {
        let data1 = await (await fetch('https://corona-api.com/countries')).json();
        let data2 = await (await fetch('https://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1')).json();
        localStorage.setItem("tempStorage", JSON.stringify({ data1: data1, data2: data2 }))
    }
    let data = JSON.parse(localStorage.getItem("tempStorage"))

    let arrayWorld = []
    let arrayAsia = []
    let arrayAsiaNames = []
    let arrayAsiaValues = []
    let arrayEuropa = []
    let arrayAmericas = []
    let arrayAfrica = []
    let btnWorld = document.querySelector('.btnWorld')
    let btnAsia = document.querySelector('.btnAsia')
    let btnEuropa = document.querySelector('.btnEuropa')
    let btnAmericas = document.querySelector('.btnAmericas')
    let btnAfrica = document.querySelector('.btnAfrica')
    let chart = document.querySelector('.chart')
    let stats = document.querySelector('.stats')


    let myChart
    function Chartt(arrayAsiaNames, arrayAsiaValues) {
        if (myChart)
            myChart.destroy();

        var ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: arrayAsiaNames,
                datasets: [{
                    label: '# of Votes',
                    data: arrayAsiaValues,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    for (let i = 0; i < data.data1.data.length; i++) {
        arrayWorld.push(data.data1.data[i])
    }
    for (let i = 0; i < data.data2.length; i++) {
        if (data.data2[i].region == 'Asia') {
            arrayAsia.push(data.data2[i])
            arrayAsiaNames.push(data.data2[i].name.common)
            for (let j = 0; j < data.data1.data.length; j++) {
                if (data.data2[i].cca2 == data.data1.data[j].code) {
                    arrayAsiaValues.push(data.data1.data[j].latest_data.deaths)
                }
            }
        }
  
        if (data.data2[i].region == 'Europe') {
            arrayEuropa.push(data.data2[i])
        }
        if (data.data2[i].region == 'Americas') {
            arrayAmericas.push(data.data2[i])
        }
        if (data.data2[i].region == 'Africa') {
            arrayAfrica.push(data.data2[i])
        }

    }
    // console.log(arrayAsiaNames);

    btnWorld.addEventListener('click', getAllCountriesWorld)
    btnAsia.addEventListener('click', getAllCountriesAsia)
    btnEuropa.addEventListener('click', getAllCountriesEuropa)
    btnAmericas.addEventListener('click', getAllCountriesAmericas)
    btnAfrica.addEventListener('click', getAllCountriesAfrica)



    function getAllCountriesWorld() {
        stats.innerHTML = ''
        arrayWorld.map(item => stats.innerHTML += `<span class="world" accessKey="${item.code}">${item.name}</span>`);
        const cbox = document.querySelectorAll(".world");
        cboxSelectorAll(cbox)

    }
    function getAllCountriesAsia() {
        stats.innerHTML = ''
        arrayAsia.map(item => stats.innerHTML += `<span class="asia" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".asia");
        cboxSelectorAll(cbox)
        // chart.innerHTML = ''
        Chartt(arrayAsiaNames, arrayAsiaValues)
    }
    function getAllCountriesEuropa() {
        stats.innerHTML = ''
        arrayEuropa.map(item => stats.innerHTML += `<span class="europa" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".europa");
        cboxSelectorAll(cbox)

    }
    function getAllCountriesAmericas() {
        stats.innerHTML = ''
        arrayAmericas.map(item => stats.innerHTML += `<span class="americas" accessKey="${item.cca2}">${item.name.common}</span>`);

        const cbox = document.querySelectorAll(".americas");

        cboxSelectorAll(cbox)
    }
    function getAllCountriesAfrica() {
        stats.innerHTML = ''
        arrayAfrica.map(item => stats.innerHTML += `<span class="africa" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".africa");
        cboxSelectorAll(cbox)
    }

    function cboxSelectorAll(cbox) {
        for (let i = 0; i < cbox.length; i++) {
            // console.log(cbox[i]);
            cbox[i].addEventListener("click", function () {
                for (let j = 0; j < data.data1.data.length; j++) {
                    if (data.data1.data[j].code == cbox[i].accessKey) {
                        chart.innerHTML = ''
                        chart.innerHTML += `<span>|Total Cases:${data.data1.data[j].latest_data.confirmed}|</span>`
                        chart.innerHTML += `<span>|New Cases:${data.data1.data[j].today.confirmed}|</span>`
                        chart.innerHTML += `<span>|Total Deaths:${data.data1.data[j].latest_data.deaths}|</span>`
                        chart.innerHTML += `<span>|New Deaths:${data.data1.data[j].today.deaths}|</span>`
                        chart.innerHTML += `<span>|Total Recovered:${data.data1.data[j].latest_data.recovered}|</span>`
                        chart.innerHTML += `<span>|Critical:${data.data1.data[j].latest_data.critical}|</span>`
                    }
                }
            });
        }
    }
    
    // Chartt(arrayAsiaNames, arrayAsiaValues)
   
}

covid19()

