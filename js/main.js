import Person from "./modules/DataModule.js";

(() => 
{
console.log('loaded');
console.log(Person);

let userSection = document.querySelector(".user-section").children;
userSection[1].textContent = Person.name
userSection[2].textContent = Person.role
userSection[3].textContent = Person.nickname



})();s