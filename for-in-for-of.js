const obj = {
  people: ["sally", "owen", "chad"],
  officers: true,
};

const people = ["sally", "owen", "chad"];

for (const prop in obj) {
  console.log(prop);
}

for (const person of people) {
  console.log(person);
}
