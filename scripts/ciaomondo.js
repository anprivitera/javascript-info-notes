"strict mode";
const PEOPLE_ARRAY = ["Alessandro", "Bobo", "Carlo"]
const nameFromArray = Math.floor(Math.random() * PEOPLE_ARRAY.length);
const nameToPrint = PEOPLE_ARRAY[nameFromArray];
document.getElementById("italian").innerHTML =`Ciao, ${nameToPrint} <br /><br /> Come stai?`;
