async function x() {
    if (!localStorage.getItem("tempStorage")) {
        let data1 = await (await fetch('https://corona-api.com/countries')).json();
        let data2 = await (await fetch('https://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1')).json();
        localStorage.setItem("tempStorage", JSON.stringify({ data1: data1, data2: data2 }))
    }
    let data = JSON.parse(localStorage.getItem("tempStorage"))

    let arrayNames = []
    let arrayAsia = []
    let btnWorld = document.querySelector('.world')
    let btnAsia = document.querySelector('.asia')
    let stats = document.querySelector('.stats')

    console.log(data.data2[0].region);

    for (let i = 0; i < data.data1.data.length; i++) {
        let obj = {
            name: data.data1.data[i].name
        }
        arrayNames.push(obj)
    }

    for (let i = 0; i < data.data2.length; i++) {
        if (data.data2[i].region == 'Asia') {
            arrayAsia.push(data.data2[i])
        }
    }

    btnWorld.addEventListener('click', getAllCountriesWorld)
    btnAsia.addEventListener('click', getAllCountriesAsia)

    function getAllCountriesWorld() {
        arrayNames.map(item => stats.innerHTML += `<span>${item.name}, </span>`);
    }
    function getAllCountriesAsia() {
        arrayAsia.map(item => stats.innerHTML += `<span>${item.name}, </span>`);
    }
}

x()

