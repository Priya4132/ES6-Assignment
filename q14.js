
const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

let data = {...profile,age: updates.age ?? profile.age,// Use updates.age if it exists, otherwise keep profile.age
address: {
    ...profile.address,            // Spread the existing address
    ...updates.address            // Overwrite or add new address properties from updates
  }};

console.log(data);