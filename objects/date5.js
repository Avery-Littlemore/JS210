
let today = new Date();

let tomorrow = new Date(today.getTime());
let tomo = new Date();

tomorrow.setDate(today.getDate() + 1);
tomo.setDate(today.getDate() + 1);
console.log(tomorrow);

console.log(tomo);


let nextWeek = new Date(today.getTime());
let test = new Date();

console.log(today === nextWeek);
console.log(today === test);

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());