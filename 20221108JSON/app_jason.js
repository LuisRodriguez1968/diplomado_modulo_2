


const fs =require("fs");
const path =require("path");

const pathJSON= path.join(__dirname,"./db.json");

const readJSON = () =>{
    const data = fs.readFileSync(pathJSON,"utf-8");
    return JSON.parse(data);
};

const writeJSON = (data) => {
    fs.writeFileSync(pathJSON,data);
}

const data = readJSON("");

console.log(data);
