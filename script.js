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
    let btnWorld = document.querySelector('.world')
    let btnAsia = document.querySelector('.asia')
    let btnEuropa = document.querySelector('.europa')
    let btnAmericas = document.querySelector('.americas')
    let btnAfrica = document.querySelector('.africa')
    let stats = document.querySelector('.stats')

    console.log(data.data2);

    for (let i = 0; i < data.data1.data.length; i++) {
        arrayWorld.push(data.data1.data[i])
    }
    console.log(arrayWorld);
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
        arrayWorld.map(item => stats.innerHTML += `<span>| ${item.name} |</span>`);
    }
    function getAllCountriesAsia() {
        stats.innerHTML = ''
        arrayAsia.map(item => stats.innerHTML += `<span>| ${item.name.common} |</span>`);
    }
    function getAllCountriesEuropa() {
        stats.innerHTML = ''
        arrayEuropa.map(item => stats.innerHTML += `<span>| ${item.name.common} |</span>`);
    }
    function getAllCountriesAmericas() {
        stats.innerHTML = ''
        arrayAmericas.map(item => stats.innerHTML += `<span>| ${item.name.common} |</span>`);
    }
    function getAllCountriesAfrica() {
        stats.innerHTML = ''
        arrayAfrica.map(item => stats.innerHTML += `<span>| ${item.name.common} |</span>`);
    }
}

covid19()

