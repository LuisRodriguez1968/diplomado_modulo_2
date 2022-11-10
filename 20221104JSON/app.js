const fs =require("fs");
const json =fs.readFileSync("cards.json").toString();
const cards = JSON.parse(json);
console.log(cards);
