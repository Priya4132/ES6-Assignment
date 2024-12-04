const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];
let [{name:name1},{name:name2}]=people // extracting name of each person from array of objects people
// console.log(name1,name2)
let [{address:{city:city1,street:{name:streetName1}}},{address:{city:city2,street:{name:streetName2}}}]=people   // extracting city and street name of each person from array of objects people
// console.log(city1,streetName1,city2,streetName2);
console.log(`["${name1} lives in ${city1} on ${streetName1}", "${name2} lives in ${city2} on ${streetName2}"]`)

