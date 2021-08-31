
const loadApi=()=>{
fetch('https://api.kanye.rest/')
.then(res=> res.json())
.then(data => showApi(data))
}

const showApi=result=>{
    const getId=document.getElementById('div-id')
    getId.innerText=result.quote
    getId.classList.add('stlecls')
}