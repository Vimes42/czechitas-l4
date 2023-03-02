// tady je místo pro náš program

//úkol č. 1
let title = "Kokosy na sněhu";
document.body.innerHTML =	"<p>Název: " + title + "</p>";
document.body.innerHTML +=	"<p>Délka: " + title.length + "</p>";
document.body.innerHTML +=	"<p>Velká písměna: " + title.toUpperCase() + "</p>";
document.body.innerHTML +=	"<p>Prvních 5 písmen: " + title.slice(0, 5) + "</p>";
document.body.innerHTML +=	"<p>Posledních 5 písmen: " + title.slice(10, 15) + "</p>" + "<br>";


// úkol č. 2
let email = prompt("Zadej e-mail");
let atIndex = email.indexOf("@");

const parsedEmail = {
	userName: email.slice(0, atIndex),
	domain: email.slice(atIndex + 1, email.length),
}

document.body.innerHTML +=	
`<p>Uživatelské jméno: ${parsedEmail.userName} <p>` +
 `<p>Doména: ${parsedEmail.domain} <p>`;


//úkol č. 3
let street = prompt("Ulice trvalého bydliště");
let houseNumber = Number(prompt("Číslo popisné"));
let city = prompt("Město");
let postalCode = Number(prompt("PSČ"));

let adresa = `
  <address>
    <br>
    <p>Adresa:</p>  
    <p> ${street} ${houseNumber} </p>
    <p> ${postalCode} ${city} </p>
  </address>
`
document.body.innerHTML += adresa;
