function postShow(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => finalPostShow(data))
}

postShow();

function finalPostShow(posts){
    const postContainer=document.getElementById('loading-post')
    for (const post of posts){
       const createDiv=document.createElement('div')
       createDiv.classList.add('post')
       createDiv.innerHTML=`
       <h2> ${post.title} </h2>
       <p> ${post.body} </P>`
       postContainer.appendChild(createDiv)
    }
}
