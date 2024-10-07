const names = prompt("Jak se jmenujete?");
const age = Number(prompt("Zadejte svůj věk."));


const person = {
    name: names, 
    age: age 
};
document.body.innerHTML = `<p>Jméno a příjmení: ${person.name}, věk: ${person.age}</p>`;
/*const pocetDnu = 21;
const pocetHodin = 8;
let hodinovaMzda = Number(prompt("Zadej hodinovou mzdu."));
const mzda = (pocetHodin * hodinovaMzda) * pocetDnu;
document.body.innerHTML = `<p>Měsíční hrubá mzda je ${mzda} Kč.</p>`;*/

/*const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

document.body.innerHTML = `${apartment.disposition} </br>`;
document.body.innerHTML += `${apartment.price.rent} </br>`;
document.body.innerHTML += `${apartment.area.floorage} </br>`;


const city = apartment.city;
const  District = apartment.district;

document.body.innerHTML += `${city} ${District}`;


apartment.status = 'taken';

const kniha = {
    autor: "J.K. Rowlingová",
    name: "Harry Potter a Tajemná komnata",
    rok: 1997,
    pocetStran: 278,
    zanr: "fantasy",
    lokace:{
        police:8,
        regal:12,
    } 
    
};

const kniha2 = {
    autor: "J.K. Rowlingová",
    name: "Harry Potter a Vězeň",
    rok: 1998,
    pocetStran: 478,
    zanr: "fantasy",
    lokace:{
        police:9,
        regal:12,
    } 
    
};*/