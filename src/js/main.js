import data from 'data/enlacesAsignaturas.js';
import calendary from "data/calendario.js";
import "jQuery";

let createA = function(link,parent){
    let a = document.createElement("a");
    a.href = link;
    a.target = "_blank"
    parent.appendChild(a);
    return a;
}

let createLi = function(parent){
    let li = document.createElement("li");
    parent.append(li);
    return li;
}

// asignatura de ahora

let getCurrentSubject = function(){
    let now = new Date();
    let day = now.getDay()-1;
    let hour = now.getHours();
    let minute = now.getMinutes();

    if(!calendary[day]){ return undefined; }

    for (const subjectData of calendary[day]) {
        let startMinutes = subjectData[1] * 60 + subjectData[2];
        let endMinutes = subjectData[3] * 60 + subjectData[4];
        let target = hour * 60 + minute;
        if(startMinutes <= target && endMinutes > target){
            return subjectData[0];
        }
    }

    return undefined;
}

let getSubjectLink = function(subject){
    return data[subject];
}

let currentSubject = getCurrentSubject();
let p = $("#ahoraMismoP");

if (!currentSubject) {
    p.html("Ahora mismo no toca ninguna asignatura.");
}else{
    let link = getSubjectLink(currentSubject);
    if(link){
        p.html("Ahora toca <a href='"+link+"' class='baseAStyle'>"+currentSubject+"</a>.");
    }else{
        p.html("Ahora toca "+currentSubject+".");
    }
}

// asignaturas que están

for (const key in data) {
    const value = data[key];

    createA(value,createLi($("#listaEnlaces"))).innerText = key;
}