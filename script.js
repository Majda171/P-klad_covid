//const name = prompt("Jak se jmenujete?");
//const age = Number(prompt("Zadejte svůj věk."));

//document.body.innerHTML = `<p> ${name}, věk: ${age}`;
const pocetDnu = 21;
const pocetHodin = 8;
let hodinovaMzda = Number(prompt("Zadej hodinovou mzdu."));
const mzda = (pocetHodin * hodinovaMzda) * pocetDnu;
document.body.innerHTML = `<p>Měsíční hrubá mzda je ${mzda} Kč.</p>`;

