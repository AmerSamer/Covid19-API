async function covid19() {
    if (!localStorage.getItem("tempStorage")) {
        let data1 = await (await fetch('https://corona-api.com/countries')).json();
        let data2 = await (await fetch('https://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1')).json();
        localStorage.setItem("tempStorage", JSON.stringify({ data1: data1, data2: data2 }))
    }
    let data = JSON.parse(localStorage.getItem("tempStorage"))

    let arrayWorld = []
    let arrayAsia = []
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

    console.log(data.data1.data[1]);

    for (let i = 0; i < data.data1.data.length; i++) {
        arrayWorld.push(data.data1.data[i])
    }
    // console.log(arrayWorld);
    for (let i = 0; i < data.data2.length; i++) {
        if (data.data2[i].region == 'Asia') {
            arrayAsia.push(data.data2[i])
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

    btnWorld.addEventListener('click', getAllCountriesWorld)
    btnAsia.addEventListener('click', getAllCountriesAsia)
    btnEuropa.addEventListener('click', getAllCountriesEuropa)
    btnAmericas.addEventListener('click', getAllCountriesAmericas)
    btnAfrica.addEventListener('click', getAllCountriesAfrica)



    function getAllCountriesWorld() {
        stats.innerHTML = ''
        arrayWorld.map(item => stats.innerHTML += `<span class="world">${item.name}</span>`);
        const cbox = document.querySelectorAll(".world");
        cboxSelectorAll(cbox)

    }
    function getAllCountriesAsia() {
        stats.innerHTML = ''
        arrayAsia.map(item => stats.innerHTML += `<span class="asia">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".asia");
        cboxSelectorAll(cbox)

    }
    function getAllCountriesEuropa() {
        stats.innerHTML = ''
        arrayEuropa.map(item => stats.innerHTML += `<span class="europa">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".europa");
        cboxSelectorAll(cbox)

    }
    function getAllCountriesAmericas() {
        stats.innerHTML = ''
        arrayAmericas.map(item => stats.innerHTML += `<span class="americas">${item.name.common}</span>`);

        const cbox = document.querySelectorAll(".americas");

        cboxSelectorAll(cbox)
    }
    function getAllCountriesAfrica() {
        stats.innerHTML = ''
        arrayAfrica.map(item => stats.innerHTML += `<span class="africa">${item.name.common}</span>`);
        const cbox = document.querySelectorAll(".africa");
        cboxSelectorAll(cbox)
    }

    function cboxSelectorAll(cbox) {
        for (let i = 0; i < cbox.length; i++) {
            cbox[i].addEventListener("click", function () {
                for (let j = 0; j < data.data1.data.length; j++) {
                    if (data.data1.data[j].name == cbox[i].innerHTML) {
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

