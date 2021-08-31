
const loadCountries=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>showCountries(data))
}
loadCountries()

const showCountries=(countries)=>{
    const countryShow=document.getElementById('load-countries')
    countries.forEach(country => {
    //    console.log(country)
       const div=document.createElement('div')
       div.innerHTML=`

    <h3>Name:${country.name}</h3>
    <p>Capital:${country.capital}</p>
    <p>Population:${country.population}</p>
    <p>Region:${country.region}</p>
    <p>Country Code:${country.numericCode}</p>
    <button onclick="onClickFunction('${country.name}')">Show Details</button>

       `
       div.classList.add('styleOfDiv')
       countryShow.appendChild(div)
    });
}

const onClickFunction=singleCountry=>{
    const url=`https://restcountries.eu/rest/v2/name/${singleCountry}`;
    fetch(url)
    .then(res=>res.json())
    .then(singleCountryIs=>singleDetails((singleCountryIs[0])))
}

const singleDetails=details=>{
    console.log(details)
    const displayDetails=document.getElementById('show_details')
    displayDetails.innerHTML=`
    <h3>Name:${details.name}</h3>
<p>subregion:${details.subregion}</p>
<p>timezones:${details.timezones} </p>
<p>callingCodes:${details.callingCodes}</p>
<img src="${details.flag}" alt="">`
}

