var Quotes = [
    "Bon anniversaire zebi", "T'es une meuf OUF BIEN", "Fuck Darmanin", "Adjointe géniale"
    ];
    

function displayQuote(){

  var num = Math.floor(Math.random() * 4);

  document.getElementById("quote").innerHTML = Quotes[num];

}

    

