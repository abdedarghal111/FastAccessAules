import "jQuery"

import Create from './objects/Create.js'

import data from 'data/enlacesAsignaturas.js'
import calendary from "data/calendario.js"

// asignatura de ahora
let getCurrentSubject = function(){
    let now = new Date()
    let day = now.getDay()-1
    let hour = now.getHours()
    let minute = now.getMinutes()

    if(!calendary[day]){ return undefined }

    for (const subjectData of calendary[day]) {
        let startMinutes = subjectData[1] * 60 + subjectData[2]
        let endMinutes = subjectData[3] * 60 + subjectData[4]
        let target = hour * 60 + minute
        if(startMinutes <= target && endMinutes > target){
            return subjectData[0]
        }
    }

    return undefined
}

let getSubjectLink = function(subject){
    return data[subject]
}

let rightNowTag = $("#ahoraMismoP")
let linksListTag = $("#listaEnlaces")

let refreshPage = function(){
    rightNowTag.html("")
    linksListTag.html("")
    
    let currentSubject = getCurrentSubject()
    if (!currentSubject) {
        rightNowTag.html("Ahora mismo no toca ninguna asignatura.")
    }else{
        let link = getSubjectLink(currentSubject)
        if(link){
            let parent = rightNowTag.get(0)
            Create.createText("Ahora toca ", parent)
            let a = Create.createA(link, parent)
            a.classList.add("baseAStyle")
            a.innerText = currentSubject
            Create.createText(".", parent)
        }else{
            rightNowTag.html("Ahora toca "+currentSubject+".")
        }
    }

    // asignaturas que están
    for (const key in data) {
        const value = data[key]

        let li = Create.createLi(linksListTag)
        let a = Create.createA(value,li)
        a.innerText = key
    }
}

refreshPage()

setTimeout(refreshPage, 60 * 1000) // 60 segundos