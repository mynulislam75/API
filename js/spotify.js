function spotifyFunction(){
    fetch('https://api.spotify.com/v1/albums')
    .then(res=>res.json())
    .then(data=>console.log(data))
}