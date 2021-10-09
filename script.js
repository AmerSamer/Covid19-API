async function covid19() {
    if (!localStorage.getItem("tempStorage")) {
        let data1 = await (await fetch('https://corona-api.com/countries')).json();
        let data2 = await (await fetch('https://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1')).json();
        localStorage.setItem("tempStorage", JSON.stringify({ data1: data1, data2: data2 }))
    }
    let data = JSON.parse(localStorage.getItem("tempStorage"))

    let arrayWorld = []
    let arrayWorldNames = []
    let arrayWorldValues = []
    let arrayyWorldValuesConfirmed = []
    let arrayyWorldValuesRecovered = []
    let arrayyWorldValuesCritical = []

    let arrayAsia = []
    let arrayAsiaNames = []
    let arrayAsiaValues = []
    let arrayAsiaValuesConfirmed = []
    let arrayAsiaValuesRecovered = []
    let arrayAsiaValuesCritical = []

    let arrayEuropa = []
    let arrayEuropaNames = []
    let arrayEuropaValues = []
    let arrayEuropaValuesConfirmed = []
    let arrayEuropaValuesRecovered = []
    let arrayEuropaValuesCritical = []

    let arrayAmericas = []
    let arrayAmericasNames = []
    let arrayAmericasValues = []
    let arrayAmericasValuesConfirmed = []
    let arrayAmericasValuesRecovered = []
    let arrayAmericasValuesCritical = []

    let arrayAfrica = []
    let arrayAfricaNames = []
    let arrayAfricaValues = []
    let arrayAfricaValuesConfirmed = []
    let arrayAfricaValuesRecovered = []
    let arrayAfricaValuesCritical = []

    let btnWorld = document.querySelector('.btnWorld')
    let btnWorldConfirmed = document.querySelector('.btnWorldConfirmed')
    let btnWorldRecovered = document.querySelector('.btnWorldRecovered')
    let btnWorldCritical = document.querySelector('.btnWorldCritical')

    let btnAsia = document.querySelector('.btnAsia')
    let btnAsiaConfirmed = document.querySelector('.btnAsiaConfirmed')
    let btnAsiaRecovered = document.querySelector('.btnAsiaRecovered')
    let btnAsiaCritical = document.querySelector('.btnAsiaCritical')

    let btnEuropa = document.querySelector('.btnEuropa')
    let btnEuropaConfirmed = document.querySelector('.btnEuropaConfirmed')
    let btnEuropaRecovered = document.querySelector('.btnEuropaRecovered')
    let btnEuropaCritical = document.querySelector('.btnEuropaCritical')

    let btnAmericas = document.querySelector('.btnAmericas')
    let btnAmericasConfirmed = document.querySelector('.btnAmericasConfirmed')
    let btnAmericasRecovered = document.querySelector('.btnAmericasRecovered')
    let btnAmericasCritical = document.querySelector('.btnAmericasCritical')

    let btnAfrica = document.querySelector('.btnAfrica')
    let btnAfricaConfirmed = document.querySelector('.btnAfricaConfirmed')
    let btnAfricaRecovered = document.querySelector('.btnAfricaRecovered')
    let btnAfricaCritical = document.querySelector('.btnAfricaCritical')

    let chart = document.querySelector('.chart')
    let stats = document.querySelector('.stats')


    let myChart
    function Chartt(arrayNames, arrayValues) {
        if (myChart)
            myChart.destroy();

        var ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: arrayNames,
                datasets: [{
                    label: '# of Votes',
                    data: arrayValues,
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
        arrayWorldNames.push(data.data1.data[i].name)
        arrayWorldValues.push(data.data1.data[i].latest_data.deaths)
        arrayyWorldValuesConfirmed.push(data.data1.data[i].latest_data.confirmed)
        arrayyWorldValuesRecovered.push(data.data1.data[i].latest_data.recovered)
        arrayyWorldValuesCritical.push(data.data1.data[i].latest_data.critical)
    }
    console.log(data.data1.data[0]);
    for (let i = 0; i < data.data2.length; i++) {
        if (data.data2[i].region == 'Asia') {
            arrayAsia.push(data.data2[i])
            arrayAsiaNames.push(data.data2[i].name.common)
            for (let j = 0; j < data.data1.data.length; j++) {
                if (data.data2[i].cca2 == data.data1.data[j].code) {
                    arrayAsiaValues.push(data.data1.data[j].latest_data.deaths)
                    arrayAsiaValuesConfirmed.push(data.data1.data[j].latest_data.confirmed)
                    arrayAsiaValuesRecovered.push(data.data1.data[j].latest_data.recovered)
                    arrayAsiaValuesCritical.push(data.data1.data[j].latest_data.critical)
                }
            }
        }

        if (data.data2[i].region == 'Europe') {
            arrayEuropa.push(data.data2[i])
            arrayEuropaNames.push(data.data2[i].name.common)
            for (let j = 0; j < data.data1.data.length; j++) {
                if (data.data2[i].cca2 == data.data1.data[j].code) {
                    arrayEuropaValues.push(data.data1.data[j].latest_data.deaths)
                    arrayEuropaValuesConfirmed.push(data.data1.data[j].latest_data.confirmed)
                    arrayEuropaValuesRecovered.push(data.data1.data[j].latest_data.recovered)
                    arrayEuropaValuesCritical.push(data.data1.data[j].latest_data.critical)
                }
            }
        }

        if (data.data2[i].region == 'Americas') {
            arrayAmericas.push(data.data2[i])
            arrayAmericasNames.push(data.data2[i].name.common)
            for (let j = 0; j < data.data1.data.length; j++) {
                if (data.data2[i].cca2 == data.data1.data[j].code) {
                    arrayAmericasValues.push(data.data1.data[j].latest_data.deaths)
                    arrayAmericasValuesConfirmed.push(data.data1.data[j].latest_data.confirmed)
                    arrayAmericasValuesRecovered.push(data.data1.data[j].latest_data.recovered)
                    arrayAmericasValuesCritical.push(data.data1.data[j].latest_data.critical)
                }
            }
        }
        if (data.data2[i].region == 'Africa') {
            arrayAfrica.push(data.data2[i])
            arrayAfricaNames.push(data.data2[i].name.common)
            for (let j = 0; j < data.data1.data.length; j++) {
                if (data.data2[i].cca2 == data.data1.data[j].code) {
                    arrayAfricaValues.push(data.data1.data[j].latest_data.deaths)
                    arrayAfricaValuesConfirmed.push(data.data1.data[j].latest_data.confirmed)
                    arrayAfricaValuesRecovered.push(data.data1.data[j].latest_data.recovered)
                    arrayAfricaValuesCritical.push(data.data1.data[j].latest_data.critical)
                }
            }
        }

    }
    // console.log(arrayAsiaNames);

    btnWorld.addEventListener('click', getAllCountriesWorld)
    btnWorldConfirmed.addEventListener('click', getAllCountriesWorldConfirmed)
    btnWorldRecovered.addEventListener('click', getAllCountriesWorldRecovered)
    btnWorldCritical.addEventListener('click', getAllCountriesWorldCritical)

    btnAsia.addEventListener('click', getAllCountriesAsia)
    btnAsiaConfirmed.addEventListener('click', getAllCountriesAsiaConfirmed)
    btnAsiaRecovered.addEventListener('click', getAllCountriesAsiaRecovered)
    btnAsiaCritical.addEventListener('click', getAllCountriesAsiaCritical)

    btnEuropa.addEventListener('click', getAllCountriesEuropa)
    btnEuropaConfirmed.addEventListener('click', getAllCountriesEuropaConfirmed)
    btnEuropaRecovered.addEventListener('click', getAllCountriesEuropaRecovered)
    btnEuropaCritical.addEventListener('click', getAllCountriesEuropaCritical)



    btnAmericas.addEventListener('click', getAllCountriesAmericas)
    btnAmericasConfirmed.addEventListener('click', getAllCountriesAmericasConfirmed)
    btnAmericasRecovered.addEventListener('click', getAllCountriesAmericasRecovered)
    btnAmericasCritical.addEventListener('click', getAllCountriesAmericasCritical)



    btnAfrica.addEventListener('click', getAllCountriesAfrica)
    btnAfricaConfirmed.addEventListener('click', getAllCountriesAfricaConfirmed)
    btnAfricaRecovered.addEventListener('click', getAllCountriesAfricaRecovered)
    btnAfricaCritical.addEventListener('click', getAllCountriesAfricaCritical)





    function getAllCountriesWorld() {
        stats.innerHTML = ''
        arrayWorld.map(item => stats.innerHTML += `<span class="world" accessKey="${item.code}">${item.name}</span>`);
        const cbox = document.querySelectorAll(".world");
        cboxSelectorAll(cbox)
        Chartt(arrayWorldNames, arrayWorldValues)
    }
    function getAllCountriesWorldConfirmed() {
        stats.innerHTML = ''
        arrayWorld.map(item => stats.innerHTML += `<span class="world" accessKey="${item.code}">${item.name}</span>`);
        const cbox = document.querySelectorAll(".world");
        cboxSelectorAll(cbox)
        Chartt(arrayWorldNames, arrayyWorldValuesConfirmed)
    }
    function getAllCountriesWorldRecovered() {
        stats.innerHTML = ''
        arrayWorld.map(item => stats.innerHTML += `<span class="world" accessKey="${item.code}">${item.name}</span>`);
        const cbox = document.querySelectorAll(".world");
        cboxSelectorAll(cbox)
        Chartt(arrayWorldNames, arrayyWorldValuesRecovered)
    }
    function getAllCountriesWorldCritical() {
        stats.innerHTML = ''
        arrayWorld.map(item => stats.innerHTML += `<span class="world" accessKey="${item.code}">${item.name}</span>`);
        const cbox = document.querySelectorAll(".world");
        cboxSelectorAll(cbox)
        Chartt(arrayWorldNames, arrayyWorldValuesCritical)
    }

    function getAllCountriesAsia() {
        stats.innerHTML = ''
        arrayAsia.map(item => stats.innerHTML += `<span class="asia" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".asia");
        cboxSelectorAll(cbox)
        // chart.innerHTML = ''
        Chartt(arrayAsiaNames, arrayAsiaValues)
    }
    function getAllCountriesAsiaConfirmed() {
        stats.innerHTML = ''
        arrayAsia.map(item => stats.innerHTML += `<span class="asia" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".asia");
        cboxSelectorAll(cbox)
        // chart.innerHTML = ''
        Chartt(arrayAsiaNames, arrayAsiaValuesConfirmed)
    }
    function getAllCountriesAsiaRecovered() {
        stats.innerHTML = ''
        arrayAsia.map(item => stats.innerHTML += `<span class="asia" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".asia");
        cboxSelectorAll(cbox)
        // chart.innerHTML = ''
        Chartt(arrayAsiaNames, arrayAsiaValuesRecovered)
    }
    function getAllCountriesAsiaCritical() {
        stats.innerHTML = ''
        arrayAsia.map(item => stats.innerHTML += `<span class="asia" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".asia");
        cboxSelectorAll(cbox)
        // chart.innerHTML = ''
        Chartt(arrayAsiaNames, arrayAsiaValuesCritical)
    }

    function getAllCountriesEuropa() {
        stats.innerHTML = ''
        arrayEuropa.map(item => stats.innerHTML += `<span class="europa" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".europa");
        cboxSelectorAll(cbox)
        Chartt(arrayEuropaNames, arrayEuropaValues)
    }
    function getAllCountriesEuropaConfirmed() {
        stats.innerHTML = ''
        arrayEuropa.map(item => stats.innerHTML += `<span class="europa" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".europa");
        cboxSelectorAll(cbox)
        Chartt(arrayEuropaNames, arrayEuropaValuesConfirmed)
    }
    function getAllCountriesEuropaRecovered() {
        stats.innerHTML = ''
        arrayEuropa.map(item => stats.innerHTML += `<span class="europa" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".europa");
        cboxSelectorAll(cbox)
        Chartt(arrayEuropaNames, arrayEuropaValuesRecovered)
    }
    function getAllCountriesEuropaCritical() {
        stats.innerHTML = ''
        arrayEuropa.map(item => stats.innerHTML += `<span class="europa" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".europa");
        cboxSelectorAll(cbox)
        Chartt(arrayEuropaNames, arrayEuropaValuesCritical)
    }

    function getAllCountriesAmericas() {
        stats.innerHTML = ''
        arrayAmericas.map(item => stats.innerHTML += `<span class="americas" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".americas");
        cboxSelectorAll(cbox)
        Chartt(arrayAmericasNames, arrayAmericasValues)
    }
    function getAllCountriesAmericasConfirmed() {
        stats.innerHTML = ''
        arrayAmericas.map(item => stats.innerHTML += `<span class="americas" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".americas");
        cboxSelectorAll(cbox)
        Chartt(arrayAmericasNames, arrayAmericasValuesConfirmed)
    }
    function getAllCountriesAmericasRecovered() {
        stats.innerHTML = ''
        arrayAmericas.map(item => stats.innerHTML += `<span class="americas" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".americas");
        cboxSelectorAll(cbox)
        Chartt(arrayAmericasNames, arrayAmericasValuesRecovered)
    }
    function getAllCountriesAmericasCritical() {
        stats.innerHTML = ''
        arrayAmericas.map(item => stats.innerHTML += `<span class="americas" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".americas");
        cboxSelectorAll(cbox)
        Chartt(arrayAmericasNames, arrayAmericasValuesCritical)
    }

    function getAllCountriesAfrica() {
        stats.innerHTML = ''
        arrayAfrica.map(item => stats.innerHTML += `<span class="africa" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".africa");
        cboxSelectorAll(cbox)
        Chartt(arrayAfricaNames, arrayAfricaValues)
    }
    function getAllCountriesAfricaConfirmed() {
        stats.innerHTML = ''
        arrayAfrica.map(item => stats.innerHTML += `<span class="africa" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".africa");
        cboxSelectorAll(cbox)
        Chartt(arrayAfricaNames, arrayAfricaValuesConfirmed)
    }
    function getAllCountriesAfricaRecovered() {
        stats.innerHTML = ''
        arrayAfrica.map(item => stats.innerHTML += `<span class="africa" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".africa");
        cboxSelectorAll(cbox)
        Chartt(arrayAfricaNames, arrayAfricaValuesRecovered)
    }
    function getAllCountriesAfricaCritical() {
        stats.innerHTML = ''
        arrayAfrica.map(item => stats.innerHTML += `<span class="africa" accessKey="${item.cca2}">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".africa");
        cboxSelectorAll(cbox)
        Chartt(arrayAfricaNames, arrayAfricaValuesCritical)
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

}

covid19()

