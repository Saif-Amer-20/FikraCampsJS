let fs = require('fs');
let _ = require("underscore");
let text = fs.readFileSync("./flower.txt").toString();

// Count the number of rows
let lines = text.split('\n');
console.log("Count the number of rows : " + lines.length);

// flower name that start with letter 'S'
let Start_with_S = _.filter(lines, (element) => {
    return element.startsWith("S");
});
console.log("flower name that start with letter 'S' : " + Start_with_S);

//number of Flow that not start with letter 'S'
let Not_Start_with_S = lines.length - Start_with_S.length;
console.log("number of Flow that not start with letter 'S' : " + Not_Start_with_S);


//flower start with first letter of my name
let Start_with_A = _.filter(lines, (element) => {
    return element.startsWith("A");
});
console.log("flower start with first letter of my name : " + Start_with_A);

// flower the name length is 5.
let Name_length = _.filter(lines, (element) => {
    return element.length == 5;
});
console.log("flower the name length is 5 : " + Name_length);