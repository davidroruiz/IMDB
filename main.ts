import { Professional } from "./professional";

let professionalOne:Professional = new Professional ("Ana de Armas", 33, "feminine", 60, 1.68, "Brown", "Brown", "Caucasian", false, "Cuban", 0, "actress")
let professionalTwo:Professional = new Professional("Javier Bardem", 52, "male", 80, 1.81, "black", "brown", "Caucasian", false, "Spanish", 1, "Actor")
let professionalThree:Professional = new Professional("Johnny Depp", 58,"male", 80, 1.78, "black", "black", "Caucasian", false, "American", 0, "Actor" )

console.log(professionalOne.printAllProfessional())
console.log(professionalTwo.printAllProfessional());
console.log(professionalThree.printAllProfessional());

