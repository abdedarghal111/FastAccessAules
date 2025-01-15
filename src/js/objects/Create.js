export default class Create {
    static createA(link,parent){
        let a = document.createElement("a")
        a.href = link
        a.target = "_blank"
        parent.appendChild(a)
        return a
    }

    static createLi(parent){
        let li = document.createElement("li")
        parent.append(li)
        return li
    }
}