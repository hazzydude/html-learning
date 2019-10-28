

const req = new XMLHttpRequest();
req.onload = () =>  conOut(req.responseText);
req.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
req.send();

let main = document.getElementById("main");

function conOut(text){
    data = JSON.parse(text)
    console.log(data);
}

function format(text){
data = JSON.parse(text)

let squad = document.createElement("div");
let squadname = document.createElement("h1");
squadname.innerText = data.squadName;
squad.appendChild(squadname)
let squadInfo = document.createElement("p");
squadInfo.innerText = "homeTown: " + data.homeTown + "\n" +
"formed :" + data.formed + "\n" + 
"secretBase: " + data.secretbase + "\n" +
"active: " + data.active;

squad.appendChild(squadInfo);
addMembers();

main.appendChild(squad);
}


function addMembers(){
    
}
