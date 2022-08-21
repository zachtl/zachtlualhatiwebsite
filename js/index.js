var settings = {
    "url": "https://catfact.ninja/fact",
    "method": "GET",
    "timeout": 0
}

$.ajax(settings).done(function (resp1) {
  console.log(resp1.fact);
  document.getElementById("res").innerText = 'I havent done anything big to the website, but heres a random cat fact "'+ resp1.fact + '"';
  $.ajax({
    "url": "https://api.thecatapi.com/v1/images/search",
    "method": "GET",
    "timeout": 0
    }).done(function (resp2){
        console.log(resp2[0].url)
        document.body.style.backgroundImage = 'url("'+ resp2[0].url +'")';
    })
});